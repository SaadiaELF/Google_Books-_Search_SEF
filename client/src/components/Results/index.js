import React from "react";
import BookDescription from "../BookDescription";
import BookHeader from "../BookHeader";
import BtnGroup from "../BtnGroup";
import Button from "../Button";
import Col from "../Col";
import Container from "../Container";
import Image from "../Image";
import Row from "../Row";

function Results(props) {
    return (
        <Container>
            <h3>Results</h3>
            <Container>
            <Row padding="" border="">
                <Col size="md-10">
                    <BookHeader/>
                </Col>
                <Col size="md-2">
                    <BtnGroup>
                        <Button type="secondary">View</Button>
                        <Button type="danger">Save</Button>
                    </BtnGroup>
                </Col>
            </Row>
            <Row padding="p-2" border="border">
                <Col size="md-2">
                    <Image/>
                </Col>
                <Col size="md-10">
                    <BookDescription/>
                </Col>
            </Row>
        </Container >
        </Container>
    );
}

export default Results;