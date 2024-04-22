import { StyleSheet, Text, AppState, View } from 'react-native'

const styles = StyleSheet.create({
  cowContainer: {},
  body: {
    position: 'absolute',
    top: 20,
    left: -350,
    height: 200,
    width: 400,
    backgroundColor: 'beige',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'black'
  },
  stain1: {
    position: 'absolute',
    top: 25,
    left: 35,
    height: 80,
    width: 120,
    borderRadius: 90,
    backgroundColor: 'brown',
    transform: [{ rotateZ: '15deg' }]
  },
  stain2: {
    position: 'absolute',
    top: 80,
    left: 250,
    height: 80,
    width: 60,
    borderRadius: 70,
    backgroundColor: 'brown',
    transform: [{ rotateZ: '15deg' }]
  },
  stain3: {
    position: 'absolute',
    bottom: 0,
    left: 120,
    height: 30,
    width: 60,
    borderRadius: 0,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: 'brown'
  },
  stain4: {
    position: 'absolute',
    top: 0,
    right: 20,
    height: 25,
    width: 50,
    borderRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'brown'
  },
  stain5: {
    position: 'absolute',
    top: 35,
    right: 0,
    height: 100,
    width: 50,
    borderRadius: 0,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: 'brown'
  },
  head: {
    width: 105,
    height: 190,
    backgroundColor: 'beige',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    elevation: 2
  }
})

export default styles
