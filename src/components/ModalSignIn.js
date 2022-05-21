import React, { useState } from "react";

import { Button, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Box } from "@chakra-ui/react";



function ModalSignIn({ showSignin, setShowSignin }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState({});


    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handleOnSubmit = () => {
        if (name !== '' && email !== '') {
            let copy = { name: name, email: email };
            setUser(copy);
            setShowSignin(0);

            // setName('');
            // setEmail('');
        }

    }



    const isErrorEmail = email === '';
    const isErrorName = name === '';


    return (
        <>
            <Button onClick={() => setShowSignin(0)}>Back</Button><br /><br />
            <Box alignItems={'center'} w='50%' p={'50px'}>
                <FormControl isRequired isInvalid={isErrorName}>

                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <Input
                        id='name'
                        type='text'
                        value={name}
                        onChange={handleNameChange}
                        placeholder='enter your name'
                    />
                    {!isErrorName ? (
                        <FormHelperText>
                            Enter your name.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Name is required.</FormErrorMessage>
                    )}
                </FormControl>
                <br /><br />
                <FormControl isRequired isInvalid={isErrorEmail} >

                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='enter your email'
                    />
                    {!isErrorEmail ? (
                        <FormHelperText>
                            Enter the email.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                    <br />

                    <Button colorScheme='teal'
                        type='submit' onClick={(e) => handleOnSubmit}>Submit</Button>


                </FormControl>
                <br />
                {/* <Button type="button" onClick={() => handleOnSubmit}>Submit</Button> */}

            </Box>

        </>
    )
}
export default ModalSignIn;