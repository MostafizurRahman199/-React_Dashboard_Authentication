import { Grid, GridItem } from '@chakra-ui/react';
import {
    Button,
    Card,
    Center,
    Checkbox,
    Container,
    FormControl,
    FormErrorMessage,
    HStack,
    Link,
    LinkBox,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";
import {Formik, Form, Field} from "formik";
import { object, string,  ref } from 'yup';

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(5, "Password must be at least 5 characters").required("Password is required"),
  repeatPassword: string().oneOf([ref("password"), null], "Passwords must match").required("Repeat Password is required"),
});



export default function Signup() {
 
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="16px" w="408px">
          <Stack mb="1" spacing="0px" py="0px" gap="0px">
          <Text fontSize="32px" fontWeight="medium">
            Welcome to Crypto App
          </Text>
          <Text fontSize="14px" fontWeight="" textColor="#797E82">
            Create a free account by filling data below.
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
              

              <Grid templateColumns='repeat(2, 1fr)' gap={2} >
              <GridItem colSpan={{
                base: 2,
                sm: 2,
                md:1,
                xl:1,
                "2xl":1,
                lg:1,
              }}>
              <Field name="name">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text  fontSize="14px" fontWeight="bold">Name</Text>
                                <Input placeholder="James" size="sm" w="full" name="name"  {...field} />
                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                        )
                }

            </Field>
          </GridItem>
            <GridItem colSpan={{
                 base: 2,
                 sm: 2,
                 md:1,
                 xl:1,
                 "2xl":1,
                 lg:1,}}  >
              <Field name="surname">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text  fontSize="14px" fontWeight="bold" name="surname">Surname</Text>
                                <Input placeholder="Arthur" size="sm" {...field}/>
                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                        )
                }

            </Field>
  </GridItem>
  
</Grid>

            {/* <Field name="name">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text  fontSize="14px" fontWeight="bold">Name</Text>
                                <Input placeholder="James" size="sm" name="name"  {...field} />
                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                        )
                }

            </Field>

            <Field name="surname">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text  fontSize="14px" fontWeight="bold" name="surname">Surname</Text>
                                <Input placeholder="Arthur" size="sm" {...field}/>
                                <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                        )
                }

            </Field> */}

             

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
              <Field name="repeatPassword">
                {
                        ({field, meta})=>(
                            <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error && meta.touched)}>
                                <Text   fontSize="14px" fontWeight="bold" name="repeatPassword">Repeat Password</Text>
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

                              <FormControl spacing="0px" py="0px" gap="0px" isInvalid={!!(meta.error &&    meta.touched)}>
                                 <Checkbox colorScheme="purple" name="checkbox" {...field}>
                                       I agree with{" "}
                                      <Link textColor="#5F00D9" color="purple" href="#"  fontSize="12px">
                                      Terms & Conditions.
                                      </Link>
                                  </Checkbox>
                                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                              </FormControl>
                        )
                }

              </Field>
               
                
        </HStack>
  
              <Button bg="#5F00D9" type="submit"  _hover={{ bg:"#6f10ea"}}>Create Account</Button>
  
              <Center>
                <Text  fontSize="12px">
                Already have an account?{" "}
                  <Link textColor="#5F00D9" color="purple" href="/signin">
                  Log In
                  </Link>
                </Text>
              </Center>
            </Stack>
        </Form>
     }
        </Formik>
        </Card>
      </Center>
    </Container>
  );
}
