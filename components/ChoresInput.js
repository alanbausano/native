import {useState} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";

export const ChoresInput = ({addToList, modalVisible, setModalVisible}) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (enteredText) => {
    setInputValue(enteredText);
  };
 
const handleOnAddToList = () => {
  addToList(inputValue)
  setInputValue("");
  setModalVisible(false)
}
  return (
    <Modal visible={modalVisible} animationType="slide">
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your chores"
          onChangeText={handleChange}
          value={inputValue}
          autoFocus
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button style={styles.buttonStyle} title="Cancel" onPress={() => setModalVisible(false)} color='#f31282' />
        </View>
        <View style={styles.button}>
        <Button style={styles.buttonStyle} title="Add to list" onPress={handleOnAddToList} color="#256c82" />
        </View>
        </View>
      </View>
    </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'teal'
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    flex: 1,
  },
  textInput: {
    borderRadius: 5,
    backgroundColor: "#76af97",
    width: "90%",
    color: "white",
    padding: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 7,
    width: "80%",
    justifyContent: 'space-evenly'
  },
  buttonStyle: {
    margin: 30,
    width: "90%",
    backgroundColor: 'teal'

  },
  button: {
    width: "40%",

  }
})
