import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "@/src/services/graphQL";
import { styles } from "./styles";

const ListGraphQL: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <Text style={{ color: "red", textAlign: "center", marginTop: 20 }}>
        Erro ao carregar dados: {error.message}
      </Text>
    );
  }

  if (!data || !data.todos) {
    return <Text style={{ color: "red" }}>Nenhum dado disponível.</Text>;
  }

  // Filtrando e transformando os dados
  const todosFormatted = data.todos.map((todo: { __typename: string, id: string, title: string, completed: boolean }) => ({
    completed: todo.completed,
    id: Number(todo.id), // Converte o id para número
    title: todo.title,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={todosFormatted}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.completed ? "✅ Concluído" : "❌ Pendente"}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListGraphQL;
