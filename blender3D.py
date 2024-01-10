import bpy
from mathutils import Color
import os


home_dir = os.path.expanduser("~")
file_path = os.path.join(home_dir, 'desmos_file1.txt')
f1 = open(file_path,'w')

obdata = bpy.context.object
obdata = bpy.context.selected_objects # Comment out to export all objects, not just selected ones

all_objects = [ o for o in bpy.context.scene.objects]
all_objects = [ o for o in bpy.context.selected_objects] # Comment out to export all objects, not just selected ones
objects=[]
objects2=[]
global_vertex_index = 0
vertices_3d=[]
all_vertices=[]
object_vertices = {}
    
for object in all_objects:
    local_vertex_index = 0
    
    vertices=[]
    edges=[]
    faces = []
    faces2 = []
    
    for v in object.data.vertices:
        vertices.append([v.co.x,v.co.z,-v.co.y])
        all_vertices.append([round(v.co.x,4), round(v.co.y,4),round(v.co.z,4)])
    
    for vertex in vertices:
        local_vertex_index += 1
        vertices_3d.append(f"\\\\left({vertex[0]},{vertex[1]},{vertex[2]}\\\\right)")

    for f in object.data.polygons:
        face=[]
        face2=[]
        for v in f.vertices:
            face.append(all_vertices[int(format(v+global_vertex_index))])
            face2.append(v+global_vertex_index)
        faces.append(face)
        faces2.append(face2)
    
    global_vertex_index += local_vertex_index
    for s in object.material_slots:
        material=object.material_slots[0].material
        nodes=material.node_tree.nodes
        principled=next(n for n in nodes if n.type == 'BSDF_PRINCIPLED')
        base_color = principled.inputs['Base Color']
        value = base_color.default_value
        color = Color((value[0], value[1], value[2])).hsv
        faces.append([object.name,object.location,color])
        faces2.append([object.name,object.location,color])
        
    objects.append(faces)
    objects2.append(faces2)
    faces = []
    faces2 = []
    
#f1.write("const vertices_3d=[\n")

#for vertex in vertices_3d:
#    f1.write(f"\'{vertex}\',\n")
#f1.write("]\n\n")

f1.write("const vertices=[\n")
for vertex in all_vertices:
    f1.write(f"'\\\\left({vertex[0]}, {vertex[1]}, {vertex[2]}\\\\right)',\n")
f1.write("]")

f1.write("\n\nconst polygons=[\n")

for object in objects2:
    f1.write('\n\n// {}\n'.format(object[-1][0]))
    position = object[-1][1]
    color=object[-1][2]

    for face in object[:-1]:
        
        f1.write('[1,{},{},{},\n'.format(round(color[0]*360,3),round(color[1],3),round(color[2],3)))
        i = 0
        face.reverse()
        for vertex in face:            
            if i != len(face)-1:
                f1.write('{},\n'.format(vertex))
            else:
                f1.write('{}],\n\n'.format(vertex))
            
            i += 1
f1.write("]")

f1.close()


#obdata = bpy.context.object
#obdata = bpy.context.selected_objects # Comment out to export all objects, not just selected ones

#all_objects = [ o for o in bpy.context.scene.objects]
#all_objects = [ o for o in bpy.context.selected_objects] # Comment out to export all objects, not just selected ones
#objects=[]



#for object in all_objects:
#    for s in object.material_slots:
#        
#        material=object.material_slots[0].material
#        nodes=material.node_tree.nodes
#        principled=next(n for n in nodes if n.type == 'BSDF_PRINCIPLED')
#        base_color = principled.inputs['Base Color']
#        value = base_color.default_value
#        color = Color((value[0], value[1], value[2])).hsv
#    
#    vertices=[]
#    edges=[]
#    faces=[]

#    for v in object.data.vertices:
#        vertices.append([v.co.x,v.co.z,-v.co.y])

#    for f in object.data.polygons:
#        face=[]
#        for v in f.vertices:
#            face.append(vertices[int(format(v))])
#        faces.append(face)
#    faces.append([object.name,object.location,color])
#    objects.append(faces)
#    
#home_dir = os.path.expanduser("~")
#file_path = os.path.join(home_dir, 'desmos_file1.txt')
#f = open(file_path,'w')

#print("VERTICES\n")
#print(vertices)
#print("\n")

#for object in objects:
#    f.write('\n\n// {}\n'.format(object[-1][0]))
#    position = object[-1][1]
#    color=object[-1][2]
#    print(object[-1])
#    for face in object[:-1]:
#        if object[-1][0] == 'water':
#            f.write('[.8,{},{},{},\n'.format(round(color[0]*360,3),round(color[1],3),round(color[2],3)))
#        else:
#            f.write('[1,{},{},{},\n'.format(round(color[0]*360,3),round(color[1],3),round(color[2],3)))
#        i = 0
#        face.reverse()
#        for vertex in face:
#            x_coord = round(vertex[0]+position[2],3)
#            y_coord = round(vertex[1]+position[2],3)
#            z_coord = round(vertex[2]+position[2],3)
#            
#            # If not water
#            if not object[-1][0] == 'water':
#                if i != len(face)-1:
#                    f.write('{},{},{},\n'.format(x_coord,y_coord,z_coord))
#                else:
#                    f.write('{},{},{}],\n\n'.format(x_coord,y_coord,z_coord))
#            # If on bottom
#            elif y_coord != 2.0:
#                if i != len(face)-1:
#                    f.write('{},{},{},\n'.format(x_coord,y_coord,z_coord))
#                else:
#                    f.write('{},{},{}],\n\n'.format(x_coord,y_coord,z_coord))
#            # on water surface
#            elif y_coord == 2.0:
#                # surface edge
#                if x_coord == 5.0 or x_coord == -5.0 or z_coord == 5.0 or z_coord == -5.0:
#                    if i != len(face)-1:
#                        f.write('{x},\'{y} +w_{{ave1}}\\\\left({x}\\\\right) +w_{{ave2}}\\\\left({z}\\\\right)\',{z},\n'.format(x=x_coord,y=y_coord,z=z_coord))
#                    else:
#                        f.write('{x},\'{y} +w_{{ave1}}\\\\left({x}\\\\right) +w_{{ave2}}\\\\left({z}\\\\right)\',{z}],\n\n'.format(x=x_coord,y=y_coord,z=z_coord))
#                # surface middle
#                else:
#                    if i != len(face)-1:
#                        f.write('\'{x} +w_{{ave3}}\\\\left({x}+{z}\\\\right) \',\'{y} +w_{{ave1}}\\\\left({x}\\\\right) +w_{{ave2}}\\\\left({z}\\\\right)\',{z},\n'.format(x=x_coord,y=y_coord,z=z_coord))
#                    else:
#                        f.write('\'{x} +w_{{ave3}}\\\\left({x}+{z}\\\\right) \',\'{y} +w_{{ave1}}\\\\left({x}\\\\right) +w_{{ave2}}\\\\left({z}\\\\right)\',{z}],\n\n'.format(x=x_coord,y=y_coord,z=z_coord))
#            i += 1
#f.close()



