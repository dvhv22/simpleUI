import React, { useState } from "react";

import { Button, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Box } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { userAdded } from '../features/usersSlice';



function SignUp({ showSignin, setShowSignin }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newUser, setNewUser] = useState([]);
    const [age, setAge] = useState();

    const dispatch = useDispatch();


    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleOnSubmit = () => {


        if (name && email) {
            let copy = { name: name, email: email, age: age };
            let arrCopy = [...newUser, copy];
            setNewUser(arrCopy);
            dispatch(userAdded(name, email, age));

            setName('');
            setEmail('');
            setAge('');
        }

    }

    // const canSave =
    //     [name, email].every(Boolean);
    const isErrorEmail = email === '';
    const isErrorName = name === '';


    return (
        <>
            <Button onClick={() => setShowSignin(0)}>Back</Button><br /><br />
            <Box alignItems={'center'} w='50%' p={'50px'}>
                <form onSubmit={e => e.preventDefault()} >
                    <FormControl isRequired isInvalid={isErrorName}  >

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
                    </FormControl>
                    <br />
                    <FormControl >

                        <FormLabel htmlFor='age'>Age</FormLabel>
                        <Input
                            type='number'
                            id='age'

                            value={age}
                            onChange={handleAgeChange}
                            placeholder='enter your age'
                        />

                    </FormControl>
                    <br />
                    <br />

                    <Button colorScheme='teal' onClick={handleOnSubmit}
                        type='button' >Submit</Button>


                </form>


            </Box>

        </>
    )
}
export default SignUp;