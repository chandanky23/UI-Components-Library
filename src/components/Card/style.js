import styled from 'styled-components';
import themes from '../../config/themes';

export const Layout = styled.div`
  box-shadow: 0 4px 8px 0 ${themes.colors.black};
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 ${themes.colors.black};
  }
`

export const Header = styled.div`
  border-radius: 5px 5px 0 0;
`

export const Image = styled.img`
  width: 100%;
`

export const Footer = styled.div`
  padding: 2px 16px;
`