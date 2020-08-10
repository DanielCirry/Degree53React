import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from "styled-components";
import Card from '@material-ui/core/Card'
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function PostComponent(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [numberOfViews, setViews] = React.useState(0);

  const  handleOpen = (numberOfViews) => {
    setOpen(true);
    setViews(numberOfViews);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const history = useHistory();           
  const handleButtonClick = () => {
    history.push("/postcreation")
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      Numbers of Views {numberOfViews}
    </div>
  );

  return (
    <Container>
        <FloatingButton 
        color="primary"
         aria-label="add"
         onClick={handleButtonClick}>
        <AddIcon />
      </FloatingButton>
      {props.data && props.data.map( p => (
            <CardContainer>
                <CardContent>
                    <Typography variant='h5'>{p.title}</Typography>
                    <Typography>{p.content.slice(0,8)}...</Typography>
                    <CardActions>
                        <AddButton variant="contained" color="primary"
                        onClick={() =>handleOpen(p.postDetail.numberOfViews)}
                        >
                            Details
                        </AddButton>
                    </CardActions>
                </CardContent>
            </CardContainer>
        ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Container>
  );
}

const FloatingButton = styled(Fab)`

&&
{
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-self: center;
}`;


const Container = styled.div`
display: flex;
flex-direction: column;
`;

const CardContainer = styled(Card)`
margin: 5px;

&&
{
  width: 200px;
}
`;

const AddButton = styled(Button)`
display: flex;
flex:1;
`;