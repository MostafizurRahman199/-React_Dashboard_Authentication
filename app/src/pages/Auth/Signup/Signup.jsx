import { Box, Center, Container, FormControl, FormErrorMessage, HStack, Stack, Text, useToast, Checkbox, Button, Card, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { signupUser } from '../../../api/query/userQuery';

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(5, "Password must be at least 5 characters").required("Password is required"),
  repeatPassword: string().oneOf([ref("password"), null], "Passwords must match").required("Repeat Password is required"),
});

export default function Signup() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,

    onSuccess: (data) => {
    if(email !==""){
      navigate(`/register-email-verify/${email}`);
    }
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
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
            <Text fontSize="14px" textColor="#797E82">
              Create a free account by filling data below.
            </Text>
          </Stack>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              setEmail(values.email);
              mutate({
                firstName: values.name,
                lastName: values.surname,
                email: values.email,
                password: values.password,
              });

              if(email != ""){
                navigate("/register-email-verify", {
                  state:{email},
                });
              }
          

            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form>
                <Stack spacing="4" mt="2">
                  <HStack spacing={2}>
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <Text fontSize="14px" fontWeight="bold">Name</Text>
                          <Input placeholder="James" size="sm" {...field} />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="surname">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <Text fontSize="14px" fontWeight="bold">Surname</Text>
                          <Input placeholder="Arthur" size="sm" {...field} />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </HStack>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Text fontSize="14px" fontWeight="bold">Email</Text>
                        <Input type="email" placeholder="name@gmail.com" size="sm" {...field} />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Text fontSize="14px" fontWeight="bold">Password</Text>
                        <Input type="password" placeholder=".........." size="sm" {...field} />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="repeatPassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Text fontSize="14px" fontWeight="bold">Repeat Password</Text>
                        <Input type="password" placeholder=".........." size="sm" {...field} />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="checkbox">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Checkbox colorScheme="purple" size="sm" {...field}>
                          I agree with{" "}
                          <Link to="#" style={{ color: "#5F00D9" }} fontSize="12px">
                            Terms & Conditions.
                          </Link>
                        </Checkbox>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button width="100%" bg="#5F00D9" type="submit" _hover={{ bg: "#6f10ea" }} isLoading={isLoading}>
                    Create Account
                  </Button>
                  <Center>
                    <Text fontSize="12px">
                      Already have an account?{" "}
                      <Link to="/signin">
                        <Box as="b" textColor="#5F00D9">Log in</Box>
                      </Link>
                    </Text>
                  </Center>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
}
