import { View, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

interface IButtonProps {
  type: "API" | "GraphQL";
  title: string;
}

export default function Button({ title, type }: IButtonProps) {
  return (
    <View style={styles.container}>
      {type === "API" ? (
        <Link
          href="/list/listRest/APIRest"
          style={[styles.button, { backgroundColor: "blue" }]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Link>
      ) : (
        <Link
          href="/list/listGraphQL/graphQL"
          style={[styles.button, { backgroundColor: "green" }]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Link>
      )}
    </View>
  );
}
