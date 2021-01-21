import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Shaders, Node, GLSL, Surface } from "gl-react";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

// in gl-react you need to statically define "shaders":
const shaders = Shaders.create({
  helloGL: {
// This is our first fragment shader in GLSL language (OpenGL Shading Language)
// (GLSL code gets compiled and run on the GPU)
    frag: GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
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
    return (
      <Surface width={300} height={300}>
        <Node shader={shaders.helloGL} />
      </Surface>
    );
// Surface creates the canvas, an area of pixels where you can draw.
// Node instanciates a "shader program" with the fragment shader defined above.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
