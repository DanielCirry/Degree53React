import React from "react";
import { useHistory } from 'react-router-dom';
import BaseLayout from "../Components/BaseLayout";
import { addPostPostRequestConfig } from "../globals/requestConfig";
import CreatePostComponent from "../Components/CreatePostComponent";

export default function PostCreation(props) {    
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [succed, setSucced] = React.useState(false);

    const history = useHistory();

    const useEffect = ((prevProps, prevState) => {
        if(prevState.loading && !loading && !!error) {
            switch(error.response.status) {
                case 500:
                    history.push("notFound");
                    break;
                case 404:
                    history.push("notFound");
                    break;
                case 403:
                    history.push("notFound");
                    break;
                case 401:
                    history.push("notFound");
                    break;
                case 400:
                    history.push("notFound");
                    break;
                default:
                    break;
            }
        }
    },[]);

    const sendData = async (modelData) => {
        setLoading(true);
        setError(null);
        setSucced(false);
        console.log(modelData);
        try {
            let data = await addPostPostRequestConfig(modelData);
            setLoading(false);
            setData(data);
            setSucced(true);
            
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);   
        }
    };
    
        return(
            <BaseLayout>
            {
                !loading ? (
                    <CreatePostComponent getData={sendData} />  
                ) : ( loading && succed 
                    ?
                    <p>Loading...</p> 
                    :
                    history.push("/home")
                )
            }

            {!succed && error &&  
                <p>Something went Wrong</p>                
            }

            </BaseLayout>
        );
    
}
