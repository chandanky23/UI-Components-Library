import styled, { css } from 'styled-components';
import themes from '../../config/themes';

const ButtonWrapper = styled.button`
  border-radius: .5em;
  width: ${props => props.width || '200px'};
  padding: 1.5em .5em;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  color: ${themes.colors.white};

  ${({variants}) => variants === 'primary' && css`
    background-color: ${themes.buttonVariants.blue};
  `}

  ${({variants}) => variants === 'secondary' && css`
    background-color: ${themes.buttonVariants.indigo};
  `}

  ${({variants}) => variants === 'success' && css`
    background-color: ${themes.buttonVariants.green};
  `}

  ${({variants}) => variants === 'warning' && css`
    background-color: ${themes.buttonVariants.amber};
  `}


  ${({variants}) => variants === 'error' && css`
    background-color: ${themes.buttonVariants.red};
  `}

  ${({variants}) => variants === 'choiceOfColor' && css`
    background-color: ${choiceOfcolor};
  `}

  ${({type}) => type === 'raised' && css`
    box-shadow: 0px 1px 8px ${themes.colors.black};
  `}

  ${({type}) => type === 'flat' && css`
    box-shadow: none;
  `}
`
export { ButtonWrapper }