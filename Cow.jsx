import React, { useRef, useEffect } from "react"
import { Animated, View } from "react-native"

import styles from "./cow-style"
import Ears from "./Ears"
import Eyes from "./Eyes"
import Horns from "./Horns"
import Leg from "./Leg"
import Nose from "./Nose"
import Tail from "./Tail"
import { getRandomArbitrary } from "./utils"

export default function Cow() {
  const headY = useRef(new Animated.Value(0)).current

  const getDuration = () => getRandomArbitrary(200, 700)
  const getDelay = () => getRandomArbitrary(200, 3000)

  const getRandomAnim = i1 => {
    const val1 = getRandomArbitrary(0, 2)
    const pos = [-10, 0, 10]
    const position = 
        Animated.timing(headY, {
          toValue: i1 || pos[val1],
          duration: getDuration(),
          useNativeDriver: true,
          delay: getDelay()
        })
    return position
  }

  const getSequence = () => {
    let arr = []
    for (let i = 0; i < 25; i += 1) {
      arr.push(getRandomAnim())
    }
    arr.push(getRandomAnim(1,1))
    return arr
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence(getSequence())
    ).start()
  }, [headY])

  return (
    <View style={styles.cowContainer}>
      <Tail />
    <Leg left={-230} bottom={-144} />
    <Leg left={-25} bottom={-144} />
    <View style={styles.body}>
      <View style={styles.stain1} />
      <View style={styles.stain2} />
      <View style={styles.stain3} />
      <Leg left={70} bottom={-144} />
      <Leg left={270} bottom={-144} />
    </View>
    <Animated.View style={{ transform: [{ translateY: headY }]}}>
      <Horns />
      <Ears />
      <View style={[styles.head]}>
        <View style={styles.stain4} />
        <View style={styles.stain5} />
        <Eyes />
        <View style={{ height: 25 }} />
          <Nose />
      </View>
    </Animated.View>
  </View>
  )
}