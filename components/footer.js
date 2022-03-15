import { Link as NextLink } from 'next/link';
import {
	Container,
	Link,
	Flex,
	Box,
	VStack,
	HStack,
	Image,
	Icon,
	Heading,
	Text,
	SimpleGrid,
	ListItem,
	UnorderedList,
	Input,
	InputGroup,
	Button,
	InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer>
			<Container
				maxW="container.2xl"
				bg="blue.700"
				centerContent
				pt={4}
				pb={4}
				mt={20}
			>
				<Flex w="90%" layerStyle="footer">
					<SimpleGrid columns={4} spacing={10}>
						<VStack spacing={8}>
							<Box w="250px" className="logo-box">
								<Image src="/Pumptec-logo-copy.png" alt="Pump Tec Logo" />
							</Box>
							<Text>
								Pumptec was founded in 2004 with a simple philosophy in mind:
								build durable, high-quality pumps that work as hard as our
								customers.
							</Text>
						</VStack>
						<VStack spacing={8}>
							<Heading as="h4" size="md">
								Social <span>Media</span>
							</Heading>
							<HStack>
								<Link as={NextLink} className="socialLink" to="/facebook">
									<Icon as={FaFacebookF} />
								</Link>
								<Link as={NextLink} className="socialLink" to="/instagram">
									<Icon as={FaInstagram} />
								</Link>
							</HStack>
						</VStack>
						<InputGroup size="md" color="black">
							<Input
								type="text"
								placeholder="Search"
								bg="white"
								_placeholder={{ opacity: 1, color: 'gray.500' }}
							/>
							<InputRightElement width="3.5rem" bg="red" color="white">
								<Button>
									<Search2Icon className="nav-item" />
								</Button>
							</InputRightElement>
						</InputGroup>

						<VStack spacing={8}>
							<Heading as="h4" size="md" mr="auto">
								<span>Our</span> Services
							</Heading>
							<UnorderedList
								styleType="none"
								pl={10}
								spacing={4}
								className="services-list"
							>
								<ListItem>Water Pumps</ListItem>
								<ListItem>Firefighting System Pumps</ListItem>
								<ListItem>Wastewater Pumps</ListItem>
								<ListItem>Maintenance & Technical Support</ListItem>
								<ListItem>Consulting Services</ListItem>
								<ListItem>Original Spare Parts</ListItem>
							</UnorderedList>
						</VStack>
					</SimpleGrid>
				</Flex>
			</Container>
		</footer>
	);
}
