import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
	sm: '320px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1536px',
};

const theme = extendTheme({
	breakpoints,
	fonts: {
		heading: `'EF_jejudoldam', sans-serif`,
		lnb: `'MangoDdobak-B', sans-serif`,
	},
});

export default theme;
