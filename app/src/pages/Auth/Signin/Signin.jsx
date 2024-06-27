import { Box, Grid, GridItem } from '@chakra-ui/react';
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
import { Link } from 'react-router-dom';

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(5, "Password must be at least 5 characters").required("Password is required"),
  repeatPassword: string().oneOf([ref("password"), null], "Passwords must match").required("Repeat Password is required"),
});



export default function Sigin() {
 
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="16px" w="408px">
          <Stack mb="1" spacing="0px" py="0px" gap="0px">
          <Text fontSize="32px" fontWeight="medium">
            Welcome to Crypto App
          </Text>
          <Text fontSize="14px" fontWeight="" textColor="#797E82">
          Enter your credentials to access the account.
          </Text>
          </Stack>
        <Formik initialValues={{
            name:"",
            surname:"",
            email:"",
            password:"",
            repeatPassword:"",
        }}
        onSubmit={(values)=>console.log(values)}

        validationSchema={signupValidationSchema}
        
        >
     {
        ()=> <Form>
        <Stack spacing="4" mt="2">
              


         

             

              <Field name="email">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text fontSize="14px" fontWeight="bold" name="email">Email</Text>
                                <Input type="email" placeholder="name@gmail.com" size="sm"  fontSize="14px" {...field} />
                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                        )
                }

            </Field>
              <Field name="password">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text fontSize="14px" fontWeight="bold" name="password">Password</Text>
                                <Input type="password" placeholder=".........." size="sm"  fontSize="14px" _placeholder={{fontSize:'30px'}}  {...field}/>
                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                        )
                }

            </Field>
          
  
            
           
             
  
              <HStack  fontSize="14px">

              <Field name="checkbox">
                {
                        ({field, meta})=>(

                              <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error &&    meta.touched)} >
                                 <HStack justify="space-between">
                                 <Checkbox fontSize="12px" size="sm" colorScheme="purple" name="checkbox" {...field}>
                                 Remember me
                                     
                                  </Checkbox>
                                  <Link to="/forgot-password" >
                                      <Box as="span"  _hover={{textColor:"#5F00D9"}} fontWeight="medium" fontSize="12px" >Forgot password?</Box>
                                      </Link>
                                 </HStack>
                                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                              </FormControl>
                        )
                }

              </Field>
               
                
        </HStack>
  
              <Button bg="#5F00D9" type="submit"  _hover={{ bg:"#6f10ea"}}>Login</Button>
            
            </Stack>
        </Form>
     }
        </Formik>

       
              <Link to="/signup"   >
                                     
                <Button  width="100%"  mt="3" bg="#5F00D9" type="submit"  _hover={{ bg:"#6f10ea"}}>Create Account
                </Button>
              </Link>
  
        </Card>
      </Center>
    </Container>
  );
}
