import React, { useEffect, useState } from "react";
import * as S from '../../Styles/SharedStyles/styled';
import MaterialTable from "material-table";


const Produtos = () => {

    const [repository, setRepository] = useState([]);

    useEffect(() => {
        let repository = localStorage.getItem('ProductsDB');
        repository = JSON.parse(repository);
        setRepository(repository);
    }, []);

    useEffect(() => {
        const upDatedDB = JSON.stringify(repository);
        localStorage.setItem("ProductsDB",upDatedDB);
    },[repository]);

    const tableColumns = [
        {title: 'Cod Produto', field: 'id'},
        {title: 'Fabricande', field: 'manufacturer'},
        {title: 'Modelo', field: 'model'},
        {title: 'Preço', field: 'price'},
        {title: 'Qtde Disponível', field: 'avaliable_amount'}
    ];

    return(
        <S.Container>
            <S.Title>Base Produtos</S.Title>
            <S.Button to='/'>Voltar Para Painel de Gestão</S.Button>
            <MaterialTable 
                title="Base Produtos"
                data={repository}
                columns={tableColumns}
                options={{
                    search: false,
                    paging: false,
                    tableLayout: "auto"
                }}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject)=>{
                        const updatedRows = [...repository, newRow];
                        setRepository(updatedRows);
                        resolve();

                    })
                }}
            />
        </S.Container>
    )

}

export default Produtos;