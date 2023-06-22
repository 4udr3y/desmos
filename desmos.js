state = Calc.getState()

state.expressions.list.push(
{
    type: "folder",
    id: "3",
    collapsed: true,
    title: 'Controls'
},
{
    type: "expression",
    folderId: "3",
    latex: "l_{ightlist}=\\left[20\\cos\\phi,5,20\\sin\\phi\\right]"
},
{
    type: "expression",
    folderId: "3",
    latex: "l_{ight}=n_{ormalize}\\left(l_{ightlist}\\right)"
},
{
    type: "expression",
    folderId: "3",
    latex: "\\phi=0.34",
    slider: {hardMin: true, hardMax: true, loopMode: 'LOOP_FORWARD', min: '0', max: '2\\pi'}
},
{
    type: "expression",
    folderId: "3",
    latex: "a=-0.72"
},
{
    type: "expression",
    folderId: "3",
    slider: {hardMax: true, max: '10'},
    latex: "a_{2}=-0.4"
},
{
    type: "expression",
    folderId: "3",
    latex: "d=40"
},
{
    type: "text",
    folderId: "3",
    text: "toggle orthographic/perspective"
},
{
    type: "expression",
    folderId: "3",
    latex: "t_{oggle}=1",
    slider: {hardMin: true, hardMax: true, min: '0', max: '1', step:'1'}
    
},
{
    type: "expression",
    folderId: "3",
    color: Desmos.Colors.BLACK,
    hidden: true,
    latex: "\\left(-10a,10a_{2}\\right)"
},
{
    type: "folder",
    id: "1",
    collapsed: true,
    title: 'Functions'
},
{
    type: "text",
    folderId: "1",
    text: "polar to point"
},
{  
    type: "expression",
    folderId: "1",
    latex: "f_{1}\\left(x,y,\\theta\\right)=\\left(\\frac{d}{d-f_{2}\\left(x,y,\\theta\\right)\\cdot t_{oggle}}x\\cos\\left(a+\\theta\\right),\\frac{d}{d-f_{2}\\left(x,y,\\theta\\right)\\cdot t_{oggle}}\\left(x\\sin\\left(a_{2}\\right)\\sin\\left(a+\\theta\\right)+y\\cos\\left(a_{2}\\right)\\right)\\right)"
},

{
    type: "text",
    folderId: "1",
    text: "polar to depth"
},
{
    type: "expression",
    folderId: "1",
    latex: "f_{2}\\left(x,y,\\theta\\right)=x\\sin\\left(a+\\theta\\right)\\cos\\left(a_{2}\\right)-y\\sin\\left(a_{2}\\right)"
},

{
    type: "text",
    folderId: "1",
    text: "cartesian to point"
},
{
    type: "expression",
    folderId: "1",
    latex: "f_{1c}\\left(x,y,z\\right)=f_{1}\\left(\\sqrt{x^{2}+z^{2}},y,\\tan^{-1}\\left(\\frac{z+.0001}{x}\\right)+\\left\\{x<0:1,0\\right\\}\\pi\\right)"
},

{
    type: "text",
    folderId: "1",
    text: "cartesian to depth"
},
{
    type: "expression",
    folderId: "1",
    latex: "f_{2c}\\left(x,y,z\\right)=f_{2}\\left(\\sqrt{x^{2}+z^{2}},y,\\tan^{-1}\\left(\\frac{z+.0001}{x}\\right)+\\left\\{x<0:1,0\\right\\}\\pi\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "polar to cartesian"
},
{
    type: "expression",
    folderId: "1",
    latex: "c_{artesian}\\left(x,y,\\theta\\right)=\\left[x\\cos\\theta,y,x\\sin\\theta\\right]"
},

{
    type: "text",
    folderId: "1",
    text: "cartesian list to polygon"
},
{
    "type": "expression",
    "id": "1130",
    "color": "#c74440",
    "latex": "p_{olygon}\\left(l_{ist}\\right)=\\left\\{w_{inding}\\left(\\left[l_{ist}\\left[1\\right],l_{ist}\\left[2\\right],l_{ist}\\left[3\\right]\\right]\\right)>0:\\operatorname{polygon}\\left(l_{ist}\\right)\\right\\}"
},
{
    type: "text",
    folderId: "1",
    text: "calculates polygon depth given list"
},
// {
//     type: "expression",
//     folderId: "1",
//     latex: "d_{epth}\\left(l_{ist}\\right)=f_{2c}\\left(\\frac{\\sum_{n=0}^{\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}-1}l_{ist}\\left[3n+1\\right]}{\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}},\\frac{\\sum_{n=0}^{\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}-1}l_{ist}\\left[3n+2\\right]}{\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}},\\frac{\\sum_{n=0}^{\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}-1}l_{ist}\\left[3n+3\\right]}{\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}}\\right)"
// },
{
    type: "expression",
    id: "1153",
    color: "#6042a6",
    latex: "d_{epth}\\left(l_{ist}\\right)=\\operatorname{mean}\\left(\\left[f_{2c}\\left(v_{ertices}\\left[3\\cdot l_{ist}\\left[i\\right]-3+1\\right],v_{ertices}\\left[3\\cdot l_{ist}\\left[i\\right]-3+2\\right],v_{ertices}\\left[3\\cdot l_{ist}\\left[i\\right]-3+3\\right]\\right)\\operatorname{for}i=\\left[1...\\operatorname{length}\\left(l_{ist}\\right)\\right]\\right]\\right)"
},

{
    type: "text",
    folderId: "1",
    text: "convert from list of coords to list of points"
},
{
    type: "expression",
    folderId: "1",
    latex: "c_{onvert}\\left(l_{ist}\\right)=\\left[f_{1c}\\left(l_{ist}\\left[3i+1\\right],l_{ist}\\left[3i+2\\right],l_{ist}\\left[3i+3\\right]\\right)\\operatorname{for}i=\\left[0...\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}-1\\right]\\right]"
},
{
    type: "text",
    folderId: "1",
    text: "https://www.element84.com/blog/determining-the-winding-of-a-polygon-given-as-a-set-of-ordered-points"
},
{
    type: "text",
    folderId: "1",
    text: "backface culling"
},
{
    type: "expression",
    folderId: "1",
    latex: "w_{inding}\\left(l_{ist}\\right)=\\left(\\sum_{n=1}^{\\operatorname{length}\\left(l_{ist}\\right)-1}\\left(l_{ist}\\left[n+1\\right].x-l_{ist}\\left[n\\right].x\\right)\\left(l_{ist}\\left[n+1\\right].y+l_{ist}\\left[n\\right].y\\right)\\right)+\\left(l_{ist}\\left[1\\right].x-l_{ist}\\left[\\operatorname{length}\\left(l_{ist}\\right)\\right].x\\right)\\left(l_{ist}\\left[1\\right].y+l_{ist}\\left[\\operatorname{length}\\left(l_{ist}\\right)\\right].y\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "vector operations"
},
{
    type: "expression",
    folderId: "1",
    latex: "c_{ross}\\left(A,B\\right)=\\left[A\\left[2\\right]B\\left[3\\right]-A\\left[3\\right]B\\left[2\\right],A\\left[3\\right]B\\left[1\\right]-A\\left[1\\right]B\\left[3\\right],A\\left[1\\right]B\\left[2\\right]-A\\left[2\\right]B\\left[1\\right]\\right]"
},
{
    type: "expression",
    folderId: "1",
    latex: "d_{ot}\\left(A,B\\right)=A\\left[1\\right]B\\left[1\\right]+A\\left[2\\right]B\\left[2\\right]+A\\left[3\\right]B\\left[3\\right]"
},
{
    type: "expression",
    folderId: "1",
    latex: "m_{agnitude}\\left(v\\right)=\\sqrt{v\\left[1\\right]^{2}+v\\left[2\\right]^{2}+v\\left[3\\right]^{2}}"
},
{
    type: "expression",
    folderId: "1",
    latex: "n_{ormalize}\\left(v\\right)=\\left[\\frac{v\\left[1\\right]}{m_{agnitude}\\left(v\\right)},\\frac{v\\left[2\\right]}{m_{agnitude}\\left(v\\right)},\\frac{v\\left[3\\right]}{m_{agnitude}\\left(v\\right)}\\right]"
},
{
    type: "text",
    folderId: "1",
    text: "surface normal"
},
{
    type: "expression",
    id: "1210",
    folderId: "1",
    latex: "n_{ormal}\\left(l_{ist}\\right)=-c_{ross}\\left(\\operatorname{join}\\left(l_{ist}\\left[7\\right]-l_{ist}\\left[4\\right],l_{ist}\\left[8\\right]-l_{ist}\\left[5\\right],l_{ist}\\left[9\\right]-l_{ist}\\left[6\\right]\\right),\\operatorname{join}\\left(l_{ist}\\left[1\\right]-l_{ist}\\left[4\\right],l_{ist}\\left[2\\right]-l_{ist}\\left[5\\right],l_{ist}\\left[3\\right]-l_{ist}\\left[6\\right]\\right)\\right)"
},
{
    type: "expression",
    id: "1296",
    folderId: "1",
    color: "#6042a6",
    latex: "g_{etface}\\left(s\\right)=z_{ip}\\left(v_{ertices}\\left[\\left(s+1\\right)\\cdot3-2\\right],v_{ertices}\\left[\\left(s+1\\right)\\cdot3-1\\right],v_{ertices}\\left[\\left(s+1\\right)\\cdot3\\right]\\right)",
    hidden: true
},
{
    type: "expression",
    id: "1286",
    color: "#6042a6",
    folderId: "1",
    latex: "z_{ip}\\left(L_{1},L_{2},L_{3}\\right)=\\operatorname{join}\\left(L_{1},L_{2},L_{3}\\right)\\left[\\operatorname{floor}\\left(\\left[1,\\frac{4}{3}...\\operatorname{length}\\left(L_{1}\\right)+\\frac{2}{3}\\right]\\right)+\\operatorname{length}\\left(L_{1}\\right)\\operatorname{mod}\\left(\\operatorname{mod}\\left(\\left[0...3\\cdot\\operatorname{length}\\left(L_{1}\\right)\\right],3\\right)-2,2\\right)+\\operatorname{length}\\left(L_{1}\\right)\\cdot2\\operatorname{floor}\\left(\\left|\\operatorname{mod}\\left(\\left[0...3\\cdot\\operatorname{length}\\left(L_{1}\\right)\\right],3\\right)-.5\\right|\\right)\\right]"
},
{
    type: "text",
    folderId: "1",
    text: "shading"
},
{
    type: "expression",
    folderId: "1",
    // latex: "s_{hadow}\\left(f_{ace}\\right)=.5+d_{ot}\\left(l_{ight},n_{ormalize}\\left(n_{ormal}\\left(f_{ace}\\right)\\right)\\right)\\cdot.5"
    latex: "s_{hadow}\\left(f_{ace}\\right)=.5+d_{ot}\\left(l_{ight},n_{ormalize}\\left(n_{ormal}\\left(g_{etface}\\left(f_{ace}\\right)\\right)\\right)\\right)\\cdot.5"
},

{
    type: "expression",
    id: "1073",
    color: "#000000",
    latex: "w_{ave1}\\left(x\\right)=.4\\sin\\left(x+w_{aveanimation}\\right)",
    hidden: true
},
{
    type: "expression",
    id: "1075",
    color: "#2d70b3",
    latex: "w_{ave2}\\left(x\\right)=.1\\sin\\left(1.3x+.4w_{aveanimation}\\right)",
    hidden: true
},
{
    type: "expression",
    id: "1076",
    color: "#388c46",
    latex: "w_{ave3}\\left(x\\right)=.4\\sin\\left(1.3x+1.4w_{aveanimation}\\right)",
    hidden: true
},
{
    type: "expression",
    id: "1074",
    color: "#c74440",
    latex: "w_{aveanimation}=0",
    hidden: true,
    slider: {
        hardMin: true,
        hardMax: true,
        animationPeriod: 40000,
        loopMode: "LOOP_FORWARD",
        min: "0",
        max: "10\\pi",
        step: ".1"
    }
}



)

