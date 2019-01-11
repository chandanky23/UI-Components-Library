import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './style';

class Button extends React.Component {
  static propTypes = {
    /** to show the text on the button */
    btnText: PropTypes.string.isRequired,
    /** to handle click events */
    handleClick: ()=> {}
  }
  render(){
    const { btnText, handleClick } = this.props
    return (
      <ButtonWrapper onClick={() => handleClick()} {...this.props}>{btnText}</ButtonWrapper>
    )
  }
}

/** @component */
export default Button