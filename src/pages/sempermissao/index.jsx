import React from 'react'
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const SemPermissao = () => {
    return (
    <div>
        <Menu />
                <h1>Sem permissão</h1>
                <h2>Infelizmente você não tem permissão para acessar essa página</h2>
                <h3>Volte para a home ou faça seu login de administrador</h3>
        <Rodape />
    </div>
    )
}

export default SemPermissao;