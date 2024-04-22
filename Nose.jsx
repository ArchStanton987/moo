import React, { useEffect, useRef } from "react"
import { View, StyleSheet, Animated } from "react-native"

export default function Nose() {

  const noseStrilScale = useRef(new Animated.Value(0.9)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(noseStrilScale, {
          toValue: 1.1,
          duration: 3000,
          delay: 1500,
          useNativeDriver: true
        }),
        Animated.timing(noseStrilScale, {
          toValue: 0.9,
          duration: 3000,
          delay: 1500,
          useNativeDriver: true
        }),
      ])
    ).start()
  }, [noseStrilScale])

  return (
    <View style={styles.nose}>
    <View style={{ height: 5 }} />
    <View style={styles.noseStrilContainer}>
      <Animated.View style={[
        styles.noseStril,
        { transform: [{ rotateZ: '20deg' }, { scale: noseStrilScale}] }
        ]} />
      <View style={{ width: 45 }} />
      <Animated.View style={[
        styles.noseStril,
        { transform: [{ rotateZ: '-20deg' }, { scale: noseStrilScale}] }
        ]} />
    </View>
    <View style={styles.mouth1} />
    {/* <View style={styles.tongue} /> */}
  </View>
  )
}

const styles = StyleSheet.create({
  nose: {
    position: 'absolute',
    bottom: -10,
    height: 60,
    width: 110,
    backgroundColor: 'pink',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center'
  },
  noseStrilContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  noseStril: {
    height: 20,
    width: 25,
    borderRadius: 30,
    borderColor: '#444444',
    borderWidth: 4,
    backgroundColor: 'black'
  },
  mouth1: {
    position: 'absolute',
    bottom: 8,
    width: 60,
    height: 15,
    backgroundColor: 'transparent',
    borderTopRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: '#666666',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 6,
  },
  tongue: {
    position: 'absolute',
    bottom: 8,
    right: 35,
    height: 40,
    width: 25,
    backgroundColor: '#ff6699',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    transform: [{ rotateZ: '-20deg' }]
  },
})
