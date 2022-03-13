import { Link as NextLink } from 'next/link';
import {
	Link,
	Center,
	Box,
	HStack,
	Spacer,
	Image,
	Divider,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export default function Navbar() {
	return (
		<nav>
			<HStack p={4} spacing={8}>
				<Box bg="white" w="300px" p={4} color="white">
					<Image src="/Pumptec-logo-copy.png" alt="Pump Tec Logo" />
				</Box>
				<Spacer />
				<Link as={NextLink} to="/home">
					home
				</Link>
				<Link as={NextLink} to="/about">
					about
				</Link>
				<Link as={NextLink} to="/services">
					services
				</Link>
				<Link as={NextLink} to="/products">
					products
				</Link>
				<Link as={NextLink} to="/contact">
					contact
				</Link>
				<Center height="30px">
					<Divider orientation="vertical" />
				</Center>
				<Search2Icon />
			</HStack>
		</nav>
	);
}
