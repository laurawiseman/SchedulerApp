import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Field from '../components/Field';


const CourseDetailScreen = ({route}) => {
    const course = route.params.course;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Field label="ID" value={course.id} />
                <Field label="Title" value={course.title} />
                <Field label="Meeting Times" value={course.meets} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#cfcfcf', 
    },
});

export default CourseDetailScreen;