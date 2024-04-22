import React from "react"
import { View, StyleSheet } from "react-native"

export default function Horns() {
  return (
    <View style={styles.container} >
      <View style={styles.outer}/>
      <View style={styles.inner}/>
      <View style={styles.mask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -50,
    left: -7,
    overflow: "hidden"
  },
  outer: {
    backgroundColor: "bisque",
    width: 120,
    height: 90,
    borderRadius: 60,
    borderTopWidth: 0,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "black"
  },
  inner: {
    position: "absolute",
    top: -5,
    left: 10,
    backgroundColor: "white",
    width: 100,
    height: 70,
    borderRadius: 45,
    borderTopWidth: 0,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "black",
    borderTopColor: 'transparent',
  },
  mask: {
    width: 120,
    height: 20,
    position: "absolute",
    top: -8,
    backgroundColor: "white"
  }
})
