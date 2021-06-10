import React from "react";
import { StyleSheet } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, {
  event,
  block,
  cond,
  eq,
  add,
  set,
} from "react-native-reanimated";

const { Value } = Animated;

const Cursor = () => {
  const offsetX = new Value(0);
  const offsetY = new Value(0);
  const x = new Value(0);
  const y = new Value(0);
  const translationX = new Value(0);
  const translationY = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const translateY = y;
  const translateX = x;

  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX,
        translationY,
        state,
      },
    },
  ]);
  return (
    <>
      <Animated.Code>
        {() =>
          block([
            cond(eq(state, State.ACTIVE), [
              set(x, add(offsetX, translationX)),
              set(y, add(offsetY, translationY)),
            ]),
            cond(eq(state, State.END), [set(offsetX, x), set(offsetY, y)]),
          ])
        }
      </Animated.Code>
      <PanGestureHandler
        onHandlerStateChange={onGestureEvent}
        onGestureEvent={onGestureEvent}
      >
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateY }, { translateX }],
            },
          ]}
        ></Animated.View>
      </PanGestureHandler>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
  },
});

export default Cursor;
