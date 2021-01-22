import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Shaders, GLSL, Node } from "gl-react";
import { Surface } from "gl-react-expo";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const imageJSON = require("../assets/json/violet.json");
const { frames } = imageJSON;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log("Total frames:", frames.length);
let frame = 0;

const shaders = Shaders.create({
  helloGL: {
    frag: GLSL`
precision highp float;
float step1 = 0.50;
float x = smoothstep(0.20, 0.20, gl_FragCoord.y);
varying vec2 uv;
uniform vec3 topleft, topright, bottomleft, bottomright, middleleft, middleright;
void main() {
  float percent = uv.y;
  vec3 mix1 = mix(middleleft, topleft, percent);
  vec3 mix2 = mix(middleright, topright, x);
  vec3 mix3 = mix(bottomleft, middleleft, percent);
  vec3 mix4 = mix(bottomright, middleright, percent);
  vec3 topfinal = mix(mix1, mix2, uv.x);
  vec3 bottomfinal = mix(mix3, mix4, uv.x);

  gl_FragColor = vec4(mix2, 1.0);
}
`,
  },
});

export default class TabTwoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: {
        color1: [0, 0, 255],
        color2: [0, 255, 0],
        color3: [0, 0, 0],
        color4: [255, 0, 0],
        color5: [255, 0, 0],
        color6: [0, 0, 255],
      },
    };
  }

  // myInterval = setInterval(() => {
  //   const newColors = { ...this.state.colors };
  //   newColors.color1 = frames[frame][0];
  //   newColors.color2 = frames[frame][1];
  //   newColors.color3 = frames[frame][4];
  //   newColors.color4 = frames[frame][5];
  //   frame = frame + 1;
  //   console.log(frame);
  //   this.setState({ colors: newColors });
  //   if (frame > 1000) {
  //     clearInterval(this.myInterval);
  //     console.log("Stopped!");
  //   }
  // }, 25);

  render() {
    const { color1, color2, color3, color4, color5, color6 } = this.state.colors;
    return (
      <Surface style={{ width: windowWidth, height: windowHeight }}>
        <Node
          shader={shaders.helloGL}
          uniforms={{
            topleft: color1.map((v) => v / 255),
            topright: color2.map((v) => v / 255),
            middleleft: color3.map((v) => v / 255),
            middleright: color4.map((v) => v / 255),
            bottomleft: color5.map((v) => v / 255),
            bottomright: color6.map((v) => v / 255),
          }}
        />
      </Surface>
    );
    // Surface creates the canvas, an area of pixels where you can draw.
    // Node instanciates a "shader program" with the fragment shader defined above.
  }
}
