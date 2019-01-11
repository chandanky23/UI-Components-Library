import styled from 'styled-components';
import themes from '../../config/themes';

const ButtonWrapper = styled.button`
  border-radius: .5em;
  box-shadow: 1px 4px 8px ${themes.colors.black};
  width: 10em;
  padding: 1.5em .5em;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  color: ${themes.colors.white};

  ${({primary}) => primary && `
    background-color: ${themes.buttonVariants.blue};
  `}

  ${({secondary}) => secondary && `
    background-color: ${themes.buttonVariants.indigo};
  `}

  ${({success}) => success && `
    background-color: ${themes.buttonVariants.green};
  `}

  ${({warning}) => warning && `
    background-color: ${themes.buttonVariants.amber};
  `}

  ${({error}) => error && `
    background-color: ${themes.buttonVariants.red};
  `}

  ${({outline}) => outline && `
    background-color: transparent;
    border: 1px solid black;
    box-shadow: none;
    color: ${themes.colors.black};
  `}

  ${({color}) => color && `
    background-color: ${color};
  `}

  ${({flat}) => flat && `
    box-shadow: none;
    color: ${themes.colors.black};
  `}
`
export { ButtonWrapper }