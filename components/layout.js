import Navbar from './navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme/theme';
import Footer from './footer';

export default function Layout({ children }) {
	return (
		<ChakraProvider theme={theme}>
			<Navbar />
			{/* <main>{children}</main> */}

			<Footer />
		</ChakraProvider>
	);
}
