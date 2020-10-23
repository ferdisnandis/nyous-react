import React from 'react';
import logo from '../../assets/img/coffe-icon.jpg'
import { Container, Form, Button} from 'react-bootstrap'
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import './index.css';

const Cadastrar = () => {
    return (
        <div>
            <Menu />
            <Container className='form-heigh'>
                <Form className='form-signin' >
                    <div className='text-center'>
                        <img src={logo} alt="Nyous Logo" style={{ width : '80px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados abaixo</small>
                    <hr />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome completo </Form.Label>
                        <Form.Control type="text" placeholder="Insira seu nome completo" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="text" placeholder="Insira seu email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Insira sua senha" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/login' style={{marginTop : '30px'}}>Já tenho conta!</a>
            </Form>
            </Container>
            < Rodape />
        </div>
    )
}

export default Cadastrar;