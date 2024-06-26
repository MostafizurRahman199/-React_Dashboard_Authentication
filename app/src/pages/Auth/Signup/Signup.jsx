import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  HStack,
  Link,
  LinkBox,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";


export default function Signup() {
  const newLocal = "";
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
          <Stack spacing="3" mt="2">
            <HStack>
              <Stack spacing="0px" py="0px" gap="0px">
                <Text  fontSize="14px" >Name</Text>
                <Input placeholder="James" size="sm" />
              </Stack>
              <Stack spacing="0px" py="0px" gap="0px">
                <Text  fontSize="14px">Surname</Text>
                <Input placeholder="Arthur" size="sm" />
              </Stack>
            </HStack>

            <Stack spacing="0px" py="0px" gap="0px">
              <Text fontSize="14px" >Email</Text>
              <Input type="email" placeholder="name@gmail.com" size="sm"  fontSize="14px" />
            </Stack>
            <Stack spacing="0px" py="0px" gap="0px">
              <Text fontSize="14px">Password</Text>
              <Input type="password" placeholder=".........." size="sm"  fontSize="14px"/>
            </Stack>
            <Stack spacing="0px" py="0px" gap="0px">
              <Text   fontSize="14px">Repeat Password</Text>
              <Input type="password" placeholder=".........." size="sm"  fontSize="14px" _placeholder={{fontSize:'30px'}}/>
            </Stack>

            <HStack  fontSize="14px">
              <Checkbox colorScheme="purple">
              
                I agree with{" "}
                <Link textColor="#5F00D9" color="purple" href="#"  fontSize="12px">
                Terms & Conditions.
                </Link>
              
              </Checkbox>
              
            </HStack>

            <Button bg="#5F00D9">Create Account</Button>

            <Center>
              <Text  fontSize="12px">
              Already have an account?{" "}
                <Link textColor="#5F00D9" color="purple" href="#">
                Log In
                </Link>
              </Text>
            </Center>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}
