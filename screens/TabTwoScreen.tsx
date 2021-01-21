import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Shaders, GLSL, Node } from "gl-react";
import { Surface } from "gl-react-expo";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const colors = {
  color1: [248,88,255],
  color2: [87, 0, 93],
  color3: [81,1,186],
  color4: [85,0,191]
}

// in gl-react you need to statically define "shaders":
const shaders = Shaders.create({
  helloGL: {
// This is our first fragment shader in GLSL language (OpenGL Shading Language)
// (GLSL code gets compiled and run on the GPU)
frag: GLSL`
precision highp float;
varying vec2 uv;
uniform vec3 start, end;
void main() {
  vec3 color = mix(end, start, 0.5);
  gl_FragColor = vec4(color, 1.0);
}
`
// the main() function is called FOR EACH PIXELS
// the varying uv is a vec2 where x and y respectively varying from 0.0 to 1.0.
// we set in output the pixel color using the vec4(r,g,b,a) format.
// see GLSL_ES_Specification_1.0.17
  }
});

export default class TabTwoScreen extends Component {
  render() {
    const { color1, color2, color3, color4 } = colors;
    return (
        <Surface style={{width: windowWidth, height: windowHeight}}>
          <Node shader={shaders.helloGL} uniforms={{start: color1.map(v=>v/255), end: color2.map(v=>v/255)}} />
        </Surface>
    );
// Surface creates the canvas, an area of pixels where you can draw.
// Node instanciates a "shader program" with the fragment shader defined above.
  }
}
