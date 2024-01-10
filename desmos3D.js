// Contains all basic functions needed to graph 3D model (add expressions separately using expressions.js)

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
    latex: "l_{ightlist}=\\left(20\\cos p_{hi},5,20\\sin p_{hi}\\right)"
},
{
    type: "expression",
    folderId: "3",
    latex: "l_{ight}=n_{ormalize}\\left(l_{ightlist}\\right)"
},
{
    type: "expression",
    folderId: "3",
    latex: " p_{hi}=0.34",
    slider: {hardMin: true, hardMax: true, loopMode: 'LOOP_FORWARD', min: '0', max: '2\\pi'}
},
// {
//     type: "expression",
//     folderId: "3",
//     latex: "a=-0.72"
// },
// {
//     type: "expression",
//     folderId: "3",
//     slider: {hardMax: true, max: '10'},
//     latex: "a_{2}=-0.4"
// },
// {
//     type: "expression",
//     folderId: "3",
//     latex: "d=40"
// },
// {
//     type: "text",
//     folderId: "3",
//     text: "toggle orthographic/perspective"
// },
// {
//     type: "expression",
//     folderId: "3",
//     latex: "t_{oggle}=1",
//     slider: {hardMin: true, hardMax: true, min: '0', max: '1', step:'1'}
// },
// {
//     type: "expression",
//     folderId: "3",
//     color: Desmos.Colors.BLACK,
//     hidden: true,
//     latex: "\\left(-10a,10a_{2}\\right)"
// },
{
    type: "folder",
    id: "1305",
    collapsed: true,
    title: "Functions"
},
// {
//     type: "text",
//     id: "1306",
//     folderId: "1305",
//     text: "polar to point"
// },
// {
//     type: "expression",
//     id: "1307",
//     folderId: "1305",
//     color: "#388c46",
//     latex: "f_{1}\\left(x,y,\\theta\\right)=\\left(\\frac{d}{d-f_{2}\\left(x,y,\\theta\\right)\\cdot  t_{oggle}}x\\cos\\left(a+\\theta\\right),\\frac{d}{d-f_{2}\\left(x,y,\\theta\\right)\\cdot  t_{oggle}}\\left(x\\sin\\left(a_{2}\\right)\\sin\\left(a+\\theta\\right)+y\\cos\\left(a_{2}\\right)\\right)\\right)"
// },
// {
//     type: "text",
//     id: "1308",
//     folderId: "1305",
//     text: "polar to depth"
// },
// {
//     type: "expression",
//     id: "1309",
//     folderId: "1305",
//     color: "#6042a6",
//     latex: "f_{2}\\left(x,y,\\theta\\right)=x\\sin\\left(a+\\theta\\right)\\cos\\left(a_{2}\\right)-y\\sin\\left(a_{2}\\right)"
// },
// {
//     type: "text",
//     id: "1310",
//     folderId: "1305",
//     text: "cartesian to point"
// },
// {
//     type: "expression",
//     id: "1311",
//     folderId: "1305",
//     color: "#000000",
//     latex: "f_{1c}\\left(x,y,z\\right)=f_{1}\\left(\\sqrt{x^{2}+z^{2}},y,\\tan^{-1}\\left(\\frac{z+.0001}{x}\\right)+\\left\\{x<0:1,0\\right\\}\\pi\\right)"
// },
// {
//     type: "text",
//     id: "1312",
//     folderId: "1305",
//     text: "cartesian to depth"
// },
// {
//     type: "expression",
//     id: "1313",
//     folderId: "1305",
//     color: "#c74440",
//     latex: "f_{2c}\\left(x,y,z\\right)=f_{2}\\left(\\sqrt{x^{2}+z^{2}},y,\\tan^{-1}\\left(\\frac{z+.0001}{x}\\right)+\\left\\{x<0:1,0\\right\\}\\pi\\right)"
// },
// {
//     type: "text",
//     id: "1316",
//     folderId: "1305",
//     text: "cartesian list to polygon"
// },
// {
//     type: "expression",
//     id: "1130",
//     folderId: "1305",
//     color: "#c74440",
//     latex: "p_{olygon}\\left(l_{ist}\\right)=\\left\\{w_{inding}\\left(\\left[l_{ist}.x,l_{ist}.y,l_{ist}.z\\right]\\right)>0:\\operatorname{polygon}\\left(l_{ist}\\right)\\right\\}"
// },
// {
//     type: "text",
//     id: "1317",
//     folderId: "1305",
//     text: "calculates polygon depth given list"
// },
// {
//     type: "expression",
//     id: "1153",
//     folderId: "1305",
//     color: "#6042a6",
//     latex: "d_{epth}\\left(l_{ist},v_{ertices}\\right)=\\operatorname{mean}\\left(\\left[f_{2c}\\left(v_{ertices}\\left[3\\cdot \\left(l_{ist}\\left[i\\right]\\right)+1\\right],v_{ertices}\\left[3\\cdot \\left(l_{ist}\\left[i\\right]\\right)+2\\right],v_{ertices}\\left[3\\cdot \\left(l_{ist}\\left[i\\right]\\right)+3\\right]\\right)\\operatorname{for}i=\\left[1...\\operatorname{length}\\left(l_{ist}\\right)\\right]\\right]\\right)"
// },
// {
//     type: "text",
//     id: "1320",
//     folderId: "1305",
//     text: "https://www.element84.com/blog/determining-the-winding-of-a-polygon-given-as-a-set-of-ordered-points"
// },
// {
//     type: "text",
//     id: "1321",
//     folderId: "1305",
//     text: "backface culling"
// },
// {
//     type: "expression",
//     id: "1322",
//     folderId: "1305",
//     color: "#6042a6",
//     latex: "w_{inding}\\left(l_{ist}\\right)=\\left(\\sum_{n=1}^{\\operatorname{length}\\left(l_{ist}\\right)-1}\\left(l_{ist}\\left[n+1\\right].x-l_{ist}\\left[n\\right].x\\right)\\left(l_{ist}\\left[n+1\\right].y+l_{ist}\\left[n\\right].y\\right)\\right)+\\left(l_{ist}.x.x-l_{ist}\\left[\\operatorname{length}\\left(l_{ist}\\right)\\right].x\\right)\\left(l_{ist}.x.y+l_{ist}\\left[\\operatorname{length}\\left(l_{ist}\\right)\\right].y\\right)"
// },
{
    type: "text",
    id: "1323",
    folderId: "1305",
    text: "vector operations"
},
{
    type: "expression",
    id: "1324",
    folderId: "1305",
    color: "#000000",
    latex: "c_{ross}\\left(V,W\\right)=\\left(V.y\\cdot W.z-V.z\\cdot W.y,V.z\\cdot W.x-V.x\\cdot W.z,V.x\\cdot W.y-V.y\\cdot W.x\\right)"
},
{
    type: "expression",
    id: "1325",
    folderId: "1305",
    color: "#c74440",
    latex: "d_{ot}\\left(V,W\\right)=V.x\\cdot W.x+V.y\\cdot W.y+V.z\\cdot W.z"
},
{
    type: "expression",
    id: "1326",
    folderId: "1305",
    color: "#2d70b3",
    latex: "m_{agnitude}\\left(v\\right)=\\sqrt{v.x^{2}+v.y^{2}+v.z^{2}}"
},
{
    type: "expression",
    id: "1327",
    folderId: "1305",
    color: "#388c46",
    latex: "n_{ormalize}\\left(v\\right)=\\left(\\frac{v.x}{m_{agnitude}\\left(v\\right)},\\frac{v.y}{m_{agnitude}\\left(v\\right)},\\frac{v.z}{m_{agnitude}\\left(v\\right)}\\right)"
},
{
    type: "text",
    id: "1328",
    folderId: "1305",
    text: "surface normal"
},
{
    type: "expression",
    id: "1210",
    folderId: "1305",
    color: "#6042a6",
    latex: "n_{ormal}\\left(V,W,X\\right)=-c_{ross}\\left(\\left(X.x-W.x,X.y-W.y,X.z-W.z\\right),\\left(V.x-W.x,V.y-W.y,V.z-W.z\\right)\\right)"
},
// {
//     type: "expression",
//     id: "1296",
//     folderId: "1305",
//     color: "#6042a6",
//     latex: "g_{etface}\\left(s,v_{ertices}\\right)=z_{ip}\\left(v_{ertices}\\left[\\left(s+1\\right)\\cdot 3-2\\right],v_{ertices}\\left[\\left(s+1\\right)\\cdot 3-1\\right],v_{ertices}\\left[\\left(s+1\\right)\\cdot 3\\right]\\right)",
//     hidden: true
// },
{
    type: "expression",
    id: "1286",
    folderId: "1305",
    color: "#6042a6",
    latex: "z_{ip}\\left(L_{1},L_{2},L_{3}\\right)=\\operatorname{join}\\left(L_{1},L_{2},L_{3}\\right)\\left[\\operatorname{floor}\\left(\\left[1,\\frac{4}{3}...\\operatorname{length}\\left(L_{1}\\right)+\\frac{2}{3}\\right]\\right)+\\operatorname{length}\\left(L_{1}\\right)\\operatorname{mod}\\left(\\operatorname{mod}\\left(\\left[0...3\\cdot \\operatorname{length}\\left(L_{1}\\right)\\right],3\\right)-2,2\\right)+\\operatorname{length}\\left(L_{1}\\right)\\cdot 2\\operatorname{floor}\\left(\\left|\\operatorname{mod}\\left(\\left[0...3\\cdot \\operatorname{length}\\left(L_{1}\\right)\\right],3\\right)-.5\\right|\\right)\\right]"
},
{
    type: "text",
    id: "1329",
    folderId: "1305",
    text: "shading"
},
{
    type: "expression",
    id: "1330",
    folderId: "1305",
    color: "#000000",
    latex: "s_{hadow}\\left(V, W, X\\right)=.5-d_{ot}\\left(l_{ight},n_{ormalize}\\left(n_{ormal}\\left(V, W, X\\right)\\right)\\right)\\cdot .5"
    // latex: "s_{hadow}\\left(f_{ace},v_{ertices}\\right)=.5+d_{ot}\\left(l_{ight},n_{ormalize}\\left(n_{ormal}\\left(g_{etface}\\left(f_{ace},v_{ertices}\\right)\\right)\\right)\\right)\\cdot .5"
},
// {
//     type: "text",
//     id: "4139",
//     folderId: "1305",
//     text: "Rotation Functions"
// },
// {
//     type: "expression",
//     id: "1371",
//     folderId: "1305",
//     color: "#2d70b3",
//     latex: "r_{otateYX}\\left(L_{1},L_{2},\\theta\\right)=\\left(L_{1}.x-L_{2}.x\\right)\\cos\\theta-\\left(L_{1}.z-L_{2}.z\\right)\\sin\\theta+L_{2}.x"
// },
// {
//     type: "expression",
//     id: "1373",
//     folderId: "1305",
//     color: "#6042a6",
//     latex: "r_{otateYZ}\\left(L_{1},L_{2},\\theta\\right)=\\left(L_{1}.z-L_{2}.z\\right)\\cos\\theta+\\left(L_{1}.x-L_{2}.x\\right)\\sin\\theta+L_{2}.z"
// },
// {
//     type: "expression",
//     id: "1375",
//     folderId: "1305",
//     color: "#c74440",
//     latex: "r_{otateZX}\\left(L_{1},L_{2},\\theta\\right)=\\left(L_{1}.x-L_{2}.x\\right)\\cos\\theta-\\left(L_{1}.y-L_{2}.y\\right)\\sin\\theta+L_{2}.x"
// },
// {
//     type: "expression",
//     id: "1376",
//     folderId: "1305",
//     color: "#2d70b3",
//     latex: "r_{otateZY}\\left(L_{1},L_{2},\\theta\\right)=\\left(L_{1}.y-L_{2}.y\\right)\\cos\\theta+\\left(L_{1}.x-L_{2}.x\\right)\\sin\\theta+L_{2}.y"
// },
// {
//     type: "expression",
//     id: "1331",
//     folderId: "1305",
//     color: "#c74440",
//     latex: "b_{ackground}=\\operatorname{rgb}\\left(230,223,225\\right)"
// },
// {
//     type: "expression",
//     id: "1332",
//     folderId: "1305",
//     color: "#d6d6d6",
//     latex: "\\left[-1,1\\right]y<100",
//     colorLatex: "b_{ackground}",
//     fillOpacity: "1"
// },
)

Calc.setState(state)