// PASTE BLENDER OUTPUT HERE



n = polygons.length

// Define color list
var myColors="";
var myDepths="";
var myOpacity=[];
// var myColors2=[]
for (let i = 0; i < n; i++) {
    myColors += "\\operatorname{hsv}\\left("+polygons[i].slice(1,4)+"\\cdot s_{hadow}\\left(s_{"+i+"}\\right)\\right),";
    myDepths += "d_{epth}\\left(s_{"+i+"}\\right),"
    myOpacity.push(polygons[i].slice(0,1))
    // myColors2.push("\\operatorname{hsv}\\left("+polygons[i].slice(0,3)+"\\cdot s_{hadow}\\left(s_{"+i+"}\\right)\\right)")
}

console.log(myOpacity)

myDepths = myDepths.slice(0,-1)
myColors = myColors.slice(0,-1)

var myPolygons2 = ""
for (let i = 0; i < n; i++) {
    numVertices = polygons[i].length - 4
    polygonText = ""
    for (let j = 0; j < numVertices; j++) {
        polygonText += "v_{ertices3d}\\left[s_{"+i+"}\\left["+j+"+1\\right]+1\\right],"
    }
    polygonText = polygonText.slice(0,-1)
    myPolygons2 += "p_{olygon}\\left(\\left["+polygonText+"\\right]\\right),"
}
myPolygons2 = myPolygons2.slice(0,-1)


