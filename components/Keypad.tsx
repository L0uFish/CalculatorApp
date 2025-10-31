import React from "react";
import { View, Text, StyleSheet } from "react-native";
import KeyButton from "./KeyButton";

const basicGrid = [
  ["C", "()", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["+/-", "0", ".", "="]
];

interface KeyPadProps {
  onKeyPress: (label: string) => void;
}

export default function KeyPad({ onKeyPress }: KeyPadProps) {
  return (
    <View style={styles.container}>
      {basicGrid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button, btnIndex) => (
            <KeyButton
              key={btnIndex}
              label={button}
              onPress={onKeyPress}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginTop: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});