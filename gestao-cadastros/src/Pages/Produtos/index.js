import React from 'react';
import * as S from '../../Styles/SharedStyles/styled';

const Produtos = () => {
    return(
        <S.Container>
            <S.Title>Base Produtos</S.Title>
            <S.Button to='/'>Voltar Para Painel de Gestão</S.Button>
        </S.Container>
    )

}

export default Produtos;