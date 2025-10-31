import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Display from "./Display";
import Toolbar from "./Toolbar";
import KeyPad from "./Keypad";

export default function CalculatorController() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const checkEasterEgg = (val: string): string | null => {
    const table: Record<string, string> = {
      "5318008": "ಠ⁠︵⁠ಠ",
      "58008": "( ͡° ͜ʖ ͡°)",
    };
    return table[val] || null;
  };

  const safeEvaluate = (expr: string): string => {
    try {
      const formatted = expr
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/%/g, "/100");
      if (!formatted || /[+\-*/(]$/.test(formatted)) return "";
      const value = Function(`"use strict"; return (${formatted})`)();
      return isNaN(value) ? "" : value.toString();
    } catch {
      return "";
    }
  };

  const handleKeyPress = (label: string) => {
    if (label === "C") {
      setExpression("");
      setResult("");
      return;
    }

    if (label === "=") {
      try {
        const formatted = expression
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/%/g, "/100");
        const evaluated = Function(`"use strict"; return (${formatted})`)();

        if (!isNaN(evaluated)) {
          const resultString = evaluated.toString();
          const easter = checkEasterEgg(resultString);

          if (easter) {
            setExpression(resultString);
            setResult(easter);
          } else {
            setExpression(resultString);
            setResult("");
          }
        } else {
          setResult("Error");
        }
      } catch {
        setResult("Error");
      }
      return;
    }

    if (label === "+/-") {
      const parts = expression.split(/([+\-x/÷])/);
      const last = parts.pop();
      if (last) {
        if (last.startsWith("-")) parts.push(last.slice(1));
        else parts.push("-" + last);
      }
      setExpression(parts.join(""));
      return;
    }

    if (label === "%") {
      const parts = expression.split(/([+\-x/÷])/);
      const last = parts.pop();
      if (last && !isNaN(Number(last))) {
        parts.push((Number(last) / 100).toString());
        setExpression(parts.join(""));
      }
      return;
    }

    if (label === ".") {
      const parts = expression.split(/([+\-x/÷])/);
      const last = parts[parts.length - 1];
      if (last && last.includes(".")) return;
    }

    if (["/", "x", "+", "-"].includes(label) && expression === "") return;

    const lastChar = expression.slice(-1);
    if (
      ["/", "x", "+", "-"].includes(lastChar) &&
      ["/", "x", "+", "-"].includes(label)
    )
      return;

    if (label === "()") {
      const open = (expression.match(/\(/g) || []).length;
      const close = (expression.match(/\)/g) || []).length;
      if (open > close && /[\d)]$/.test(expression)) {
        setExpression(expression + ")");
      } else if (/[\d)]$/.test(expression)) {
        setExpression(expression + "x(");
      } else {
        setExpression(expression + "(");
      }
      return;
    }

    const newExpr = expression + label;
    setExpression(newExpr);
    setResult(safeEvaluate(newExpr));
  };

  return (
    <View style={styles.container}>
      <Display expression={expression} result={result} />
      <Toolbar
        onDelete={() => {
          if (expression.length > 0) {
            setExpression(expression.slice(0, -1));
            setResult(safeEvaluate(expression.slice(0, -1)));
          }
        }}
      />
      <KeyPad onKeyPress={handleKeyPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "flex-end",
  },
});
