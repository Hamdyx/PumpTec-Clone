import Link from 'next/link';
import {
	Container,
	Link as ChakraLink,
	Flex,
	Box,
	Center,
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
import { FiMapPin } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import { BsEnvelopeOpen } from 'react-icons/bs';

export default function Footer() {
	return (
		<footer>
			<Container
				maxW="container.2xl"
				bg="blue.900"
				centerContent
				pt={4}
				pb={4}
				mt={20}
			>
				<Flex color="white" mb={8} className='footer-contact'>
					<Center w="350px" h="100px" bg="gray.800" px={5}>
						<HStack w="100%" spacing={8}>
							<Box w="50px" className="logo-box">
								<Text>
									<Icon as={FiMapPin} w={10} h={10} />
								</Text>
							</Box>
							<VStack align="left">
								<Heading as="h3" size="md">
									New Maadi, Cairo
								</Heading>
								<Text>
									5 El-lathy St. From El-Naser Street, New Maadi Cairo, Egypt
								</Text>
							</VStack>
						</HStack>
					</Center>
					<Center w="350px" h="100px" bg="red.700" px={5}>
						<HStack w="100%" spacing={8}>
							<Box w="50px" className="logo-box">
								<Text>
									<Icon as={BiPhoneCall} w={10} h={10} />
								</Text>
							</Box>
							<VStack align="left">
								<Heading as="h3" size="md">
									+20 100 052 9308
								</Heading>
								<Text>Give us a call</Text>
							</VStack>
						</HStack>
					</Center>
					<Center w="350px" h="100px" bg="red.500" px={5}>
						<HStack w="100%" spacing={8}>
							<Box w="50px" className="logo-box">
								<Text>
									<Icon as={BsEnvelopeOpen} w={10} h={10} />
								</Text>
							</Box>
							<VStack align="left">
								<Heading as="h3" size="md">
									info@pump-tec.net
								</Heading>
								<Text>Drop us a linel</Text>
							</VStack>
						</HStack>
					</Center>
				</Flex>
				<Flex w="90%" layerStyle="footer">
					<SimpleGrid columns={4} spacing={10}>
						<VStack spacing={8}>
							<Box w="250px" className="logo-box">
								<Image src="/pump-tec-logo-white.png" alt="Pump Tec Logo" />
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
