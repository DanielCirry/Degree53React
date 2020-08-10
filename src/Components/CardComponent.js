import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card'
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import ModalBox from './PostComponent';

export default class CardComponent extends React.Component{
state = {
    open:false
};
    componentDidMount() {
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

         render() {
    return(
        <Container>
            <ModalBox/>

        {this.props.data && this.props.data.map( p => (
            <CardContainer>
                <CardContent>
                    <Typography variant='h5'>{p.title}</Typography>
                    <Typography>{p.content}</Typography>
                    <CardActions>
                        <AddButton variant="contained" color="primary"
                        component={ Link } to="/postdetail" 
                        >
                            Details
                        </AddButton>
                    </CardActions>
                </CardContent>
            </CardContainer>
        ))}
        </Container>
    );
}}

const Container = styled.div`
display: flex;
background-color:red;
margin: 5px;
flex-direction: row;
`;

const CardContainer = styled(Card)`
margin: 5px;
flex:1;
`;

const FloatingButton = styled(Fab)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
place-self: center;

&&
{
    margin: 40px;
}`;

const AddButton = styled(Button)`
margin: 3px;
display: flex;
flex:1;
`;

const Typograph = styled.text`
  font-weight: bold;
  margin-bottom: 50px;
`;
