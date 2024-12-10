import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import ApiService from "@/src/services/api";
import { styles } from "./styles";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

type TodoResponse = ITodo[] | { message: string };

export default function ListAPIRest() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const api = new ApiService();
      const response: TodoResponse = await api.get();
      setTodos(response as ITodo[]);
      console.log(todos);
    } catch (error: any) {
      console.error("Erro ao buscar dados:", error.message || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.completed ? "✅ Concluído" : "❌ Pendente"}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
