import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  toolbarShadow: {
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
    borderRadius: 8,
    marginVertical: 8,
  },
  toolbarContainer: {
    backgroundColor: "#eeeeee",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    fontSize: 24,
    color: "#111",
  },
  separator: {
    fontSize: 18,
    color: "#aaa",
    marginHorizontal: 8,
  },
  deleteText: {
    fontSize: 26,
    color: "#111",
    fontWeight: "500",
  },
});

interface ToolbarProps {
  onDelete: () => void;
}

export default function Toolbar({ onDelete }: ToolbarProps) {
  return (
    <View style={styles.toolbarShadow}>
      <View style={styles.toolbarContainer}>
        {}
        <View style={styles.leftGroup}>
          <TouchableOpacity><Text style={styles.iconText}>⏱</Text></TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity><Text style={styles.iconText}>⚖</Text></TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity><Text style={styles.iconText}>∑</Text></TouchableOpacity>
        </View>

        {}
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.deleteText}>⌫</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
