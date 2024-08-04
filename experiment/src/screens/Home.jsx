import React, { useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
} from 'react-native';
import ThemeContext from '../contexts/AppContext';
import { DARK, LIGHT } from '../constants/colors';
import AnimatedComponent from '../components/AnimatedComponent';

const Home = () => {
    const systemTheme = useColorScheme();
    const { theme, toggleTheme, useSystemTheme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme === 'dark' ? DARK.primary : LIGHT.primary,
        },
        text: {
            color: theme === 'dark' ? 'white' : 'black',
            marginBottom: 20,
            fontSize: 16,
        },
        button: {
            color: theme === 'dark' ? 'black' : 'white',
            fontSize: 16,
        },
    });

    return (
        <View style={styles.container}>
            <AnimatedComponent />
            <Text style={styles.text}>Current Theme: {theme}</Text>
            <Text style={styles.text}>System Theme: {systemTheme}</Text>
            <TouchableOpacity
                onPress={() => toggleTheme('light')}
                style={{
                    marginTop: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: theme === 'dark' ? '#fff' : '#000',
                }}
            >
                <Text style={styles.button}>Light Theme</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => toggleTheme('dark')}
                style={{
                    marginTop: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: theme === 'dark' ? '#fff' : '#000',
                }}
            >
                <Text style={styles.button}>Dark Theme</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => useSystemTheme()}
                style={{
                    marginTop: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: theme === 'dark' ? '#fff' : '#000',
                }}
            >
                <Text style={styles.button}>System Theme</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Home;
