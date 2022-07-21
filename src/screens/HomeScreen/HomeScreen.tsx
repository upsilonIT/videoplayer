import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { RootStackParamList, SCREEN_NAMES } from '../../types/screens'

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.Home
>

interface IVideos {
  videoUri: string
  imageUrl: string
  id: string
}

const { width: screenWidth } = Dimensions.get('screen')
const imgWidth = screenWidth / 2.3

const VIDEOS: IVideos[] = [
  {
    videoUri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '1',
    imageUrl: 'https://2ch.hk/media/thumb/215666/16414040960200s.jpg',
  },
  {
    videoUri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '2',
    imageUrl: 'https://2ch.hk/media/thumb/215666/16414040960200s.jpg',
  },
  {
    videoUri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '3',
    imageUrl: 'https://2ch.hk/media/thumb/215666/16414040960200s.jpg',
  },
  {
    videoUri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '4',
    imageUrl: 'https://2ch.hk/media/thumb/215666/16414040960200s.jpg',
  },
  {
    videoUri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '5',
    imageUrl: 'https://2ch.hk/media/thumb/215666/16414040960200s.jpg',
  },
  {
    videoUri: 'https://2ch.hk/media/src/215666/16414040960200.mp4',
    id: '6',
    imageUrl: 'https://2ch.hk/media/thumb/215666/16414040960200s.jpg',
  },
]

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={VIDEOS}
        keyExtractor={(video) => video.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                navigation.navigate(SCREEN_NAMES.Video, { uri: item.videoUri })
              }}
            >
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  listItem: {
    flex: 1,
    marginVertical: 20,
    width: imgWidth,
    height: imgWidth,
  },
})
