import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const { width } = Dimensions.get("window");
const {height } = Dimensions.get("window");
const {x1,y1, x2,y2, x3,y3, x4,y4, x5,y5, x6,y6} = this.state;
 const {color1, color2, color3, color4, color5, color6} = this.state;
 

export default class TabOneScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      colorTop: '#000000',
      colorBottom: '#cccccc',
      x1: 0,
      y1: 0,
      x2: width,
      y2: 0,
      x3: 0,
      y3: height/2,
      x4: width,
      y4: height/2,
      x5: 0,
      y5: height,
      x6: width,
      y6: height,
      color1: '#000000',
      color2: '#cccccc',
      color3: '#bb4411',
      color4: '#9932cc',
      color5: '#e6e4d9',
      color6: '#ffc173',
      
    };
  }

   render() {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     <Svg>

              <LinearGradient
                x1={x1} y1={y1} x2={x2} y2={y2} x3={x3} y3={y3} x4={x4} y4={y4} x5={x5} y5={y5} x6={x6} 
                 
                colors={[color1, color2, color3, color4, color5, color6]}
                
                style={styles.gradient}
              />
              <Text style={{color: this.state.colorTop}}>
                {this.state.colorTop}
              </Text>
              <Text style={{color: this.state.colorBottom}}>
                {this.state.colorBottom}
              </Text>
            </Svg>

    </View>
  );
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
