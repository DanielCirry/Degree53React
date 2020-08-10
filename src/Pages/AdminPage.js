import React from "react";
import { useHistory } from 'react-router-dom';
import BaseLayout from "../Components/BaseLayout";
import { getPostsGetRequestConfig } from "../globals/requestConfig";
import PostComponent from "../Components/PostComponent";

export default class AdminPage extends React.Component {
    state = {
        data: [],
        error: null,
        errorMessage: "",
        success: false,
        responseMessage: "",
        loading: false
    };

    componentDidUpdate = (prevProps, prevState) => {
        const {loading, error } = this.state;
        if(prevState.loading && !loading && !!error) {
            const history = useHistory();
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
    }
    
    componentDidMount = async () => {
        this.setState({loading: true, error: null});

        try {
            let data = await getPostsGetRequestConfig();
            this.setState({loading: false, data });
        } catch (error) {
            console.log(error);
            this.setState({ loading: false, error});
        }
    };

    render(){
        const { loading, error, data } = this.state;
        return(
            <BaseLayout>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    !error
                ? ( <>
                    <p>Numbers of posts: {data ? data.length : 0}</p>
                    <PostComponent data={data}/>
                    </>)
                    : <p>Something went Wrong</p>
                    )
                }
            </BaseLayout>
        );
    }
}

