import React, { useState } from "react";
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

    </View>
  );
}

const styles = StyleSheet.create({

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

  }
});
