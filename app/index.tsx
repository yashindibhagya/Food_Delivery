import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold text-red-900">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}