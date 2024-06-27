import { Button, Card, Center, Container, HStack, Icon, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function PasswordResetDone() {
  return (
 <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="16px" w="408px">
            <VStack mb="1" spacing="0px"     py="0px" gap="24px" justify="center" alignItems="center" >
                
           
             <Image width="46px" height="46px" src='../../../../public/—Pngtree—right symbol_8741184.png'></Image>
             
                
                <Stack alignItems="center" justify="center">
                <Text fontSize="22px" fontWeight="medium">Password Reset Done</Text>
                
                <Text align="center" fontSize="14px" textColor="#797E82">Now you can access you account. </Text>
                </Stack>

               <Stack width="100%">
                   <Link to="/signin"> <Button  width="100%"  fontSize="14px" _hover={{ bg:"#6f10ea"}}>Sign In</Button></Link>
               </Stack>
            </VStack>
        </Card>
      </Center>
 </Container>
  )
}
