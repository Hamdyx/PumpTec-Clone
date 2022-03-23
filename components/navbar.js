import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	Container,
	Link as ChakraLink,
	Center,
	Box,
	HStack,
	Spacer,
	Image,
	Divider,
	Icon,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
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

						<NavToggle />
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
					<Link className="socialLink" href="/facebook" passHref>
						<ChakraLink>
							<Icon as={FaFacebookF} />
						</ChakraLink>
					</Link>
					<Link className="socialLink" href="/instagram" passHref>
						<ChakraLink>
							<Icon as={FaInstagram} />
						</ChakraLink>
					</Link>
				</HStack>
			</Box>
		</Container>
	);
}

function NavToggle() {
	return (
		<Accordion className="nave-toggle" allowToggle>
			<AccordionItem>
				<h2>
					<AccordionButton>
						<Link className="nav-hamburger" href={`/`}>
							<GiHamburgerMenu />
						</Link>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					<NavLink route="home" />

					<NavLink route="about" />
					<NavLink route="services" />
					<NavLink route="products" />
					<NavLink route="contact" />
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
}

function NavLink({ route }) {
	const router = useRouter();
	route = route === 'home' ? '' : route;
	console.log(router.asPath);
	let isActive = `/${route}` === router.asPath ? true : false;
	return (
		<Link href={`/${route}`} passHref>
			<ChakraLink className={`nav-item ${isActive ? 'active' : ''}`}>
				{route || 'home'}
			</ChakraLink>
		</Link>
	);
}
