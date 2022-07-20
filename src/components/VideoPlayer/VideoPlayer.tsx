import React, { useRef, useState } from 'react'
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'
import {
  GestureHandlerRootView,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler'
import Video from 'react-native-video'

const { width: screenWidth } = Dimensions.get('screen')

const videoWidth = screenWidth * 0.9
const videoHeight = 200
const rewindingViewWidth = videoWidth / 4.5
const rewindingViewHeight = videoHeight / 2
const rewindingViewHeightMargin = rewindingViewHeight / 2

export const VideoPlayer = ({ uri }: { uri: string }) => {
  const playerRef = useRef<Video | null>(null)
  const doubleTapRef = useRef<TapGestureHandler>(null)
  const [progress, setProgress] = useState(0)

  const rewindLeft = () => playerRef?.current?.seek(progress - 15)
  const rewindRight = () => playerRef?.current?.seek(progress + 15)

  const rewindOnDoubleTap = (e: TapGestureHandlerStateChangeEvent) => {
    playerRef.current?.context
    if (
      e.nativeEvent.state === State.ACTIVE &&
      e.nativeEvent.y < rewindingViewHeight + rewindingViewHeightMargin &&
      e.nativeEvent.y > rewindingViewHeightMargin
    ) {
      if (e.nativeEvent.x < rewindingViewWidth) rewindLeft()
      if (e.nativeEvent.x > videoWidth - rewindingViewWidth) rewindRight()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ height: '100%', width: '100%' }}>
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={rewindOnDoubleTap}
          numberOfTaps={2}
        >
          <View>
            <Video
              ref={playerRef}
              source={{ uri: uri }}
              onBuffer={() => console.log(1)}
              onError={() => console.log(1)}
              style={styles.player}
              repeat
              controls
              onProgress={(value) => setProgress(value.currentTime)}
              rate={1}
            />
            {Platform.OS === 'ios' && (
              <>
                <View style={styles.leftRewindingView} />
                <View style={styles.rightRewindingView} />
              </>
            )}
          </View>
        </TapGestureHandler>
      </GestureHandlerRootView>
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
  leftRewindingView: {
    width: rewindingViewWidth,
    height: rewindingViewHeight,
    position: 'absolute',
    left: 0,
    top: rewindingViewHeightMargin,
  },
  rightRewindingView: {
    width: rewindingViewWidth,
    height: rewindingViewHeight,
    position: 'absolute',
    right: 0,
    top: rewindingViewHeightMargin,
  },
})
