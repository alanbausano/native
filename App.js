import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from "react-native";
import { ChoresInput } from "./components/ChoresInput";
import { ChoresList } from "./components/ChoresList";
import { StatusBar } from "expo-status-bar";
import { Alert } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [chores, setChores] = useState([]);
  const addToList = (inputValue) => {
    if (inputValue.length === 0) {
      Alert.alert(`Invalid empty item`,`You didn't add anything, try writing something`);
    } else {
      setChores((currentChores) => [...currentChores, {text: inputValue, id: Math.random().toString()}]);
    }
  };
  console.log(chores);
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.choresContainer}>
    <View>
    <Button title='Add chore' onPress={() => setModalVisible(true)} color='teal' />
    </View>
    <ChoresInput setChores={setChores} addToList={addToList} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={styles.listContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>List of chores</Text>
        </View>
        {chores?.length !== 0 ? (
          <FlatList
            data={chores}
            renderItem={(choresData) => {
              return <ChoresList choresData={choresData} setChores={setChores} />
            }}
            keyExtractor={(item)=> {
              return item.id;
            }}
          />
        ) : (
          <View style={styles.titleContainer}>
          <Text>No chores yet. Try adding something to the list</Text>
          </View>
        )}
      </View>
      </View>
      </>);
}

const styles = StyleSheet.create({
  choresContainer: {
    flex: 1,
    justifyContent: 'center',

    padding: 10,
  },
  listContainer: {
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#cccccc',
    textDecorationLine: "underline",
    fontWeight: 'bold'
  },
  titleContainer: {
    padding: 12,
    alignItems: 'center',
  }
});
