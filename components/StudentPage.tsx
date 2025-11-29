import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StudyMaterialPage } from './StudyMaterialPage';

interface StudentPageProps {
    onBack: () => void;
}

export function StudentPage({ onBack }: StudentPageProps) {
    const [showStudyMaterial, setShowStudyMaterial] = useState(false);

    // If study material is selected, show that page
    if (showStudyMaterial) {
        return <StudyMaterialPage onBack={() => setShowStudyMaterial(false)} />;
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            {/* Header */}
            <View className="bg-white shadow-md">
                <View className="flex-row items-center px-4 py-4">
                    <TouchableOpacity onPress={onBack} className="mr-4">
                        <Ionicons name="arrow-back" size={24} color="#374151" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-gray-800">
                        All Student Section
                    </Text>
                </View>
            </View>

            {/* Main Content - 4 Equal View Components */}
            <ScrollView className="flex-1 p-4">
                <View className="flex-1 flex-row flex-wrap justify-between">
                    {/* Time Table Component */}
                    <View className="w-[48%] bg-white rounded-xl shadow-lg p-6 mb-4 min-h-[200px] justify-center items-center">
                        <Ionicons name="calendar-outline" size={48} color="#3B82F6" />
                        <Text className="text-xl font-bold text-gray-800 mt-4">Time Table</Text>
                        <Text className="text-sm text-gray-500 mt-2 text-center">
                            View class schedules and timings
                        </Text>
                    </View>

                    {/* Events Component */}
                    <View className="w-[48%] bg-white rounded-xl shadow-lg p-6 mb-4 min-h-[200px] justify-center items-center">
                        <Ionicons name="megaphone-outline" size={48} color="#10B981" />
                        <Text className="text-xl font-bold text-gray-800 mt-4">Events</Text>
                        <Text className="text-sm text-gray-500 mt-2 text-center">
                            Upcoming college events and activities
                        </Text>
                    </View>

                    {/* Study Material Component */}
                    <TouchableOpacity
                        className="w-[48%] bg-white rounded-xl shadow-lg p-6 mb-4 min-h-[200px] justify-center items-center"
                        onPress={() => setShowStudyMaterial(true)}
                    >
                        <Ionicons name="book-outline" size={48} color="#F59E0B" />
                        <Text className="text-xl font-bold text-gray-800 mt-4">Study Material</Text>
                        <Text className="text-sm text-gray-500 mt-2 text-center">
                            Access notes and resources
                        </Text>
                    </TouchableOpacity>

                    {/* About Component */}
                    <View className="w-[48%] bg-white rounded-xl shadow-lg p-6 mb-4 min-h-[200px] justify-center items-center">
                        <Ionicons name="information-circle-outline" size={48} color="#8B5CF6" />
                        <Text className="text-xl font-bold text-gray-800 mt-4">About</Text>
                        <Text className="text-sm text-gray-500 mt-2 text-center">
                            College information and details
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
