import { Box, Button, Heading } from "@chakra-ui/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,

} from '@chakra-ui/react';
import universe from '../assets/image/universe.jpg';


function Header({ showSignin, setShowSignin }) {
    return (
        <header>
            <Box
                d="flex"
                alignItems="center"
                justifyContent="space-between"

                color={'white'}

            >

                <Breadcrumb separator='/' bgGradient='linear(to-r,#6060de, #1d2044)' h={'50px'} p='10px'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem float={'right'} >
                        <Box float={'right'}>
                            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link"
                                onClick={() => setShowSignin(1)}
                            >
                                Log in
                            </Button>
                            <Button colorScheme="gray.600" fontSize="sm" variant="link" onClick={() => setShowSignin(2)}>
                                Sign up
                            </Button>
                        </Box>


                    </BreadcrumbItem>


                </Breadcrumb>
            </Box>

            <Box
                backgroundImage={universe}
                backgroundPosition="center"
                backgroundRepeat="repeat"
                h={'90px'} textAlign='center'
            >

                <Heading pos={'relative'} as="h3" bgGradient='linear(to-l, #1a11cf, #FF0080)'
                    bgClip='text'>
                    welcome to read news

                </Heading>

            </Box>


        </header>
    )
}
export default Header;