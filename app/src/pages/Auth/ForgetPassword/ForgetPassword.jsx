import { Grid, GridItem, Icon, useToast } from '@chakra-ui/react';
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
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import {Formik, Form, Field} from "formik";
import { object, string,  ref } from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { sendForgotMail } from '../../../api/query/userQuery';
import { useMutation } from 'react-query';
const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(5, "Password must be at least 5 characters").required("Password is required"),
  repeatPassword: string().oneOf([ref("password"), null], "Passwords must match").required("Repeat Password is required"),
});


export default function ForgetPassword() {


  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const { mutate, isSuccess, isLoading } = useMutation({

    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMail,
  
    onSettled: (data) => {
      console.log(data);
      navigate(`/forgot-success/${email}`);
      toast({
      title: "Send forgot mail Successful",
        description: "Your mail have reached successfully",
        status: "success",
      });
    },
      

    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error",
      });
    },
  
   
  });

 
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="16px" w="408px">
          <Stack mb="1" spacing="0px" py="0px" gap="4px">
           <Link to="/signin"> <Icon fontSize="20px" _hover={{textColor:"#5F00D9"}} ><GoArrowLeft /></Icon></Link>
          <Text fontSize="28px" fontWeight="medium">
          Forgot Password
          </Text>
          <Text fontSize="14px" fontWeight="" textColor="#797E82">
          Enter your email address for which account you want to reset your password.
          </Text>
          </Stack>
        <Formik initialValues={{
            name:"",
            surname:"",
            email:"",
            password:"",
            repeatPassword:"",
        }}

        onSubmit={(values)=>{
          
          setEmail((prev) =>( prev = values.email));
          console.log(values);
          mutate({email: values.email})
          

        }
      }

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
          
          
  
            
           
             
  
              <HStack  fontSize="14px">

             
               
                
        </HStack>
  
              <Button bg="#5F00D9" type="submit"  fontSize="14px" _hover={{ bg:"#6f10ea"}}>Reset Password</Button>
            
            </Stack>
        </Form>
     }
        </Formik>

       
          
  
        </Card>
      </Center>
    </Container>
  );
}
