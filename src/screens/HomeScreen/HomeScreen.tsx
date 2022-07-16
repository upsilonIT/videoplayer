import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList, SCREEN_NAMES } from '../../types/screens'

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.Home
>

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.Video, { uri: 'video' })
        }}
      >
        <Text>to video screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
