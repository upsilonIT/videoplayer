import React, { useRef, useState } from 'react'
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Video from 'react-native-video'
import { Slider } from '@miblanchard/react-native-slider'

const { width: screenWidth } = Dimensions.get('screen')

export const VideoPlayer = ({ uri }: { uri: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [muted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const playerRef = useRef(null)

  const pauseHandler = () => setIsPaused((prevState) => !prevState)
  const muteHandler = () => setIsMuted((prevState) => !prevState)

  return (
    <>
      <TouchableOpacity onPress={pauseHandler} style={styles.container}>
        <Video
          ref={playerRef}
          source={{ uri: uri }}
          onBuffer={() => console.log(1)}
          onError={() => console.log(1)}
          style={styles.player}
          paused={isPaused}
          muted={muted}
          repeat
          volume={volume}
          onReadyForDisplay={() => setIsLoaded(true)}
        />
        {isLoaded && isPaused && (
          <Image
            source={require('../../assets/pause-button.png')}
            style={{ height: 30, width: 30, position: 'absolute' }}
          />
        )}
      </TouchableOpacity>
      <Button title="mute/unmute" onPress={muteHandler} />
      <Slider
        onValueChange={(value) => {
          setVolume(value[0])
        }}
        value={volume}
      />
    </>
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
