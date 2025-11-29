import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

interface TeacherLoginProps {
    onBack: () => void;
}

export const TeacherLogin = ({ onBack }: TeacherLoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Sign in with:', username, password);
        // Add authentication logic here
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <View className="flex-1 justify-center px-8">
                <View className="bg-white p-8 rounded-2xl shadow-lg">
                    <Text className="text-3xl font-bold text-center text-black-600 mb-8">
                        Teacher Login
                    </Text>

                    {/* Username Input */}
                    <View className="mb-4">
                        <Text className="text-gray-700 font-medium mb-2">Username</Text>
                        <TextInput
                            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-blue-500"
                            placeholder="Enter your username"
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password Input */}
                    <View className="mb-8">
                        <Text className="text-gray-700 font-medium mb-2">Password</Text>
                        <TextInput
                            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:border-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    {/* Sign In Button */}
                    <TouchableOpacity
                        className="w-full bg-gray-600 py-4 rounded-xl active:bg-blue-700 mb-4"
                        onPress={handleSignIn}
                    >
                        <Text className="text-white text-center font-bold text-lg">
                            Sign In
                        </Text>
                    </TouchableOpacity>

                    {/* Back Button */}
                    <TouchableOpacity
                        className="w-full py-3"
                        onPress={onBack}
                    >
                        <Text className="text-gray-500 text-center font-medium">
                            Back to Home
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
