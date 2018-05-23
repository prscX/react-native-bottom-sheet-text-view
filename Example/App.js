/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { RNBottomSheetTextView } from 'react-native-bottom-sheet-text-view'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          RNBottomSheetTextView.Show({
            title: "Bottom Sheet",
            description:
              "BottomSheetDialogFragment is a thin layer on top of the regular support library Fragment that renders your fragment as a modal bottom sheet, fundamentally acting as a dialog. Modal bottom sheets render a shadow on the content below them to indicate that they are modal, essentially a dialog. If the content outside of the dialog is tapped then the bottom sheet is dismissed. Modal bottom sheets can be dragged vertically and dismissed by completely sliding them down. Note: To implement non-modal Persistent bottom sheets use BottomSheetBehavior in conjunction with a CoordinatorLayout. Android is a mobile operating system developed by Google, based on a modified version of the Linux kernel and other open source software and designed primarily for touchscreen mobile devices such as smartphones and tablets. In addition, Google has further developed Android TV for televisions, Android Auto for cars, and Wear OS for wrist watches, each with a specialized user interface. Variants of Android are also used on game consoles, digital cameras, PCs and other electronics. Initially developed by Android Inc., which Google bought in 2005, Android was unveiled in 2007, with the first commercial Android device launched in September 2008. The operating system has since gone through multiple major releases, with the current version being 8.1 Oreo, released in December 2017. The core Android source code is known as Android Open Source Project (AOSP), and is primarily licensed under the Apache License. Android is also associated with a suite of proprietary software developed by Google, including core apps for services such as Gmail and Google Search, as well as the application store and digital distribution platform Google Play, and associated development platform. These apps are licensed by manufacturers of Android devices certified under standards imposed by Google, but AOSP has been used as the basis of competing Android ecosystems, such as Amazon.coms Fire OS, which utilize its own equivalents to these Google Mobile Services. Android has been the best-selling OS worldwide on smartphones since 2011 and on tablets since 2013. As of May 2017, it has over two billion monthly active users, the largest installed base of any operating system, and as of 2017, the Google Play store features over 3.5 million apps.[12] Android Inc. was founded in Palo Alto, California, in October 2003 by Andy Rubin, Rich Miner, Nick Sears, and Chris White.[14][15] Rubin described the Android project as tremendous potential in developing smarter mobile devices that are more aware of its owners location and preferences[15] The early intentions of the company were to develop an advanced operating system for digital cameras, and this was the basis of its pitch to investors in April 2004.[16] The company then decided that the market for cameras was not large enough for its goals, and by five months later it had diverted its efforts and was pitching Android as a handset operating system that would rival Symbian and Microsoft Windows Mobile.[16][17] Rubin had difficulty attracting investors early on, and Android was facing eviction from its office space. Steve Perlman, a close friend of Rubin, brought him $10,000 in cash in an envelope, and shortly thereafter wired an undisclosed amount as seed funding. Perlman refused a stake in the company, and has stated I did it because I believed in the thing, and I wanted to help Andy.[18][19] In July 2005,[15] Google acquired Android Inc. for at least $50 million.[20] Its key employees, including Rubin, Miner and White, joined Google as part of the acquisition.[15] Not much was known about the secretive Android at the time, with the company having provided few details other than that it was making software for mobile phones.[15] At Google, the team led by Rubin developed a mobile device platform powered by the Linux kernel. Google marketed the platform to handset makers and carriers on the promise of providing a flexible, upgradeable system.[21] Google had lined up a series of hardware components and software partners and signaled to carriers that it was open to various degrees of cooperation.[attribution needed][22]. Speculation about Google's intention to enter the mobile communications market continued to build through December 2006.[23] An early prototype had a close resemblance to a BlackBerry phone, with no touchscreen and a physical QWERTY keyboard, but the arrival of 2007s Apple iPhone meant that Android had to go back to the drawing board.[24][25] Google later changed its Android specification documents to state that Touchscreens will be supported, although the Product was designed with the presence of discrete physical buttons as an assumption, therefore a touchscreen cannot completely replace physical buttons.[26] By 2008, both Nokia and BlackBerry announced touch-based smartphones to rival the iPhone 3G, and Androids focus eventually switched to just touchscreens.The first commercially available smartphone running Android was the HTC Dream, also known as T - Mobile G1, announced on September 23, 2008.[27][28]"
          });
        }}>
          <Text>Show</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
