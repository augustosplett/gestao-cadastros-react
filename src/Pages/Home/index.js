import React from 'react';
import axios from 'axios';
import * as S from '../../Styles/SharedStyles/styled';

const Home = () => {

    const handleLoadClientsData = () => {
        axios.get(`customer_data.json`).then(response => {
            const clientsData = JSON.stringify(response.data);
            localStorage.setItem("clientsDB",clientsData )
        })
    };

    const handleLoadProductsData = () => {
        axios.get(`products_data.json`).then(response => {
            const clientsData = JSON.stringify(response.data);
            localStorage.setItem("ProductsDB",clientsData )
        })
    };

    return(
        <S.Container>
            {handleLoadClientsData()}
            {handleLoadProductsData()}
            <S.Title>Painel de Gestão</S.Title>
            <S.Button to='./clients'>Consulta Dados de Cliente</S.Button>
            <S.Button to='./products'>Inventário de Produtos</S.Button>
        </S.Container>
    )
}

export default Home;