
<h1 align="center">

<p align="center">
  <img src="./assets/hero.png" width="300" height="300" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-bottom-sheet-text-view"><img src="http://img.shields.io/npm/v/react-native-bottom-sheet-text-view.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-bottom-sheet-text-view/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-bottom-sheet-text-view#License"><img src="https://img.shields.io/npm/l/react-native-bottom-sheet-text-view.svg?style=flat" /></a>
</p>

    ReactNative: Native Bottom Sheet Text View (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>

This library is a wrapper around native bottomsheet which is modified to show a large text view:


| **Android: [prscX/BottomSheetTextView.Android](https://github.com/prscX/BottomSheetTextView.Android)**             |
| ----------------- |
| <img src="https://github.com/prscX/BottomSheetTextView.Android/blob/master/assets/hero.gif" height="600" />                  |


| **iOS: [prscX/BottomSheetTextView.iOS](https://github.com/prscX/BottomSheetTextView.iOS)**             |
| ----------------- |
| <img src="https://github.com/prscX/react-native-bottom-sheet-text-view/blob/master/assets/hero.gif?raw=true" height="600" />                  |


## 📖 Getting Started

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
    compile 'com.github.prscX:BottomSheetTextView.Android:0.0.1'
}

```

> **Note:** Android SDK 27 > is supported

- **iOS**
    - After `react-native link react-native-bottom-sheet-text-view`, please verify `node_modules/react-native-bottom-sheet-text-view/ios/` contains `Pods` folder. If does not exist please execute `pod install` command on `node_modules/react-native-bottom-sheet-text-view/ios/`, if any error => try `pod repo update` then `pod install`
    

## 💻 Usage

```javascript

import { RNBottomSheetTextView } from 'react-native-bottom-sheet-text-view'

```

```javascript
RNBottomSheetTextView.Show({
    title: '',
    description: ''
});
```


## 💡 Props

- **Props: Generic**

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `title`       | `string`     |         | Specify the title of bottom sheet
| `description` | `string` |         | Specify the description of bottom sheet                                                   |  |
| `titleSize`    | `number`     |    25     | Specify the font size of title                                        |  |
| `descriptionSize`      | `number`     |    20     | Specify the font size of description
| `titleColor`      | `string: HEX-NUMBER`     |    `#000000`     | Specify the color of title
| `descriptionColor`      | `string: HEX-NUMBER`     |    `#757575`     | Specify the color of description


## ✨ Credits

- Android: [prscX/BottomSheetTextView.Android](https://github.com/prscX/BottomSheetTextView.Android)
- iOS: [prscX/BottomSheetTextView.iOS](prscX/BottomSheetTextView.iOS)
- iOS: [carsonperrotti/CNPPopupController](https://github.com/carsonperrotti/CNPPopupController)

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-bottom-sheet-text-view/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache 2 License.

RNBottomSheetTextView @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >