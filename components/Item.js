import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

export default function Item({ item }) {
    return (
        <View>
            <View style={styles.containerTop}>
                <Image
                    source={{
                        uri: item.userImageURI,
                    }}
                    style={styles.imageSmall}
                />
                <View style={styles.containerText}>
                    <Text style={styles.containerTopTextUser}>{item.user}</Text>
                    <Text style={styles.containerTopTextId}>{item.userId}</Text>
                </View>
            </View>
            <View>
                <Image
                    source={{
                        uri: item.userImageURI,
                    }}
                    style={[
                        styles.imageLarge,
                        { width: Dimensions.get("window").width - 40 },
                    ]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerTop: {
        flex: 0,
        flexDirection: "row",
        marginTop: 10,
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
        height: 550,
        elevation: 10,
    },
});
