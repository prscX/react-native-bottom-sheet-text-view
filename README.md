
<h1 align="center">

<p align="center">
  <img src="./assets/hero.png" width="300" height="300" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-bottom-sheet-text-view"><img src="http://img.shields.io/npm/v/react-native-bottom-sheet-text-view.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-bottom-sheet-text-view/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-bottom-sheet-text-view#License"><img src="https://img.shields.io/npm/l/react-native-bottom-sheet-text-view.svg?style=flat" /></a>
</p>

    React Native: Native Bottom Sheet Text View
</h1>

This library is a wrapper around native bottomsheet which is modified to show a large text view


| **Android: [prscX/BottomSheetTextView.Android](https://github.com/prscX/BottomSheetTextView.Android)**             |
| ----------------- |
| <img src="https://github.com/prscX/BottomSheetTextView.Android/blob/master/assets/hero.gif" height="600" />                  |


| **iOS: [prscX/BottomSheetTextView.Android](https://github.com/prscX/BottomSheetTextView.iOS)**             |
| ----------------- |
| <img src="./assets/hero.gif" height="600" />                  |


## Getting Started

`$npm install react-native-bottom-sheet-text-view`

`$react-native link react-native-bottom-sheet-text-view`

- **Android**

    - Please add below script snippet in your app `build.gradle`

```
buildscript {
    repositories {
        jcenter()
        maven { url "https://maven.google.com" }
    }
    ...
}

allprojects {
    repositories {
        jcenter()
        mavenLocal()
        maven { url "https://maven.google.com" }
        ...
    }
}

dependencies {
    compile 'com.prscX.BottomSheetTextView:BottomSheetTextView:0.0.1'
}

```

> **Note:** Android SDK 27 > is supported

- **iOS**
    - Run Command: `cd ../node_modules/react-native-react-native-bottom-sheet-text-view/ios` && `pod install`. If it has error => try pod repo update then pod install

## Usage

```javascript

import RNBottomSheetTextView from 'react-native-bottom-sheet-text-view'

```

```javascript
BottomSheetTextView.Show({
    title: '',
    description: ''
});
```

## Credits
- Android: [prscX/BottomSheetTextView.Android](https://github.com/prscX/BottomSheetTextView.Android)
- iOS: [prscX/BottomSheetTextView.iOS](prscX/BottomSheetTextView.iOS)
- iOS: [carsonperrotti/CNPPopupController](https://github.com/carsonperrotti/CNPPopupController)


## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.


## License
This library is provided under the Apache 2 License.

RNBottomSheetTextView @ Pranav Raj Singh Chauhan