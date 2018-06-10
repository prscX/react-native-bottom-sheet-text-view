import React, { PureComponent } from "react";
import { findNodeHandle, ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

const { RNBottomSheetTextView } = NativeModules;

class BottomSheetTextView extends PureComponent {
  static propTypes = {
    ...ViewPropTypes,

    title: PropTypes.string,
    titleSize: PropTypes.number,
    titleColor: PropTypes.string,

    description: PropTypes.string,
    descriptionSize: PropTypes.number,
    descriptionColor: PropTypes.string,

    onDone: PropTypes.func
  };

  static defaultProps = {
    title: "",
    titleSize: 25,
    titleColor: '#000000',
    description: "",
    descriptionSize: 20,
    descriptionColor: '#757575'
  };

  static Show(props) {
    if (props.title === undefined) props.title = BottomSheetTextView.defaultProps.title;
    if (props.titleSize === undefined) props.titleSize = BottomSheetTextView.defaultProps.titleSize;
    if (props.titleColor === undefined) props.titleColor = BottomSheetTextView.defaultProps.titleColor;

    if (props.description === undefined) props.description = BottomSheetTextView.defaultProps.description;
    if (props.descriptionSize === undefined) props.descriptionSize = BottomSheetTextView.defaultProps.descriptionSize;
    if (props.descriptionColor === undefined) props.descriptionColor = BottomSheetTextView.defaultProps.descriptionColor;
    

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
