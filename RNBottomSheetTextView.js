import React, { PureComponent } from "react";
import { findNodeHandle, ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

const { RNBottomSheetTextView } = NativeModules;

class BottomSheetTextView extends PureComponent {
  static propTypes = {
    ...ViewPropTypes,

    title: PropTypes.string,
    description: PropTypes.string,

    onDone: PropTypes.func
  };

  static defaultProps = {
    title: "",
    description: ""
  };

  static Show(props) {
    if (props.title === undefined)
      props.title = BottomSheetTextView.defaultProps.title;
    if (props.description === undefined)
      props.description = BottomSheetTextView.defaultProps.description;

    RNBottomSheetTextView.Show(
      { ...props },
      () => {
        props.onDone && props.onDone();
      }
    );
  }

  componentDidMount() {
    // this._show();
  }

  componentDidUpdate() {
    // this._show();
  }

  _show() {}

  render() {
    return null;
  }
}

export { BottomSheetTextView as RNBottomSheetTextView };
