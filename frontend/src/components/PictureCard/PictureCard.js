import React, {useState} from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import PictureModal from "../PictureModal/PictureModal";

const PictureCard = props => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card className='mx-2 my-2'>
      <CardImg top style={{width: '300px', height: '200px'}} src={'http://localhost:8080/uploads/' + props.image} alt="Card image cap" />
      <CardBody>
        <CardTitle><b>{props.name}</b></CardTitle>
        <CardText>Posted by {props.author}</CardText>
        <Button onClick={toggle} color='warning'>Show full image</Button>
      </CardBody>
      <PictureModal
        isOpen={modal}
        toggle={toggle}
        name={props.name}
        image={'http://localhost:8080/uploads/' + props.image}
      />
    </Card>
  );
};

export default PictureCard;