import React, { useContext } from "react";
import BookDescription from "../BookDescription";
import BookHeader from "../BookHeader";
import BtnGroup from "../BtnGroup";
import Button from "../Button";
import Col from "../Col";
import Container from "../Container";
import Image from "../Image";
import Row from "../Row";
import BookContext from "../../utils/BookContext"

function Results() {
    const [books] = useContext(BookContext);
    return (
        <Container>
            <h3>Results</h3>

            {books.map(book => (
                <Container>
                    <Row padding="" border="">
                        <Col size="md-10">
                            <BookHeader
                                title={book.title}
                                subtitle={book.subtitle}
                                authors={book.authors}
                            />
                        </Col>
                        <Col size="md-2">
                            <BtnGroup>
                                <Button type="secondary" link={book.link}>View</Button>
                                <Button type="danger">Save</Button>
                            </BtnGroup>
                        </Col>
                    </Row>
                    <Row padding="p-2" border="border">
                        <Col size="md-2">
                            <Image
                                title={book.title}
                                image={book.image}
                            />
                        </Col>
                        <Col size="md-10">
                            <BookDescription
                                description={book.description}
                            />

                        </Col>
                    </Row>
                </Container >
            ))}
        </Container>
    );
}

export default Results;