import { Button, Card, Center, Container, HStack, Icon, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';

export default function ForgotPasswordSent() {


  const params = useParams();
  const {email } = useParams();

  return (
 <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="16px" w="408px">
            <VStack mb="1" spacing="0px"     py="0px" gap="24px" justify="center" alignItems="center" >
                
           
             <Image width="46px" height="46px" src='../../../../public/—Pngtree—right symbol_8741184.png'></Image>
             
                
                <Stack alignItems="center" justify="center">
                <Text fontSize="22px" fontWeight="medium">Successfully Sent</Text>
                
                
                <Text align="center" fontSize="14px" textColor="#797E82">We have sent instructions on how to reset your password to<Text as="b" textColor="black">{email}</Text> Please follow the instructions from the email.</Text>  
                </Stack>

               
            </VStack>
        </Card>
      </Center>
 </Container>
  )
}
