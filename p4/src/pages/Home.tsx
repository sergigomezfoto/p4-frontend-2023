import { FunctionComponent, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { createApi } from "unsplash-js";
import { Photo } from "../components/Photo";


const api = createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
});

const Home: FunctionComponent = () => {
    const [data, setPhotosResponse] = useState<any | null>(null);

    useEffect(() => {
        api.search
            .getPhotos({ query: "mashrooms", orientation: "landscape", perPage: 30 })
            .then(result => {
                setPhotosResponse(result);
                console.log(result);
            })
            .catch(() => {
                console.log("error!");
            });
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
            </div>
        );
    } else {
        return (
            <div >
                <ul >
                    {data.response.results.map((photo: Photo) => (
                        <li key={photo.id} >
                            <Photo photo={photo} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home;