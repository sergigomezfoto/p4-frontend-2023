import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail: FC = () => {
    const [message, setMessage] = useState<string>('')
    const { id } = useParams();


    useEffect(() => {
        console.log(id);       
        if (id) {
            setMessage(`The number is ${id}`);
        } else {
            setMessage('No number');
        }
    }, [])

    return (
        <div>
            <h1>El detall de la foto:</h1>
            <p>{message}</p>
        </div>
    );
}




export default Detail;