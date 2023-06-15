import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    const [message, setMessage] = useState<string>('')
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage(`The number is ${number}`);
        } else {
            setMessage('No number');
        }
    }, [])


    return (
        <div>
            <h1>About</h1>
            <p>{message}</p>
        </div>
    );
}

export default About;