import React from "react";
import { View } from "react-native";
import Display from "../components/Display";
import Toolbar from "../components/Toolbar";
import { SafeAreaView } from "react-native-safe-area-context";
import KeyPad from "@/components/Keypad";
import CalculatorController from "@/components/CalculatorController";

export default function Index(){
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
            <CalculatorController />
        </SafeAreaView>
    );
}