state.expressions.list.push(
{ // Background color
    type: "expression",
    latex: "b_{ackground}=\\operatorname{rgb}\\left(214,214,214\\right)"
},
{ // Background
    type: "expression",
    color: "#d6d6d6",
    fillOpacity: "1",
    latex: "\\left[-1,1\\right]y<100"
},
{ // Color list
    type: "expression",
    latex: "c_{olors}=\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths}\\right)"
},
{
    type: "expression",
    latex: "d_{epths}=\\left["+myDepths+"\\right]"
},
{ // Graph polygons
    type: "expression",
    lineOpacity: "1",
    lineWidth: "1",
    fillOpacity: "0",
    colorLatex: "\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths}\\right)",
    latex: "\\operatorname{sort}\\left(\\left["+myPolygons2+"\\right],d_{epths}\\right)"
},
// {
//     type: "expression",
//     lineOpacity: "0",
//     fillOpacity: "\\operatorname{sort}\\left(\\left["+myOpacity+"\\right],d_{epths}\\right)",
//     colorLatex: "\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths}\\right)",
//     latex: myPolygons2
// },
{ // Graph polygons
    type: "expression",
    lineOpacity: "0",
    fillOpacity: "\\operatorname{sort}\\left(\\left["+myOpacity+"\\right],d_{epths}\\right)",
    colorLatex: "\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths}\\right)",
    latex: "\\operatorname{sort}\\left(\\left["+myPolygons2+"\\right],d_{epths}\\right)"
},
{ // Light visual
    type: "expression",
    color: Desmos.Colors.ORANGE,
    latex: "f_{1c}\\left(l_{ightlist}\\left[1\\right],l_{ightlist}\\left[2\\right],l_{ightlist}\\left[3\\right]\\right)"
},
{
    type: "folder",
    id: "2",
    collapsed: true,
    title: "Polygons"
},
)

// Add individual polygon expressions
for (let i = 0; i < polygons.length; i++) {
    state.expressions.list.push({
        type: "expression",
        folderId: "2",
        latex: "s_{"+i+"}=\\left["+polygons[i].slice(4)+"\\right]"
    })
}

state.expressions.list.push(
    {type: 'image',
    center: "\\left(d_{rag}\\right)",
    draggable: true,
    height: "100",
    id: "990",
    image_url: "https://placehold.co/400",
    name: "transparent.png",
    width: "100"},
    {
        type: "expression",
        id: "1",
        foreground: true,
        color: "#c74440",
        latex: "d_{rag}=\\left(-5a,5a_{2}\\right)",
        hidden: true,
        dragMode: "XY"
    },
    {
        type: "expression",
        latex: "v_{ertices}=[" + vertices + "]"
    },
    {
        type: "expression",
        latex: "v_{ertices3d}=[" + vertices_3d + "]",
        hidden: true
    }
)

Calc.setState(state)