// Creates polygons in Desmos 3D from Blender output

state = Calc.getState()

// Set object name
objectName = 'name'

//// PASTE BLENDER OUTPUT HERE

////

n = polygons.length

// Define color list
var myColors="";
var myDepths="";
var myOpacity=[];
var v1="";
var v2="";
var v3="";


for (let i = 0; i < n; i++) {
    vertex1 = "v_{ertices}\\left[" + polygons[i].slice(4,5) + "+1\\right]"
    vertex2 = "v_{ertices}\\left[" + polygons[i].slice(5,6) + "+1\\right]";
    vertex3 = "v_{ertices}\\left[" + polygons[i].slice(6,7) + "+1\\right]";
    myColors += "\\operatorname{hsv}\\left("+polygons[i].slice(1,4)+"\\cdot s_{hadow}\\left("+ vertex1 + "," + vertex2 + "," + vertex3 + "\\right)\\right),";
    myOpacity.push(polygons[i].slice(0,1));
    v1 += "v_{ertices}\\left[" + polygons[i].slice(4,5) + "+1\\right],";
    v2 += "v_{ertices}\\left[" + polygons[i].slice(5,6) + "+1\\right],";
    v3 += "v_{ertices}\\left[" + polygons[i].slice(6,7) + "+1\\right],";
}

myDepths = myDepths.slice(0,-1)
myColors = myColors.slice(0,-1)
v1 = v1.slice(0,-1)
v2 = v2.slice(0,-1)
v3 = v3.slice(0,-1)

var myPolygons2 = ""

var polygonText = "\\operatorname{triangle}\\left(\\left["+v1+"\\right],\\left["+v2+"\\right],\\left["+v3+"\\right]\\right)";

// for (let i = 0; i < n; i++) {
//     // numVertices = polygons[i].length - 4
//     polygonText = "v_{ertices}\\left[s_{"+objectName+i+"}+1\\right],"
//     polygonText = polygonText.slice(0,-1)
    
//     myPolygons2 += "p_{olygon}\\left("+polygonText+"\\right),"
// }
// myPolygons2 = myPolygons2.slice(0,-1)


state.expressions.list.push(
{
    type: "folder",
    id: "3",
    collapsed: true,
    title: objectName
},
{ // Color list
    type: "expression",
    folderId: "3",
    latex: "c_{olors}=\\left["+myColors+"\\right]"
},
// { // Graph polygons
//     type: "expression",
//     folderId: "3",
//     lineOpacity: "1",
//     lineWidth: "1",
//     fillOpacity: "0",
//     colorLatex: "\\left(\\left["+myColors+"\\right]",
//     latex: polygonText
// },
{ // Graph polygons
    type: "expression",
    folderId: "3",
    lineOpacity: "0",
    fillOpacity: "\\left["+myOpacity+"\\right]",
    colorLatex: "\\left["+myColors+"\\right]",
    latex: polygonText
},
{
    type: "expression",
    folderId: "3",
    hidden: true,
    latex: "v_{ertices}=[" + vertices + "]"
},
// {
//     type: "expression",
//     folderId: "3",
//     latex: "v_{ertices3d"+objectName+"}=[" + vertices_3d + "]",
//     hidden: true
// },
)
// Add individual polygon expressions
// for (let i = 0; i < polygons.length; i++) {
//     state.expressions.list.push({
//         type: "expression",
//         folderId: "3",
//         latex: "s_{"+objectName+i+"}=\\left["+polygons[i].slice(4)+"\\right]"
//     })
// }

Calc.setState(state)