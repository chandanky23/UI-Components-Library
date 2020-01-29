import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./style";

class Button extends React.Component {
  static propTypes = {
    /** Variants of buttons */
    variants: PropTypes.oneOf([
      "primary",
      "secondary",
      "success",
      "warning",
      "error",
      "choiceOfcolor"
    ]).isRequired,
    /** Button view types */
    type: PropTypes.oneOf(["flat", "raised"]),
    /** to show the text on the button */
    btnText: PropTypes.string.isRequired,
    /** to handle click events */
    handleClick: () => {},
    /** Width of the button */
    width: PropTypes.string
  };

  static defaultProps = {
    variants: "success",
    type: "raised",
    btnText: "RAISED",
  };
  render() {
    const { btnText, handleClick, type, variants, width } = this.props;
    return (
      <ButtonWrapper
        onClick={() => handleClick()}
        type={type}
        variants={variants}
        width={width}
      >
        {btnText}
      </ButtonWrapper>
    );
  }
}

/** @component */
export default Button;
