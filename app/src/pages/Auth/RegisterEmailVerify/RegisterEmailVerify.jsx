import { Button, Card, Center, Container, HStack, Icon, Spinner, Stack, Text, VStack, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { useMutation } from 'react-query';
import {  useParams } from 'react-router-dom';
import { sendVerificationMail } from '../../../api/query/userQuery';

export default function RegisterEmailVerify() {
  
  const toast = useToast();
const {email} = useParams();

if(email === ""){
  return <Center height="100vh">Invalid Email</Center>
}


const { mutate, isSuccess, isLoading } = useMutation({

  mutationKey: ["/send-verification-mail"],
  mutationFn: sendVerificationMail,

  onSuccess: (data) => {

    console.log(data);
    toast({
      title: "Send mail Successful",
      description: "Your mail have reached successfully",
      status: "success",
    });
  },
  onError: (error) => {
    toast({
      title: "RegisterEmailVerify Error",
      description: error.message,
      status: "error",
    });
  },

  enabled: !!email
});

useEffect(()=>{
  mutate({email});
}, [email])



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
            
            <Text align="center" fontSize="14px" textColor="#797E82">We have sent you an email verification to  <Text as="b" textColor="black">{email}</Text>  If you didn’t receive it, click the button below.</Text>
            </Stack>

           <Stack width="100%">
                <Button isLoading={isLoading} onClick={()=>{mutate({email})}} width="100%"  fontSize="14px" _hover={{ bg:"#6f10ea"}}>Re-Send Email</Button>
           </Stack>
        </VStack>
    </Card>
       
      </Center>
 </Container>
  )
}
