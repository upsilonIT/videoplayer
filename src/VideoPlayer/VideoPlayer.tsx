import React, { useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Video from 'react-native-video'

export const VideoPlayer = () => {
  const [isPaused, setIsPaused] = useState(false)
  const playerRef = useRef(null)

  const pauseHandler = () => setIsPaused((prevState) => !prevState)

  return (
    <TouchableOpacity onPress={pauseHandler} style={styles.container}>
      <Video
        ref={playerRef}
        source={{ uri: 'https://2ch.hk/media/src/215666/16414040960200.mp4' }}
        onBuffer={() => console.log(1)}
        onError={() => console.log(1)}
        style={styles.player}
        paused={isPaused}
        muted
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 30,
          backgroundColor: 'black',
        }}
      ></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 200,
  },
  player: {
    width: '100%',
    height: '100%',
  },
})
