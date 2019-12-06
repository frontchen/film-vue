import { Dimensions, Platform } from 'react-native'

// iPhoneX Xs
const X_WIDTH = 375
const X_HEIGHT = 812

// iPhoneXR XsMax
const XR_WIDTH = 414
const XR_HEIGHT = 896

const screenW = Dimensions.get('window').width
const screenH = Dimensions.get('window').height

export default class IphoneX {
  //判断是否为iphoneX或Xs
  static isIphoneX() {
    return (
      Platform.OS === 'ios' &&
      ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
        (screenH === X_WIDTH && screenW === X_HEIGHT))
    )
  }
  //判断是否为iphoneXR或XsMAX
  static isIphoneXR() {
    return (
      Platform.OS === 'ios' &&
      ((screenH === XR_HEIGHT && screenW === XR_WIDTH) ||
        (screenH === XR_WIDTH && screenW === XR_HEIGHT))
    )
  }
}
