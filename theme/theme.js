import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
	cssVarPrefix: 'ck',
};

const styles = {
	global: (props) => ({
		body: {
			color: 'white',
			bg: 'gray.200',
		},
		a: {
			color: 'blue',
			_hover: {
				color: 'blue',
				textDecoration: 'none',
			},
		},
	}),
};

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
};

const theme = extendTheme({
	config,
	styles,
	layerStyles: {
		hourly: {
			bg: 'gray.50',
			borderTop: '2px solid',
			borderBottom: '2px solid',
			borderColor: 'gray.500',
		},
		selected: {
			bg: 'teal.500',
			color: 'teal.700',
			borderColor: 'orange.500',
		},
	},
	colors,
});

export default theme;
