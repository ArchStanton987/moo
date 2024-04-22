import React from "react"
import { View, StyleSheet } from "react-native"

export default function Leg({ left, bottom }) {
  return (
    <View style={[styles.leg, { left, bottom }]}>
      <View style={styles.legMain} />
      <View style={styles.hoof} />
    </View>
  )
}

const styles = StyleSheet.create({
  leg: {
    position: 'absolute',
    flexDirection: 'column'
  },
  legMain: {
    height: 150,
    width: 15,
    backgroundColor: 'beige',
    borderWidth: 2,
    borderColor: 'black',
    borderTopColor: 'transparent'
  },
  hoof: {
    left: -2,
    width: 18,
    height: 10,
    backgroundColor: 'black'
  }
})
