import React, { useCallback, useRef, useState } from 'react'
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Video from 'react-native-video'

const { width: screenWidth } = Dimensions.get('screen')

const videoWidth = screenWidth * 0.9
const videoHeight = 200

const DOUBLE_PRESS_DELAY = 1000

export const VideoPlayer = ({ uri }: { uri: string }) => {
  const playerRef = useRef<Video | null>(null)
  const [progress, setProgress] = useState(0)

  const [lastPressed, setLastPressed] = useState(0)

  const rewindLeft = () => playerRef?.current?.seek(progress - 10)
  const rewindRight = () => playerRef?.current?.seek(progress + 10)

  const rewindOnDoubleTap = useCallback(
    (locationX: number, locationY: number) => {
      const time = new Date().getTime()

      const delta = time - lastPressed
      setLastPressed(time)
      if (lastPressed && delta < DOUBLE_PRESS_DELAY) {
        locationX < videoWidth / 2 ? rewindLeft() : rewindRight()
      }
    },
    [lastPressed]
  )

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ width: '100%', height: '100%', zIndex: 10 }}
        activeOpacity={1}
        onPress={(e) => {
          const { locationX, locationY } = e.nativeEvent
          rewindOnDoubleTap(locationX, locationY)
        }}
      >
        <Video
          ref={playerRef}
          source={{ uri: uri }}
          onBuffer={() => console.log(1)}
          onError={() => console.log(1)}
          style={styles.player}
          repeat
          muted
          controls
          onProgress={(value) => setProgress(value.currentTime)}
          rate={1}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: videoWidth,
    height: videoHeight,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  player: {
    width: '100%',
    height: '100%',
  },
})
