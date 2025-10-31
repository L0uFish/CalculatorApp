import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface ButtonProps {
  label: string;
  onPress: (label: string) => void;
}

export default function KeyButton({ label, onPress }: ButtonProps) {
  const isOperator = ["÷", "/", "x", "-", "+", "%"].includes(label);
  const isSpecial = ["C", "()","+/-"].includes(label);
  const isEquals = label === "=";

  const buttonStyle = [
    styles.button,
    isOperator && styles.operatorButton,
    isSpecial && styles.specialButton,
    isEquals && styles.equalsButton,
  ];

  const labelStyle = [
    styles.label,
    (isOperator || isEquals) && styles.labelLight,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => onPress(label)}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    aspectRatio: 1,
    margin: 6,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },

  operatorButton: {
    backgroundColor: "#d9d9d9",
  },
  specialButton: {
    backgroundColor: "#f0f0f0",
  },
  equalsButton: {
    backgroundColor: "#4a90e2",
  },

  label: {
    fontSize: 26,
    color: "#222",
    fontWeight: "500",
  },
  labelLight: {
    color: "#fff",
  },
});
