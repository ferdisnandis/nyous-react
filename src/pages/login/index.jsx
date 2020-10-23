import React from 'react';
import logo from '../../assets/img/coffe-icon.jpg'
import { Container, Form, Button} from 'react-bootstrap'
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import './index.css';

const Login = () => {
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
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Insira sua senha" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/cadastrar' style={{marginTop : '30px'}}>Não tenho conta!</a>
            </Form>
            </Container>
            < Rodape />
        </div>
    )
}

export default Login;