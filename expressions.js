// Creates dynamic 3D polygons from Blender output

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
for (let i = 0; i < n; i++) {
    myColors += "\\operatorname{hsv}\\left("+polygons[i].slice(1,4)+"\\cdot s_{hadow}\\left(s_{"+objectName+i+"},v_{ertices"+objectName+"}\\right)\\right),";
    myDepths += "d_{epth}\\left(s_{"+objectName+i+"},v_{ertices"+objectName+"}\\right),"
    myOpacity.push(polygons[i].slice(0,1))
}

console.log(myOpacity)

myDepths = myDepths.slice(0,-1)
myColors = myColors.slice(0,-1)

var myPolygons2 = ""
for (let i = 0; i < n; i++) {
    numVertices = polygons[i].length - 4
    polygonText = "v_{ertices3d"+objectName+"}\\left[s_{"+objectName+i+"}+1\\right],"
    polygonText = polygonText.slice(0,-1)
    myPolygons2 += "p_{olygon}\\left("+polygonText+"\\right),"
}
myPolygons2 = myPolygons2.slice(0,-1)


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
    latex: "c_{olors"+objectName+"}=\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths"+objectName+"}\\right)"
},
{
    type: "expression",
    folderId: "3",
    latex: "d_{epths"+objectName+"}=\\left["+myDepths+"\\right]"
},
{ // Graph polygons
    type: "expression",
    folderId: "3",
    lineOpacity: "1",
    lineWidth: "1",
    fillOpacity: "0",
    colorLatex: "\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths"+objectName+"}\\right)",
    latex: "\\operatorname{sort}\\left(\\left["+myPolygons2+"\\right],d_{epths"+objectName+"}\\right)"
},
{ // Graph polygons
    type: "expression",
    folderId: "3",
    lineOpacity: "0",
    fillOpacity: "\\operatorname{sort}\\left(\\left["+myOpacity+"\\right],d_{epths"+objectName+"}\\right)",
    colorLatex: "\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths"+objectName+"}\\right)",
    latex: "\\operatorname{sort}\\left(\\left["+myPolygons2+"\\right],d_{epths"+objectName+"}\\right)"
},
{
    type: "expression",
    folderId: "3",
    latex: "v_{ertices"+objectName+"}=[" + vertices + "]"
},
{
    type: "expression",
    folderId: "3",
    latex: "v_{ertices3d"+objectName+"}=[" + vertices_3d + "]",
    hidden: true
},
)
// Add individual polygon expressions
for (let i = 0; i < polygons.length; i++) {
    state.expressions.list.push({
        type: "expression",
        folderId: "3",
        latex: "s_{"+objectName+i+"}=\\left["+polygons[i].slice(4)+"\\right]"
    })
}

Calc.setState(state)