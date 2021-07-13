import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

class FavoriteContainer extends Component {

    handleCLick = (e) => {
        e.preventDefault()
        console.log("word added")
    }

    render() {
        return (
        <div>
            <Container>
            <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>adgfvsd</Card.Title>
                    <Card.Text>
                    <ul>
                        <li>adgf</li>
                        <li>dfgs</li>
                        <li>sdfb</li>
                    </ul>
                    </Card.Text>
                < Button variant="primary" onClick={this.handleCLick}>Add</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
        </div>
        )
    }
}

export default FavoriteContainer