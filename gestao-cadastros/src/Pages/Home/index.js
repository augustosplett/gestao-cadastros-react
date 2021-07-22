import * as S from './styled';

const Home = () => {
    return(
        <S.Container>
            <S.Button to='./clients'>Consulta Dados de Cliente</S.Button>
            <S.Button to='./products'>Inventário de Produtos</S.Button>
        </S.Container>
    )
}

export default Home;