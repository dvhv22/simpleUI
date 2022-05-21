import React, { useState } from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';


import Header from './components/Header';
import BodyPart from './components/BodyPart';
import Footer from './components/Footer';
import ModalSignIn from './components/ModalSignIn';

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  const [showSignin, setShowSignin] = useState(0);
  return (
    <>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>


          {showSignin === 0 ? (
            <>
              <Header showSignin={showSignin} setShowSignin={setShowSignin} />
              <BodyPart />
              <Footer />
            </>
          ) : showSignin === 1 ? (
            <ModalSignIn showSignin={showSignin} setShowSignin={setShowSignin} />
          ) :
            <>
            </>

          }





        </QueryClientProvider>


      </ChakraProvider>
    </>

  );
}

export default App;
