import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./Item";
import fetchImage from "../utils/fetchImage";

export default function Layout() {
    const data = [
        {
            user: "Arkadina",
            userId: "@Arkadina",
            userImageURI:
                "https://pixabay.com/get/ga70f7f8e6e197bc083dcda560fa4c109acfd0afdd667580783b4ae8ad7bd4cb6ef73b2fb26372191defe18f9f3994e8d4bb501d83cbdc828964b13e432156a0c_1280.jpg",
            key: 0,
        },
        {
            user: "Hubert",
            userId: "@Hubert",
            userImageURI:
                "https://pixabay.com/get/g8bc1b8473e51aec5b23383c612f6f05827e56968591b010bda9c51bee21bedcdc86011ad9737efa9d1aa949e7218eacb57a41985c43a5de0ffa2a115ed2f35e4_1280.jpg",
            key: 1,
        },
        {
            user: "Elenor",
            userId: "@Elenor",
            userImageURI:
                "https://pixabay.com/get/gae5d01ff0c83870e083f1a52dcc55485104c82b7012bb27af82397558b037d8596c1658fb0cb2e36c73f806099eface3d48db310ba5bdf57a5f158a3039b14a2_1280.jpg",
            key: 2,
        },
    ];

    const itemSeparatorComponent = () => {
        return (
            <View
                style={{
                    height: "100%",
                    width: 100,
                }}
            />
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item.key}
                horizontal
                pagingEnabled
                ItemSeparatorComponent={itemSeparatorComponent}
                snapToAlignment="start"
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}
