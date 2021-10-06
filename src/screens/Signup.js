import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Signup({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="sm">
          Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500 }}>
              Email
            </FormControl.Label>
            <Input size="2xl" />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500 }}>
              Password
            </FormControl.Label>
            <Input size="2xl" type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500 }}>
              Confirm Password
            </FormControl.Label>
            <Input size="2xl" type="password" />
          </FormControl>
          <Button size="lg" mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              Already Have an account.?.{' '}
            </Text>

            <Link
            onPress={() => navigation.navigate('Login')}
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}>
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
