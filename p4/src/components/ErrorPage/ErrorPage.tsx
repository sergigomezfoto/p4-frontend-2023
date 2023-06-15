import { FC } from "react";

interface ErrorPageProps {
    error:any
}
 
const ErrorPage: FC<ErrorPageProps> = (props) => {
    return <div>{props.error}</div>;
}
export default ErrorPage;