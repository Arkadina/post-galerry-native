import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default function Layout() {
    return (
        <SafeAreaView>
            <View style={styles.containerTop}>
                <Image
                    source={{
                        uri: "https://source.unsplash.com/random",
                    }}
                    style={styles.imageSmall}
                />
                <View style={styles.containerText}>
                    <Text style={styles.containerTopTextUser}>Arkadina</Text>
                    <Text style={styles.containerTopTextId}>@arkadina</Text>
                </View>
            </View>
            <View>
                <Image
                    source={{
                        uri: "https://source.unsplash.com/random",
                    }}
                    style={styles.imageLarge}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerTop: {
        flex: 0,
        flexDirection: "row",
        marginBottom: 30,
    },
    containerText: {
        flex: 0,
        flexDirection: "column",
        marginLeft: 10,
    },
    containerTopTextUser: {
        fontWeight: "600",
    },
    containerTopTextId: {
        fontWeight: "400",
        fontSize: 12,
    },
    imageSmall: {
        borderRadius: 8,
        width: 50,
        height: 50,
        elevation: 4,
    },

    imageLarge: {
        borderRadius: 8,
        width: "100%",
        height: 550,
        elevation: 10,
    },
});
