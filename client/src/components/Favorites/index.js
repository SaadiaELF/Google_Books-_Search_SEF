import React from "react";
import BookDescription from "../BookDescription";
import BookHeader from "../BookHeader";
import BtnGroup from "../BtnGroup";
import Button from "../Button";
import Col from "../Col";
import Container from "../Container";
import Image from "../Image";
import Row from "../Row";

function Favorites(props) {
    return (
        <Container>
            <h3>Saved Books</h3>
            <Container>
            <Row padding="" border="">
                <Col size="md-10">
                    <BookHeader>
                        title ={props.title}
                        subtitle ={props.subtitle}
                        authors ={props.authors}
                    </BookHeader>
                </Col>
                <Col size="md-2">
                    <BtnGroup>
                        <Button type="secondary">View</Button>
                        <Button type="danger">Delete</Button>
                    </BtnGroup>
                </Col>
            </Row>
            <Row padding="p-2" border="border">
                <Col size="md-2">
                    <Image image={props.image} title={props.title} />
                </Col>
                <Col size="md-10">
                    <BookDescription description={props.description} />
                </Col>
            </Row>
        </Container >
        </Container>
    );
}

export default Favorites;