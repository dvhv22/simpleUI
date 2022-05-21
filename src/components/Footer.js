import {
    Box,
    Container,
    Heading,
    List,
    ListItem,
    Link,

} from '@chakra-ui/react';


function Footer() {
    return (
        <Box mt={0} color="#ffffff" background="#212121" py="10">
            <Container maxWidth="container.xl">


                <Box display="flex" alignItems="top">
                    <Box flex="1">
                        <Heading size="sm">Your Account</Heading>
                        <List mt="4" spacing={2}>
                            <ListItem>
                                <Link color="#A2A2A2">Sign up</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Log in</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Help</Link>
                            </ListItem>
                        </List>
                    </Box>

                    <Box flex="1">
                        <Heading size="sm">Discover</Heading>
                        <List mt="4" spacing={2}>
                            <ListItem>
                                <Link color="#A2A2A2">Groups</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Calendar</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Topics</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Cities</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Online Events</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Local Guides</Link>
                            </ListItem>
                        </List>
                    </Box>

                    <Box flex="1">
                        <Heading size="sm">Your Account</Heading>
                        <List mt="4" spacing={2}>
                            <ListItem>
                                <Link color="#A2A2A2">Sign up</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Log in</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="#A2A2A2">Help</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Box>



                {/* bottom links */}
                <Box d="flex" mt="20">
                    {' '}
                    <Link mr="5" fontSize="sm">
                        © 2021 Meetup
                    </Link>
                    <Link mr="5" fontSize="sm">
                        Terms of Service
                    </Link>
                    <Link mr="5" fontSize="sm">
                        Privacy Policy
                    </Link>
                    <Link mr="5" fontSize="sm">
                        Cookie Policy
                    </Link>
                    <Link mr="5" fontSize="sm">
                        Help
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
