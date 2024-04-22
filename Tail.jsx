import React from "react"
import { View, StyleSheet } from "react-native"

export default function Tail() {
  return (
    <View style={styles.tail}>
      <View style={styles.tailMain} />
      <View style={styles.tailEdge} />
    </View>
  )
}

const styles = StyleSheet.create({
  tail: {
    position: 'absolute',
    top: 50,
    left: -450,
    flexDirection: 'row-reverse',
    transform: [{ rotateZ: '-15deg' }]
  },
  tailMain: {
    height: 18,
    width: 110,
    backgroundColor: 'beige',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black'
  },
  tailEdge: {
    top: -2,
    right: -10,
    height: 22,
    width: 30,
    backgroundColor: 'black',
    borderRadius: 90
  },
})
