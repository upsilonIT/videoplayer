import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList, SCREEN_NAMES } from '../../types/screens'
import VideoPlayer from '../../components/VideoPlayer'

type VideoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.Video
>

export const VideoScreen = ({ route }: VideoScreenProps) => {
  const { uri } = route.params
  return (
    <>
      <VideoPlayer uri={uri} />
    </>
  )
}
