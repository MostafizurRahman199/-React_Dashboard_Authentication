import { Button, Card, Center, Container, HStack, Icon, Image, Spinner, Stack, Text, VStack, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import {  useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { verifyEmailAddressSignup } from '../../../api/query/userQuery';

export default function RegisterSuccess() {

const {token} = useParams();
// console.log(params);

const toast = useToast();
const navigate = useNavigate();

const { data, isSuccess, isLoading } = useQuery({
  queryKey: ["verify-email-token"],
  queryFn: () => verifyEmailAddressSignup({ token }),
  enabled: !!token,
  
  onError: (error) => {
    toast({
      title: "Signup Error",
      description: error.message,
      status: "error",
    });
    navigate("/signup");
  },
});


if(isLoading) return <Center h="100vh"><Spinner></Spinner></Center>

  return (
 <Container>
      <Center minH="100vh">
        {
          isSuccess && <Card p="6" borderRadius="16px" w="408px">
          <VStack mb="1" spacing="0px"     py="0px" gap="24px" justify="center" alignItems="center" >
              
         
           <Image width="46px" height="46px" src='../../../../public/—Pngtree—right symbol_8741184.png'></Image>
           
              
              <Stack alignItems="center" justify="center">
              <Text fontSize="22px" fontWeight="medium">Successfully Registration</Text>
              
              <Text align="center" fontSize="14px" textColor="#797E82">Hurray! You have successfully created your account. Enter the app to explore all it’s features.</Text>
              </Stack>

             <Stack width="100%">
                 <Link to="/signin"> <Button  width="100%"  fontSize="14px" _hover={{ bg:"#6f10ea"}}>Enter the App</Button></Link>
             </Stack>
          </VStack>
      </Card>
        }
      </Center>
 </Container>
  )
}
