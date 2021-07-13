import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

class WordCard extends Component {

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
                    <Card.Title>{this.props.word.meta.id}</Card.Title>
                    <Card.Text>
                    <ul>
                        <li>Defintiion: {this.props.word.shortdef}</li>
                        <li>Origin: {this.props.word.date}</li>
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
    
export default WordCard