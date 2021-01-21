
import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Dimensions
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';


import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Rect,
  Mask
} from "react-native-svg";



//import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get("window");
const {height } = Dimensions.get("window");

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

  incrementColor = (color, step) => {
    const intColor = parseInt(color.substr(1), 16);
    const newIntColor = (intColor + step).toString(16);
    return `#${'0'.repeat(6 - newIntColor.length)}${newIntColor}`;
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        /* x1 : this.styarn ate.x1+count;
        y1 : this.state.y1+count;
        x2 : this.state.x2+count;
        y2 : this.state.y2+count;
        x1 : this.state.y3+count;
        x1 : this.state.y3+count;
        x1 : this.state.x1+count;
 */
        color1: this.incrementColor(this.state.color1, 1),
        color2: this.incrementColor(this.state.color2, -1),
        color3: this.incrementColor(this.state.color3, 1),
        color4: this.incrementColor(this.state.color4, -1),
        color5: this.incrementColor(this.state.color5, 1),
        color6: this.incrementColor(this.state.color6, -1),
        
      });
    }, 20);
  }

  render() {
    const {x1,y1, x2,y2, x3,y3, x4,y4, x5,y5, x6,y6} = this.state;
    const {color1, color2, color3, color4, color5, color6} = this.state;
    return (
      <Fragment>
        
        <SafeAreaView>
          
            <View style={styles.body}>
            <Svg  preserveAspectRatio='none' viewBox='0 0 1 1'  >
              <Defs>
                   <LinearGradient id='g' x1="0" y1="0" x2="0" y2="1"
                      >
                      <Stop
                          stopColor='white'
                          offset='0%'
                          stopOpacity='0'
                    />
                    <Stop
                          stopColor='white'
                          offset='1'
                          stopOpacity='1'
                    />
                  </LinearGradient>
                  <Mask id='m'>
                    <Rect x='0' y='0' width='1' height='1' fill='url(#g)'/>
                  </Mask>  
                   <LinearGradient id="a" x1="0" y1="0" x2="0" y2="1" >
                      <Stop
                          stopColor='red'
                          offset='0%'
                          stopOpacity='1'
                    />
                    <Stop
                          stopColor='green'
                          offset='100%'
                          stopOpacity='1'
                    />
                  </LinearGradient>
                <LinearGradient id='b' x1="0" y1="0" x2="0" y2="1"
                      >
                      <Stop
                          stopColor='blue'
                          offset='0%'
                          stopOpacity='1'
                    />
                    <Stop
                          stopColor='yellow'
                          offset='100%'
                          stopOpacity='1'
                    />
                  </LinearGradient>

            </Defs>
             <Rect x='0' y='0' width='1' height='1' fill='url(#a)' mask='url(#m)'/> 
             {/* <Rect x='0' y='0' width='1' height='1' fill='url(#b)' mask='url(#m)' transform='translate(1,1) rotate(180)'/>    */}
           </Svg>
            
             </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  gradient: {
    width: width,
    height: height,
  },

});
