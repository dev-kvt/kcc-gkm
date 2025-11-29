import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StudyMaterialPageProps {
    onBack: () => void;
}

export function StudyMaterialPage({ onBack }: StudyMaterialPageProps) {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* Header */}
            <View className="bg-white shadow-md">
                <View className="flex-row items-center px-4 py-4">
                    <TouchableOpacity onPress={onBack} className="mr-4">
                        <Ionicons name="arrow-back" size={24} color="#374151" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-gray-800">
                        Select Your Academic Year
                    </Text>
                </View>
            </View>

            {/* Main Content - 3 Year Options */}
            <View className="flex-1 justify-center items-center px-6">
                <View className="w-full max-w-md">
                    {/* First Year Button */}
                    <TouchableOpacity
                        className="w-full bg-gray-400  py-5 rounded-xl mb-4 shadow-lg active:bg-blue-600"
                        onPress={() => console.log('First Year pressed')}
                    >
                        <Text className="text-white text-center font-bold text-xl">
                            First Year
                        </Text>
                    </TouchableOpacity>

                    {/* Second Year Button */}
                    <TouchableOpacity
                        className="w-full bg-gray-400  py-5 rounded-xl mb-4 shadow-lg active:bg-green-600"
                        onPress={() => console.log('Second Year pressed')}
                    >
                        <Text className="text-white text-center font-bold text-xl">
                            Second Year
                        </Text>
                    </TouchableOpacity>

                    {/* Third Year Button */}
                    <TouchableOpacity
                        className="w-full bg-gray-400 py-5 rounded-xl shadow-lg active:bg-purple-600"
                        onPress={() => console.log('Third Year pressed')}
                    >
                        <Text className="text-white text-center font-bold text-xl">
                            Third Year
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
