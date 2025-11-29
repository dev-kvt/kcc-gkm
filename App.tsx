import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Linking, SafeAreaView, Image } from 'react-native';
import './global.css';

export default function App() {
  const handleContribute = () => {
    Linking.openURL('https://github.com/dev-kvt/kcc-gkm');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <View className="flex-1 justify-center items-center px-6">
        {/* Logo */}
        <Image
          source={require('./assets/IMG-20251129-WA0005.jpg')}
          className="w-32 h-32 rounded-full mb-8"
        />

        {/* Title */}
        <Text className="text-4xl font-extrabold text-black mb-10 text-center">
          KCC - Manage App
        </Text>

        {/* Options Section */}
        <View className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
          <Text className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Options
          </Text>

          <View className="space-y-4">
            <TouchableOpacity
              className="w-full bg-gray-500 py-4 rounded-xl active:bg-blue-600"
              onPress={() => console.log('Teachers pressed')}
            >
              <Text className="text-white text-center font-bold text-lg">
                Teachers
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-full bg-gray-200 py-8 rounded-xl active:bg-green-600"
              onPress={() => console.log('Students pressed')}
            >
              <Text className="text-black text-center font-bold text-lg">
                Students
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="p-6 items-center">
        <TouchableOpacity onPress={handleContribute}>
          <Text className="text-gray-500 text-base">
            Contribute on <Text className="text-blue-500 underline">GitHub</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
