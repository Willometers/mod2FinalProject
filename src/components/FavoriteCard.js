import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

class FavoriteCard extends Component {

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
                    <Card.Title>Pace Holder</Card.Title>
                    <Card.Text>
                    <ul>
                        <li>Pace Holder</li>
                        <li>Pace Holder</li>
                    </ul>
                    </Card.Text>
                < Button variant="primary" onClick={this.handleCLick}>Delete</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
        </div>
        )
    }
}

export default FavoriteCard