import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Carousel, Jumbotron, Button, Container, Row, Col, Card} from 'react-bootstrap';

const Home = () => {
    return (
    <div>
        <Menu />
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-180"
                src="https:www.ilhabela.com.br/wp-content/uploads/2016/01/eventos-em-ilhabela.jpg"
                alt="First slide"
            />
        </Carousel.Item>
    </Carousel>
        <Jumbotron className="text-center">
            <h1>Diversos eventos em um único local</h1>
            <p>
                Encontre eventos nos mais diversos segmentos de forma rápida 
            </p>
            <p>
                <Button variant="primary" href='/login'>Login</Button><Button  variant="success" href='/cadastrar'>Cadastrar</Button>
            </p>
        </Jumbotron>
        <Container>
        <Row className="text-center">
                <Col>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://www.lg.com.br/blog/wp-content/upload/2019/11/tecnologia-e-ser-humano.png" />
                        <Card.Body>
                            <Card.Title>Tecnologia</Card.Title>
                            <Card.Text>
                            Em “Amor Líquido”, Bauman afirma que é um amor “até o segundo aviso”, amparado na conceituação dos bens de consumo: manter enquanto trouxer satisfação.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://www.economiasc.com/wp-content/upload/2020/04/es" />
                        <Card.Body>
                            <Card.Title>Tecnologia</Card.Title>
                            <Card.Text>
                            Em “Amor Líquido”, Bauman afirma que é um amor “até o segundo aviso”, amparado na conceituação dos bens de consumo: manter enquanto trouxer satisfação.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://d3q93wnyp4lkf8.cloudfront.net/revista/post_image" />
                        <Card.Body>
                            <Card.Title>Tecnologia</Card.Title>
                            <Card.Text>
                            Em “Amor Líquido”, Bauman afirma que é um amor “até o segundo aviso”, amparado na conceituação dos bens de consumo: manter enquanto trouxer satisfação.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                
                    </Card>
                </Col>
            </Row>
        </Container>
        <Rodape />
    </div>
    )
}

export default Home;