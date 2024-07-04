import { Box, Button, Card, Center, Checkbox, Container, FormControl, FormErrorMessage, HStack, Stack, Text, Input, useToast } from '@chakra-ui/react';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { signinUser } from '../../../api/query/userQuery';
import useAuth from '../../../hooks/useAuth';

const signupValidationSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(5, "Password must be at least 5 characters").required("Password is required"),
});

export default function Sigin() {
  const toast = useToast();
  const {login} = useAuth();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {

      const {token} = data;
      if(token){
          login(token);
      }


      toast({
        title: "Signin Successful",
        description: "You have successfully signed in.",
        status: "success",
      });
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        status: "error",
      });
    },
  });

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

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              mutate(values);
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form>
                <Stack spacing="4" mt="2">
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Text fontSize="14px" fontWeight="bold">Email</Text>
                        <Input type="email" placeholder="name@gmail.com" size="sm" fontSize="14px" {...field} />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Text fontSize="14px" fontWeight="bold">Password</Text>
                        <Input type="password" placeholder=".........." size="sm" fontSize="14px" {...field} />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack fontSize="14px">
                    <Field name="checkbox">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <HStack justify="space-between">
                            <Checkbox fontSize="12px" size="sm" colorScheme="purple" {...field}>
                              Remember me
                            </Checkbox>
                            <Link to="/forgot-password">
                              <Box as="span" _hover={{ textColor: "#5F00D9" }} fontWeight="medium" fontSize="12px">Forgot password?</Box>
                            </Link>
                          </HStack>
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </HStack>

                  <Button bg="#5F00D9" type="submit" isLoading={isLoading} _hover={{ bg: "#6f10ea" }}>Login</Button>
                </Stack>
              </Form>
            )}
          </Formik>

          <Link to="/signup">
            <Button width="100%" mt="3" bg="#5F00D9" _hover={{ bg: "#6f10ea" }}>Create Account</Button>
          </Link>
        </Card>
      </Center>
    </Container>
  );
}
