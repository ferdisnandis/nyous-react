import React from 'react'
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const NaoEncontrada = () => {
    return (
    <div>
        <Menu />
        <h1>404</h1>
        <h2>Infelizmente não conseguimos localizar a página solicitada</h2>
        <Rodape />
    </div>
    )
}

export default NaoEncontrada;