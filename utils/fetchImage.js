import axios from "axios";
import randomImage from "./randomImage";

export default function fetchImage() {
    var data = "";

    axios
        .get(
            "https://pixabay.com/api/?key=33776030-4cbcbfd43a47407d9fa7ccf32&&image_type=photo"
        )
        .then((res) => {
            data =
                res.data.hits[randomImage(res.data.hits.length)].largeImageURL;

            console.log(data);
        });

    return data;
}
