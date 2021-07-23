import * as S from '../../Styles/SharedStyles/styled';

const Home = () => {
    return(
        <S.Container>
            <S.Title>Painel de Gestão</S.Title>
            <S.Button to='./clients'>Consulta Dados de Cliente</S.Button>
            <S.Button to='./products'>Inventário de Produtos</S.Button>
        </S.Container>
    )
}

export default Home;