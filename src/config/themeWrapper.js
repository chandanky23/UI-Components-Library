import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes.js';

class ThemeWrapper extends React.Component {
	render() {
		return (
			<ThemeProvider theme={themes}>
					{this.props.children}
			</ThemeProvider>
		)
	}
}

export default ThemeWrapper
