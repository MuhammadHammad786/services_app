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
import { MaterialIcons } from "@expo/vector-icons"

export default function Login({ navigation }) {
    const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)
    return (
        <NativeBaseProvider>
            <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
                <Heading size="lg" fontWeight="600" color="coolGray.800">
                    Welcome
                </Heading>
                <Heading mt="1" color="coolGray.600" fontWeight="medium" size="sm">
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                color: 'coolGray.800',
                                fontSize: 'sm',
                                fontWeight: 500,
                            }}>
                            Email ID
                        </FormControl.Label>
                        <Input
                            size="2xl"
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="email" />}
                                    size={5}
                                    ml="2"
                                    color="muted.400"
                                />
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                color: 'coolGray.800',
                                fontSize: 'sm',
                                fontWeight: 500,
                            }}>
                            Password
                        </FormControl.Label>

                        <Input
                        type={show ? "password" : "text"}
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="lock" />}
                                    size={5}
                                    ml="2"
                                    color="muted.400"
                                />
                            }
                            InputRightElement={
                                <Icon
                                    as={<MaterialIcons name="visibility-off" />}
                                    size={5}
                                    mr="2"
                                    color="muted.400"
                                    onPress={handleClick}
                                />
                            }
                            size="2xl"

                        />
                        <Link
                            _text={{ fontSize: 'sm', fontWeight: '500', color: 'indigo.500' }}
                            alignSelf="flex-end"
                            mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button size="lg" mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="muted.700" fontWeight={400}>
                            I'm a new user.{' '}
                        </Text>

                        <Link
                            onPress={() => navigation.navigate('Signup')}
                            _text={{
                                color: 'indigo.500',
                                fontWeight: 'medium',
                                fontSize: 'sm',
                            }}>
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
}
