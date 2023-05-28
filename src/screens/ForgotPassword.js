import * as React from "react";
import { useState } from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image } from "native-base";


const Forgot = ({ navigation }) => {

  const handleLo = () => {

    navigation.navigate("Login");
  }

  const [email, SetEmail] = useState("");
  const [errorEmail, SetErrorEmail] = useState("");

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
          have you forgotten your password?
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
          Ingresa tu correo para enviar tu contraseña
        </Heading>
        <Image
          style={{ width: 120, height: 120, marginLeft: 80 }}
          source={require('../img/lock.png')}
        />
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLo} bg="#015D52">
            Enviar
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Forgot;