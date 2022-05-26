import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";

export const ChoresList = ({choresData, setChores}) => {
  const handleDelete = (id) => {
    setChores((currentChores) => {
      return currentChores.filter((chore) => chore.id !== id);
    });
  };
  return (
    <View style={styles.chores}>
    <Pressable onPress={() => handleDelete(choresData.item.id)} android_ripple={{color: '#f31282', borderless: true}}>
      <Text
        style={styles.choresText}
      >
        {choresData.item.text}
      </Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  chores: {
    borderRadius: 9,
    backgroundColor: "teal",
    margin: 3,
  },
  choresText: {
    padding: 7,
    color: "white",
  },
})