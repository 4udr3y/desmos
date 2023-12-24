// Creates 2D flattened polygons from Blender output

state = Calc.getState()

objectName = 'beach'

a = .9
a2 = -0.247
d = 40
phi = 2.2
lightlist = [Math.cos(phi),0.25,Math.sin(phi)]
light = normalize(lightlist)

//// PASTE BLENDER OUTPUT HERE

////

function f1(x,y,theta) {
    return [d/(d-f2(x,y,theta))*x*Math.cos(a+theta), d/(d-f2(x,y,theta))*(x*Math.sin(a2)*Math.sin(a+theta)+y*Math.cos(a2))];
}

function f1c(x,y,z) {
    if (x<0) {
        return f1(Math.sqrt(x**2+z**2),y,Math.atan((z+0.0001)/x) + Math.PI);
    }
    return f1(Math.sqrt(x**2+z**2),y,Math.atan((z+0.0001)/x));
}

function f2(x,y,theta) {
    return x*Math.sin(a+theta)*Math.cos(a2)-y*Math.sin(a2);
}

function f2c(x,y,z) {
    x = parseFloat(x);
    y = parseFloat(y);
    z = parseFloat(z);
    if (x < 0) {
        return f2(Math.sqrt(x**2+z**2),y,Math.atan((z+0.0001)/x) + Math.PI);
    }
    return f2(Math.sqrt(x**2+z**2),y,Math.atan((z+0.0001)/x));
}

dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

function cross(a, b) {
    return [-1*(a[1]*b[2]-a[2]*b[1]), -1*(a[2]*b[0]-a[0]*b[2]), -1*(a[0]*b[1]-a[1]*b[0])];
}

function normalize(v) {
    mag = Math.sqrt(v[0]**2+v[1]**2+v[2]**2);
    return [v[0]/mag, v[1]/mag, v[2]/mag];
}

function normal(v) {
    return cross([v[6]-v[3], v[7]-v[4], v[8]-v[5]], [v[0]-v[3], v[1]-v[4], v[2]-v[5]]);
}

function shadow(face) {
    return 0.5 + dot(light, normalize(normal(getface(face)))) * .5;
}

function winding(list) {
    sum = 0;
    for (i in [...Array(list.length - 1).keys()]) {
        sum += (list[parseInt(i)+1][0]-list[parseInt(i)][0])*(list[parseInt(i)+1][1]+list[parseInt(i)][1])
    }
    sum += (list[0][0]-list[list.length-1][0])*(list[0][1]+list[list.length-1][1]);
    return sum;
}

function getface(s) {
    face = [];
    for (v in s) {
        face.push(vertices_formatted[s[v]][0]);
        face.push(vertices_formatted[s[v]][1]);
        face.push(vertices_formatted[s[v]][2]);
    }
    return face;
}

// Sorts array 1 using array 2 as a key
function sortArrays(array1, array2) {
    // Create an array of indices [0, 1, 2, ...] to preserve the original order
    const indices = array1.map((_, index) => index);
  
    // Sort the indices array based on the values in array2
    indices.sort((a, b) => array2[a] - array2[b]);
  
    // Create a new array with the sorted elements from array1
    const sortedArray = indices.map(index => array1[index]);
  
    return sortedArray;
} 

function hsvToHex(h, s, l) {
    // l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

// function hsvToHex(h, s, v) {
//     const h_i = Math.floor(h * 6);
//     const f = h * 6 - h_i;
//     const p = v * (1 - s);
//     const q = v * (1 - f * s);
//     const t = v * (1 - (1 - f) * s);
//     let r, g, b;
  
//     switch (h_i) {
//       case 0:
//         [r, g, b] = [v, t, p];
//         break;
//       case 1:
//         [r, g, b] = [q, v, p];
//         break;
//       case 2:
//         [r, g, b] = [p, v, t];
//         break;
//       case 3:
//         [r, g, b] = [p, q, v];
//         break;
//       case 4:
//         [r, g, b] = [t, p, v];
//         break;
//       case 5:
//         [r, g, b] = [v, p, q];
//         break;
//       default:
//         break;
//     }
  
//     const rgb = [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
//     const hex = rgb.map(component => component.toString(16).padStart(2, '0')).join('');
  
//     return `#${hex}`;
// }
    
depths = []

vertices_formatted = []

for (i in [...Array(vertices.length/3).keys()]) {
    vertices_formatted.push([vertices[3*i],vertices[3*i+1],vertices[3*i+2]]);
}

function average(array) {
    var total = 0;
    for(var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

function depth(s) {
    vertexDepths = []
    faceVertices = s.slice(4,s.length)
    for (v in faceVertices) {
        vertexDepths.push(f2c(vertices_formatted[faceVertices[v]][0],vertices_formatted[faceVertices[v]][1],vertices_formatted[faceVertices[v]][2]));
    }
    return average(vertexDepths);
}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

for (p in polygons) {
    depths.push(depth(polygons[p]));
}

const sortedPolygons = sortArrays(polygons,depths);

state.expressions.list.push(
    {
        type: "folder",
        id: "3",
        collapsed: true,
        title: objectName
    }
)

for (p in sortedPolygons) {
    console.log(sortedPolygons[p][0].toString());
    const polygonVertices = (sortedPolygons[p].slice(4,sortedPolygons[p].length));
    flattenedVertices = []
    for (v in polygonVertices) {
        flattenedVertices.push(f1c(parseFloat(vertices_formatted[polygonVertices[v]][0]), parseFloat(vertices_formatted[polygonVertices[v]][1]), parseFloat(vertices_formatted[polygonVertices[v]][2])));
    }
    polygonText = "\\operatorname{polygon}\\left(";
    for (v in flattenedVertices) {
        polygonText += "\\left("+flattenedVertices[v][0]+","+flattenedVertices[v][1]+"\\right),"
    }
    polygonText = polygonText.slice(0,-1)
    polygonText += "\\right)"
    if (winding(flattenedVertices) > 0) {
        state.expressions.list.push(
            {
                type: "expression",
                folderId: "3",
                lineWidth: "1",
                color: hsvToHex(sortedPolygons[p][1],sortedPolygons[p][2],sortedPolygons[p][3] * shadow(sortedPolygons[p].slice(4,sortedPolygons[p].length))),
                lineOpacity: sortedPolygons[p][0].toString(),
                fillOpacity: "0",
                latex: polygonText
            },
            {
                type: "expression",
                folderId: "3",
                color: hsvToHex(sortedPolygons[p][1],sortedPolygons[p][2],sortedPolygons[p][3] * shadow(sortedPolygons[p].slice(4,sortedPolygons[p].length))),
                lineOpacity: "0",
                fillOpacity: sortedPolygons[p][0].toString(),
                latex: polygonText
            }
        )
    }
}

Calc.setState(state)