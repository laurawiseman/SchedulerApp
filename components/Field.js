import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

const Field = ({label, value}) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fieldContainer: {
        marginBottom: 10, 
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62, 
        elevation: 4,
    },
    label: {
        fontWeight: 'bold',
        padding: 5,
    }, 
    value: {
        height: 40, 
        width: 300, 
        padding: 5, 
        backgroundColor: 'white',
    },
});

export default Field;
