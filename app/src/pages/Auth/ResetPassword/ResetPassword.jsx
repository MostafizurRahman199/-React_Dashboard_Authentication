import { Box, Grid, GridItem, Spinner, useToast } from '@chakra-ui/react';
import {
    Button,
    Card,
    Center,
    Checkbox,
    Container,
    FormControl,
    FormErrorMessage,
    HStack,
   
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";
import {Formik, Form, Field} from "formik";
import { object, string,  ref } from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { verifyForgotToken } from '../../../api/query/userQuery';

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(5, "Password must be at least 5 characters").required("Password is required"),
  repeatPassword: string().oneOf([ref("password"), null], "Passwords must match").required("Repeat Password is required"),
});



export default function ResetPassword() {


  const {token} = useParams();
  // console.log(params);
  
  const toast = useToast();
  const navigate = useNavigate();
  
  const { data, mutate, isSuccess, isLoading } = useMutation({
    
    mutationKey: ["verify-forgot-token"],
    mutationFn: verifyForgotToken,
    enabled: !!token,
    
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
    },

    onSettled: ()=>{
      navigate("/reset-success")
    }
  });
  
  
  if(isLoading) return <Center h="100vh"><Spinner></Spinner></Center>
  


 
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="16px" w="408px">
          <Stack mb="1" spacing="0px" py="0px" gap="0px">
          <Text fontSize="28px" fontWeight="medium">
          Reset Password
          </Text>
          <Text fontSize="14px" fontWeight="" textColor="#797E82">
          Enter your new password.
          </Text>
          </Stack>
        <Formik initialValues={{
            
            password:"",
            repeatPassword:"",
        }}
        onSubmit={(values)=>{
          mutate({token, password: values.password});
        }}

        validationSchema={signupValidationSchema}
        
        >
     {
        ()=> <Form>
        <Stack spacing="4" mt="2">
              


         

             

              <Field name="newPassword">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text fontSize="14px" fontWeight="bold" name="newPassword">New Password</Text>
                                <Input type="password" name="newPassword" placeholder="name@gmail.com" size="sm"  fontSize="14px" {...field} />
                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                        )
                }

            </Field>
              <Field name="repeatNewPassword">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text fontSize="14px" fontWeight="bold" name="password">Repeat New Password</Text>
                                <Input type="password" placeholder=".........." size="sm"  name="repeatNewPassword" fontSize="14px" _placeholder={{fontSize:'30px'}}  {...field}/>
                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                        )
                }

            </Field>
          
  
            
           
             
  
              <HStack  fontSize="14px">

             
               
                
        </HStack>
  
              <Button bg="#5F00D9" type="submit"  _hover={{ bg:"#6f10ea"}}>Reset Password</Button>
            
            </Stack>
        </Form>
     }
        </Formik>

       
            
  
        </Card>
      </Center>
    </Container>
  );
}
