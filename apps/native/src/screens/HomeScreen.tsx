import React from "react";
import { Text, View } from "react-native";
import { trpc } from "@app/utils/trpc";

const HomeScreen: React.FC = () => {
  const { data: users, status } = trpc.all.useQuery();
  const { data } = trpc.roberto.useQuery();

  return (
    <View>
      <Text>{data} {status}</Text>
      {users?.map((user) => (
        <Text key={user.id}>{user.email}</Text>
      ))}
    </View>
  );
};

export default HomeScreen;
