import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DisplayProps {
    expression: string;
    result: string;
}

const styles = StyleSheet.create({
    displayShadow: {
        backgroundColor: "#f2f2f2",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 8,
        flex:1,
    },
    displayContainer: {
        backgroundColor: "#e0e0e0",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 16,
        flex:1,
    },
    expressionText: {
        fontSize: 22,
        color: "#555",
        textAlign: "left",
    },
    resultText: {
        fontSize: 40,
        color: "#111",
        fontWeight: "bold",
        textAlign: "right",
    },
});

export default function Display({ expression, result }: DisplayProps) {
    return (
        <View style={styles.displayShadow}>
            <View style={styles.displayContainer}>
                <Text style={styles.expressionText}>{expression}</Text>
                <Text style={styles.resultText}>{result}</Text>
            </View>
        </View>
    );
}
