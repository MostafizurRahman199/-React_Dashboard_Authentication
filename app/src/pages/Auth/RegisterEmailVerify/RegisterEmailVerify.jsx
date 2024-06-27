import { Button, Card, Center, Container, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdEmail } from "react-icons/md";

export default function RegisterEmailVerify() {
  return (
 <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="16px" w="408px">
            <VStack mb="1" spacing="0px"     py="0px" gap="24px" justify="center" alignItems="center" >
                
             <Text fontSize="48px" textColor="#5F00D9">
             < MdEmail />
             </Text>
                
                <Stack alignItems="center" justify="center">
                <Text>Email Verification</Text>
                
                <Text align="center" fontSize="14px" textColor="#797E82">We have sent you an email verification to  <Text as="b" textColor="black">jenny.wilson@gmail.com.</Text>  If you didn’t receive it, click the button below.</Text>
                </Stack>

               <Stack width="100%">
                    <Button width="100%"  fontSize="14px" _hover={{ bg:"#6f10ea"}}>Re-Send Email</Button>
               </Stack>
            </VStack>
        </Card>
      </Center>
 </Container>
  )
}
