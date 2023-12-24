import bpy
from mathutils import Color
import os

home_dir = os.path.expanduser("~")
file_path = os.path.join(home_dir, 'desmos_file1.txt')
f1 = open(file_path,'w')
file_path = os.path.join(home_dir, 'desmos_file2.txt')
f2 = open(file_path,'w')

obdata = bpy.context.object
obdata = bpy.context.selected_objects

all_objects = [ o for o in bpy.context.scene.objects]
all_objects = [ o for o in bpy.context.selected_objects]
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
        all_vertices.append([v.co.x,v.co.z,-v.co.y])
    
    for vertex in vertices:
        local_vertex_index += 1
        vertices_3d.append(f"f_{{1c}}\\\\left({vertex[0]},{vertex[1]},{vertex[2]}\\\\right)")

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
        faces2.append([object.name,object.location,color,object.users_collection])
        
    objects.append(faces)
    objects2.append(faces2)
    faces = []
    faces2 = []

#for object in objects2:
#    for face in object[:-1]:
#        i = 0
#        for vertex in face:
#            if object[-1][0] == 'ball 1':
#                all_vertices[i] = ['{}+b_{{all1}}[1]'.format(all_vertices[i][0])]
#            i += 1


#collection = bpy.data.collections['Ball 1']

#for o in obdata:
#    f2.write("{}\n".format(str(o.users_collection)))
#    f2.write("{}\n".format(str(collection in o.users_collection)))
        
for object in objects2: # TODO
    collection = object[-1][3]
    for face in object[:-1]:
#        face.reverse()
        for vertex in face:
            f2.write("\n\n\n{}\n\n{}\n\nall_vertices[vertex]: {}\n".format(vertex,all_vertices,all_vertices[vertex]))
            f2.write("is b in all_vertices[vertex]?: {}\n".format('b' in str(all_vertices[vertex])))
            f2.write("is r in all_vertices[vertex]?: {}\n".format('r' in str(all_vertices[vertex])))
            if object[-1][0] == 'ball 1' and (('b' in str(all_vertices[vertex])) == False): # TODO and ...
                # If object is a ball
                all_vertices[vertex][0] = "r_{otateZX}\\\\left(["+format(','.join(map(str, all_vertices[vertex])))+"],O_1,\\\\phi_{ball1}\\\\right)"
                all_vertices[vertex][1] = "r_{otateZY}\\\\left(["+format(','.join(map(str, all_vertices[vertex])))+"],O_1,\\\\phi_{ball1}\\\\right)"
#                new_vertex = all_vertices[vertex].split(',')
                all_vertices[vertex] = ['{}+b_{{all1}}[1]'.format(all_vertices[vertex][0]),'{}+b_{{all1}}[2]'.format(all_vertices[vertex][1]),'{}+b_{{all1}}[3]'.format(all_vertices[vertex][2])]
#            f2.write("\n{}\n".format(str(all_vertices[vertex])))
#            if bpy.data.collections['Newtons Cradle'] in collection and ('r' in str(all_vertices[vertex])) == False: # TODO and ...
#                # If object is part of Newtons Cradle
##                f2.write("\nr_{{otateY}}\\\\left({all_vertices[vertex]},O_1,R_1\\\\right)\n")
#                all_vertices[vertex][0] = "r_{{otateYX}}\\\\left({all_vertices[vertex][0]},O_1,R_1\\\\right)"
#                all_vertices[vertex][2] = "r_{{otateYZ}}\\\\left({all_vertices[vertex][2]},O_1,R_1\\\\right)"

##                all_vertices[vertex] = ['{}+b_{{all1}}[1]'.format(all_vertices[vertex][0]),'{}+b_{{all1}}[2]'.format(all_vertices[vertex][1]),'{}+b_{{all1}}[3]'.format(all_vertices[vertex][2])]
            f2.write("\nupdated all_vertices[vertex]: {}".format(all_vertices[vertex]))
vertices_3d_2 = []

for v in all_vertices:
    vertices_3d_2.append(f"f_{{1c}}\\\\left({v[0]},{v[1]},{v[2]}\\\\right)")
    
f1.write("const vertices_3d=[\n")

for vertex in vertices_3d_2:
    f1.write(f"\'{vertex}\',\n")
f1.write("]\n\n")

f1.write("const vertices=[\n")
for vertex in all_vertices:
    f1.write(f"\'{vertex[0]}\', \'{vertex[1]}\', \'{vertex[2]}\',\n")
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
#            if object[-1][0] == 'ball 1':
#                all_vertices[i] = ['{}+b_{{all1}}[1]'.format(all_vertices[i][0]),'{}+b_{{all1}}[2]'.format(all_vertices[i][1]),'{}+b_{{all1}}[3]'.format(all_vertices[i][2])]
#                f2.write("{}\n".format(all_vertices[i]))
#            else:
            if i != len(face)-1:
                f1.write('{},\n'.format(vertex))
            else:
                f1.write('{}],\n\n'.format(vertex))
            
            i += 1
f1.write("]")

f1.close()
f2.close()



