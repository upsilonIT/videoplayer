import React, { useRef } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Video from 'react-native-video'

const { width: screenWidth } = Dimensions.get('screen')

export const VideoPlayer = ({ uri }: { uri: string }) => {
  const playerRef = useRef<Video | null>(null)

  return (
    <View style={styles.container}>
      <Video
        ref={playerRef}
        source={{ uri: uri }}
        onBuffer={() => console.log(1)}
        onError={() => console.log(1)}
        style={styles.player}
        repeat
        controls
        rate={1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  player: {
    width: '100%',
    height: '100%',
  },
})
