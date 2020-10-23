import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/img/coffe-icon.jpg'
import { Container, Form, Button} from 'react-bootstrap'
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import './index.css';

const Login = () => {
    let history = useHistory();
    //string email {get/ set;}
    //pegar valor = email - pegar valor
    //atribuir valor - setEmail
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        console.log(`${email} - ${senha}`)
    }

    const login = {
        email : email,
         senha : senha
    }

        fetch('http://localhost:5000/api/account/login', {
        method : 'POST',
        body : JSON.stringify(login),
        headers :{
            'content-type' : 'application/json'
            }
        })
        .then(response => {
            //Verifica a reposta da API
            if(response.ok){
                return response.json();
            }
            alert('Dados inválidos')
        })
        .then(data => {
            console.log(data);
            localStorage.setItem('token-nyous', data.token);
            history.push("/eventos");
        })
        .catch(err => console.error(err))

    return (
        <div>
            <Menu />
            <Container className='form-heigh'>
                <Form className='form-signin' onSubmit={event => logar(event)}>
                    <div className='text-center'>
                        <img src={logo} alt="Nyous Logo" style={{ width : '80px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados abaixo</small>
                    <hr />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Insira sua senha" value={senha} onChange={event => setSenha(event.target.value)} required />
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