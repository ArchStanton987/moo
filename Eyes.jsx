import React, { useEffect, useRef } from "react"
import { View, StyleSheet, Animated } from "react-native"
import { getRandomArbitrary } from "./utils"

export default function Eyes() {

  const retinaX = useRef(new Animated.Value(0)).current
  const retinaY = useRef(new Animated.Value(0)).current

  const getDuration = () => getRandomArbitrary(200, 1000)
  const getDelay = () => getRandomArbitrary(500, 4000)

  const getRandomAnim = (i1, i2) => {
    const val1 = getRandomArbitrary(0, 2)
    const val2 = getRandomArbitrary(0, 2)
    const pos = [-10, 0, 10]
    const position = Animated.parallel([
        Animated.timing(retinaX, {
          toValue: i1 || pos[val1],
          duration: getDuration(),
          useNativeDriver: true,
          delay: getDelay()
        }),
        Animated.timing(retinaY, {
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
  }, [retinaX, retinaY])

  return (
    <View style={styles.eyesContainer}>
    <View style={[styles.eye, { transform: [{ rotateZ: '20deg' }] }]}>
      <View style={{ position: "absolute", transform: [{ rotateZ: '-20deg'}]}}>
      <Animated.View style={[
        styles.retina,
        { 
          alignItems: 'flex-end',
          transform: [{ translateX: retinaX }, { translateY: retinaY }],
        }]}>
        <View style={styles.pupil} />
      </Animated.View>
          </View>
    </View>
    <View style={{ width: 15 }} />
    <View style={[styles.eye, { transform: [{ rotateZ: '-20deg' }] }]}>
      <View style={{ position: "absolute", transform: [{ rotateZ: '20deg'}]}}>
      <Animated.View style={[
        styles.retina,
        { 
          alignItems: 'flex-start',
          transform: [{ translateX: retinaX }, { translateY: retinaY }],
        }]}>
        <View style={styles.pupil} />
      </Animated.View>
          </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  eyesContainer: {
    position: 'absolute',
    top: 45,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  eye: {
    height: 60,
    width: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  retina: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 3,
    backgroundColor: 'black',
    justifyContent: 'flex-start'
  },
  pupil: {
    height: 4,
    width: 4,
    backgroundColor: 'white',
    borderRadius: 100
  },
})
