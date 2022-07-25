import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

interface ITriangle {
  triangleRotation: 'left' | 'right'
  animationProgress: SharedValue<number>
  index: number
  delta: number
  numOfTriangles: number
}

export const Triangle = ({
  triangleRotation,
  animationProgress,
  index,
  delta,
  numOfTriangles,
}: ITriangle) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animationProgress.value,
        triangleRotation === 'left'
          ? [delta * index, delta * (index + 1)]
          : [
              delta * Math.abs(numOfTriangles - 1 - index),
              delta * Math.abs(numOfTriangles - index),
            ],
        [0, 0.7],
        Extrapolate.CLAMP
      ),
    }
  })

  return (
    <>
      <Animated.View
        style={[
          animatedStyle,
          styles.triangle,
          triangleRotation === 'right'
            ? styles.triangleRight
            : styles.triangleLeft,
        ]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
  triangleLeft: {
    transform: [{ rotate: '-90deg' }],
  },
  triangleRight: { transform: [{ rotate: '90deg' }] },
})
