import React, { useRef, useEffect } from "react"
import { View, StyleSheet, Animated } from "react-native"
import { getRandomArbitrary } from "./utils"

export default function Ears() {

  const leftEarZ = useRef(new Animated.Value(0)).current
  const rightEarZ = useRef(new Animated.Value(0)).current

  const leftInterpolate = leftEarZ.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ['11deg', '15deg', '19deg']
  })
  const rightInterpolate = rightEarZ.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ['-11deg', '-15deg', '-19deg']
  })

  const getDuration = () => getRandomArbitrary(200, 1000)
  const getDelay = () => getRandomArbitrary(500, 4000)

  const getRandomAnim = (i1, i2) => {
    const val1 = getRandomArbitrary(0, 2)
    const val2 = getRandomArbitrary(0, 2)
    const pos = [0, 50, 100]
    const position = Animated.parallel([
        Animated.timing(leftEarZ, {
          toValue: i1 || pos[val1],
          duration: getDuration(),
          useNativeDriver: true,
          delay: getDelay()
        }),
        Animated.timing(rightEarZ, {
          toValue: i2 || pos[val2],
          duration: getDuration(),
          useNativeDriver: true,
          delay: getDelay()
        })
    ])
    
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
  }, [leftEarZ, rightEarZ])



  return (
    <View style={styles.earsContainer}>
      <Animated.View
        style={[
          styles.ear,
          {
            transform: [{ rotateZ: leftInterpolate }],
            borderBottomRightRadius: 40,
            borderTopRightRadius: 40
          }
        ]}
      >
        <View style={styles.earInside} />
      </Animated.View>
      <View style={{ width: 85 }} />
      <Animated.View
        style={[
          styles.ear,
          {
            transform: [{ rotateZ: rightInterpolate }],
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 40
          }
        ]}
      >
        <View style={styles.earInside} />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  earsContainer: {
    position: 'absolute',
    top: 20,
    left: -60,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ear: {
    height: 45,
    width: 70,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'beige',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  earInside: {
    height: 10,
    width: 35,
    backgroundColor: 'pink',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#555555'
  },
})
