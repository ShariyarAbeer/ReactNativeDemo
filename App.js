import React, { useState } from "react";
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setoutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Click me"
        onPress={() => setoutputText("Text Change on click ")}
      />
=======
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enterNote, setEnterNote] = useState("");
  const [notes, setNotes] = useState([]);
  const entertext = enterDocNote => {
    setEnterNote(enterDocNote);
  };
  const addNoteHandler = () => {
    setNotes(currrentNotes => [...currrentNotes, enterNote]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input_text}
          placeholder="Enter a note"
          onChangeText={entertext}
          value={enterNote}
        />
        <Button
          title="    add    "
          style={styles.buttonStyle}
          onPress={addNoteHandler}
        />
      </View>
      <View>
        {notes.map(goals => (
          <Text>{goals}</Text>
        ))}
      </View>
>>>>>>> 1985ea57acc08c77a4016b3c9866ae5165f12d95
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
=======
  screen: {
    padding: 60
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input_text: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  buttonStyle: {
    width: " 20%"
>>>>>>> 1985ea57acc08c77a4016b3c9866ae5165f12d95
  }
});
