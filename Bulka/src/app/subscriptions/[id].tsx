import { View, Text } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const SubcriptionDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>();
    return (
        <View>
            <Text>SubdcriptionDetails: {id}</Text>
        </View>
    );
};

export default SubcriptionDetails;