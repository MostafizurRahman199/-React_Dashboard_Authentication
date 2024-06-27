import { Button, Card, Center, Container, HStack, Icon, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdEmail } from "react-icons/md";

export default function RegisterSuccess() {
  return (
 <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="16px" w="408px">
            <VStack mb="1" spacing="0px"     py="0px" gap="24px" justify="center" alignItems="center" >
                
           
             <Image width="46px" height="46px" src='../../../../public/—Pngtree—right symbol_8741184.png'></Image>
             
                
                <Stack alignItems="center" justify="center">
                <Text fontSize="22px" fontWeight="medium">Successfully Registration</Text>
                
                <Text align="center" fontSize="14px" textColor="#797E82">Hurray! You have successfully created your account. Enter the app to explore all it’s features.</Text>
                </Stack>

               <Stack width="100%">
                    <Button  width="100%"  fontSize="14px" _hover={{ bg:"#6f10ea"}}>Enter the App</Button>
               </Stack>
            </VStack>
        </Card>
      </Center>
 </Container>
  )
}
