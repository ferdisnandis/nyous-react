import React, { useEffect } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import { Card, Container, ResponsiveEmbed, Table} from 'react-bootstrap'
import {url} from '../../../utils/constants'

const CrudCategorias = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [categorias, setCategorias] = useState([]);
useEffect(() => {
    listar();
}, []);

const listar = () => {
    fetch(url + '/categorias')
        .then(response => response.json())
        .then(dados => {
            setCategorias(data.data)
            limparCampos();
        })
        .catch(err => console.error(err));
}

const editar = (event) => {
    event.preventDefault();

    fetch (`${url}/categoria/${event.target.value}`, {
        method : 'GET'
    })
    .then(response => response.json())
    .then(dados => {
        setId(dado.data.id);
        setNome(dado.data.nome);
        setUrlImagem(dado.data.urlImagem);
    })
}

const remover = (event) => {
    event.preventDefault();

    console.log('remover' + event.target.value);

    fetch(url + '/categorias/' + event.target.value,{
        method : 'DELETE',
        headers : {
            'authorization' : 'Bearer' + localStorage.getItem('token-nyous')
        }
    })
    .then(response => response.json())
    .then(dados => {
        alert('Categoria removida');

    listar();
    })
}

const uploadFile = (event) => {
    event.preventDefault();

    let formdate = new FormData();

    formData.append('arquivo', event.targe.value[0]);

    fetch(`${url}/upload`,{
        method : 'POST',
        body : formData
    })
    .then(response => ResponsiveEmbed.json())
    .then(data => {
        setUrlImagem(data.url)
    })
    .catch(err => console.log(err))
}

    const salvar = (event) => {
        event.preventDefault();

        const categoria = {
            nome : nome,
            urlImagem : irlImagem,
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === "" ? `${url}/categorias` : `${url}/categorias/${id}`);
    
        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(categoria),
            headers : {
                'context-type' : 'application/json',
                'authorization' : 'Bearer' + localStorage.getItem('token-nyous')
            }
            .then(response => ResponsiveEmbed.json())
            .then(dados => {
                alert('Categoria salva')

                listar();
            })
            .catch(err => console.log(err))
        })
    }

    const limparCampos = () => {
        setId(0);
        setNome('');
        setUrlImagem('');
    }
    return (
        <div>
            <Menu />
            <Container>
                <Titulo titulo="Categorias" chamada="Gerencie as suas categorias" />
                    <Card>
                        <Card.Body>
                            <Form onSubmit={ event => salvar(event)}>
                                <Form.Group controlId="formBasicNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Tecnologia, Inovação, Startups, ..."></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.File id="fileCategoria" label="Imagem da categoria" onChange={event => {uploadFile(event)}} />
                                    {urlImagem && <img src={urlimagem} style={{ width: '120px' }}/>}
                                </Form.Group>
                                <Form.Group>
                                    <Button type="submit">Salvar</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Imagem</th>
                                    <th>Nome</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                    <tbody>
                    {
            categorias.map((item, index) => {
            return(
                <tr>
                    <td><img stc={item.urlImagem} style={{ width : '120px'}}/></td>
                    <td>{item.nome}</td>
                    <td>
                        <Button variant="warning" value={item.id} onClick={event => editar(event)}>Editar</Button>
                        <Button variant="danger" value = {item.id} onClick={event => remover(event)} style={{ marginLeft : '40px' }}>Excluir</Button>
                    </td>
                </tr>
                )
            })
        }
    </tbody>
  </Table>

                
                </Container>           
            <Rodape />
        </div>
    )
}

export default CrudCategorias;