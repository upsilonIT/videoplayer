import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

interface ITriangle {
  triangleRotation: 'left' | 'right'
  animationProgress: number
  index: number
  delta: number
}

export const Triangle = ({
  triangleRotation,
  animationProgress,
  index,
  delta,
}: ITriangle) => {
  const opacity = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => {
    opacity.value = interpolate(
      animationProgress / 3,
      triangleRotation === 'left'
        ? [
            Math.abs(2 - index) * animationProgress,
            Math.abs(2 - index) * animationProgress + delta,
          ]
        : [index * animationProgress, index * animationProgress + delta],
      [0, 1],
      Extrapolate.CLAMP
    )
    return {
      opacity: opacity.value,
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
