import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, AppState, View } from 'react-native'
import { useAssets } from 'expo-asset'
import { DeviceMotion } from 'expo-sensors'
import { Audio } from 'expo-av'
import { useKeepAwake } from 'expo-keep-awake'
import { getRandomArbitrary } from './utils'

import cow1 from './assets/sounds/cow/Cow1.mp3'
import cow2 from './assets/sounds/cow/Cow2.mp3'
import cow3 from './assets/sounds/cow/Cow3.mp3'
import cow4 from './assets/sounds/cow/Cow4.mp3'
import cow5 from './assets/sounds/cow/Cow5.mp3'
import Cow from './Cow'

export const cowSounds = [cow1, cow2, cow3, cow4, cow5]

export default function App() {
  useKeepAwake()
  const [mooAssets, mooError] = useAssets(cowSounds)

  const appState = useRef(AppState.currentState)
  const [subscription, setSubscription] = useState(null)
  const [sound, setSound] = useState()
  const [isTurned, setIsTurned] = useState(false)
  const [isSoundPlaying, setIsSoundPlaying] = useState(false)
  const [needsReload, setNeedsReload] = useState(false)

  const playSound = async () => {
    setIsSoundPlaying(true)
    try {
      let sound
      const p = getRandomArbitrary(0, mooAssets.length - 1)
      const promise = await Audio.Sound.createAsync(mooAssets[p])
      sound = promise.sound
      setSound(sound)
      await sound.playAsync()
    } catch (err) {
      console.log(err)
    } finally {
      setNeedsReload(true)
      setIsSoundPlaying(false)
    }
  }

  const watchIsTurned = g => {
    if (g === undefined || g === false || g === null) {
      return
    }
    if (g >= 2 || g <= -2) {
      setIsTurned(true)
    } else {
      setNeedsReload(false)
      setIsTurned(false)
    }
  }

  useEffect(() => {
    if (isTurned && !isSoundPlaying && !needsReload) {
      playSound()
    }
  }, [isTurned, isSoundPlaying])

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  const _subscribe = () => {
    setSubscription(
      DeviceMotion.addListener(data => {
        DeviceMotion.setUpdateInterval(1000)
        if (!data) {
          return
        }
        watchIsTurned(data?.rotation?.gamma)
      })
    )
  }

  const _unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(async () => {
    const isAvailable = await DeviceMotion.isAvailableAsync()
    if (isAvailable) {
      _subscribe()
    }
    return () => _unsubscribe()
  }, [])

  const handleAppStateChange = nextAppState => {
    if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
      _unsubscribe()
    }
    appState.current = nextAppState
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ position: 'absolute', top: 30, right: 20, color: 'black', fontSize: 8 }}>
        1.0.1
      </Text>
      {/* <Text>RETOURNEZ MOI!</Text> */}
      <Cow />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
