import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { RootStackParamList, SCREEN_NAMES } from '../../types/screens'

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.Home
>

interface IVideos {
  uri: string
  id: string
  title: string
}

const VIDEOS: IVideos[] = [
  {
    uri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '1',
    title: 'First video',
  },
  {
    uri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '2',
    title: 'Second video',
  },
  {
    uri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '3',
    title: 'Third video',
  },
  {
    uri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '4',
    title: 'Fourth video',
  },
  {
    uri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '5',
    title: 'Fifth video',
  },
]

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={VIDEOS}
        keyExtractor={(video) => video.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                navigation.navigate(SCREEN_NAMES.Video, { uri: item.uri })
              }}
            >
              <Text style={{ fontSize: 30 }}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  listItem: {
    marginVertical: 20,
  },
})
