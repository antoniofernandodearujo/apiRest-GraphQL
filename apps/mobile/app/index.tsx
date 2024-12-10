import { View, Text } from "react-native";
import Button from "@/components/Button/Button";

export default function List() {
    return (
        <View style={{ flex: 1 }}>
            <Button title="API" type="API" />
            <Button title="GraphQL" type="GraphQL" />
        </View>
    );
}