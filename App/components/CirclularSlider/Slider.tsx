import React, {FC} from "react"
import {View, Dimensions, StyleSheet} from "react-native"
import {Circle, Svg, Defs, LinearGradient, Stop} from "react-native-svg"
import Animated, { concat, sub } from "react-native-reanimated"
import Cursor from "./Cursor"

const {width} = Dimensions.get("window")
const size = width - 32;
const strokeWidth = 40;
const radius = (size - strokeWidth) /2


const { Value } = Animated;

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

interface SliderProps {}

const Slider: FC<SliderProps> = () => {
    const circumference = radius*2*Math.PI;
    const strokeDashoffset  = sub(circumference,(radius*Math.PI)*4/3 )
    const rotateZ = concat(5.8, "rad")
    return(
        <View style = {styles.container}>
            <Animated.View style = {{
                ...StyleSheet.absoluteFillObject,
                transform: [{ rotateZ}]
                }
            }>
        <Svg width= {size} height = {size} >
        <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0" stopColor="#F7BBB5" />
              <Stop offset="1" stopColor="#F7BBB5" />
            </LinearGradient>
          </Defs>
            <AnimatedCircle 
            stroke = "url(#grad)"
            r = {radius}
            cx= {size/2}
            cy = {size/2}
            strokeWidth={strokeWidth}
            strokeDasharray= {`${circumference} ${circumference}`}
            strokeDashoffset = {strokeDashoffset}
            />
        </Svg>
        </Animated.View>
        <Cursor/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: size,
        height: size
    }
})


export default Slider