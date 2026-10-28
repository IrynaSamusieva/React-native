import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/(auth)/sign-in" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4 active:opacity-80">
          <Text className="font-semibold text-white">Go to sign in</Text>
        </Pressable>
      </Link>
      <Link href="/(auth)/sign-up" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4 active:opacity-80">
          <Text className="font-semibold text-white">Go to sign up</Text>
        </Pressable>
      </Link>
        <Link href={{
            pathname: "./subscriptions/[id]",
            params: {id: "dolboeb"},
        }} asChild>
            <Pressable className="mt-4 rounded bg-primary p-4 active:opacity-80">
                <Text className="font-semibold text-white">Go to idk</Text>
            </Pressable>
        </Link>
    </View>
  );
}
