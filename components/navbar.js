import { Link as NextLink } from 'next/link';
import {
	Container,
	Link,
	Center,
	Box,
	HStack,
	Spacer,
	Image,
	Divider,
	Icon,
	Text,
} from '@chakra-ui/react';
import { Search2Icon, TimeIcon } from '@chakra-ui/icons';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
	return (
		<nav>
			<TopNav />

			<Container maxW="container.2xl" bg="white" centerContent pt={4} pb={4}>
				<Box w="90%" color="black" layerStyle="navigation">
					<HStack spacing={8}>
						<Box w="300px" className="logo-box">
							<Image src="/Pumptec-logo-copy.png" alt="Pump Tec Logo" />
						</Box>
						<Spacer />
						<NavLink route="home" />

						<NavLink route="about" />
						<NavLink route="services" />
						<NavLink route="products" />
						<NavLink route="contact" />
						<Center height="30px" className="nav-item">
							<Divider orientation="vertical" bg="gray" />
						</Center>
						<Search2Icon className="nav-item" />

						<Link as={NextLink} className="nav-hamburger" to={`/`}>
							<GiHamburgerMenu />
						</Link>
					</HStack>
				</Box>
			</Container>
		</nav>
	);
}

function TopNav() {
	return (
		<Container maxW="container.2xl" bg="blue.900" pt={2} pb={2} centerContent>
			<Box w="90%" color="white">
				<HStack spacing={2}>
					<TimeIcon />
					<Text fontSize="xs">We'are Open: Sunday - Thursday 9:00 - 18:00</Text>
					<Spacer />
					<Link as={NextLink} className="socialLink" to="/facebook">
						<Icon as={FaFacebookF} />
					</Link>
					<Link as={NextLink} className="socialLink" to="/instagram">
						<Icon as={FaInstagram} />
					</Link>
				</HStack>
			</Box>
		</Container>
	);
}

function NavLink({ route }) {
	let isActive = route === 'home' ? true : false;
	return (
		<Link
			as={NextLink}
			className={`nav-item ${isActive ? 'active' : ''}`}
			to={`/${route === 'home' ? '' : route}`}
		>
			{route}
		</Link>
	);
}
