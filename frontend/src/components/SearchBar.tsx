import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { borderRadius, spacing } from "../constants";

export default function SearchBar() {
    const [text, onChangeText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={"Search for a location..."}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '85%',
    },
    input: {
        padding: spacing.md,
        width: 'auto',
        flex: 1,
        borderRadius: borderRadius.full,
        backgroundColor: '#ffffff',
    }
})