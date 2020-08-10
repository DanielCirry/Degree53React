import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

export default class CreatePostComponent extends React.Component {
    state = {
        title: "",
        content: "",
        error: null
    }

    views = this.views +1;

    handleSubmit = async () => {
        const {title, content} = this.state;
        this.setState({errorMessage: ""});

        if(title ==="" || content === "")
            return;

        this.setState({ loading: true, error: null})

        const data = {
            title: title,
            content: content,
            postDetail: {
                numbersOfViews: this.views,
                creationDate: new Date()
            }
        }        
     
        console.log(this.props);
        this.props.getData(data);
    }

    render(){
        return(            
            <Container>
                <TextTitle 
                required id="standard-required" 
                label="Title" 
                placeholder="Insert Title"  
                defaultValue={this.state.title}      
                onChange={e => this.setState({title: e.target.value})}
                 />
                <TextConent
                required id="standard-required" 
                label="Submit"
                multiline
                rows={30}
                placeholder="Start Typing..."
                defaultValue={this.state.content}      
                variant="outlined"
                onChange={e => this.setState({content: e.target.value})}
              />
               <AddButton variant="contained" color="primary" onClick={this.handleSubmit}>   
               Submit
                </AddButton>
            </Container>
                );
          }     
};

const TextTitle = styled(TextField)`
&&{margin-bottom:15px;}
`;

const TextConent = styled(TextField)`
&&{
    min-width: fill-available;
}
`;

const Container = styled.div`
display: flex;
margin: 5px;
flex-direction: row;
display: flex;
flex:1;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`;


const AddButton = styled(Button)`
display: flex;
place-self: flex-end;
flex:1;
&&{
    margin:5px;
}
`;