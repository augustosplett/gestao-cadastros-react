import React, { useEffect, useState } from "react";
import * as S from '../../Styles/SharedStyles/styled';
import MaterialTable from "material-table";


const Produtos = () => {

    function guidGenerator() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
      //https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid/2117523#2117523

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
        {title: 'Cod Produto', field: 'id', editable: "never"},
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
                    tableLayout: "auto",
                    addRowPosition: "first",
                    actionsColumnIndex: -1
                }}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject)=>{
                        const updatedRows = [...repository, {id:guidGenerator(),...newRow}];
                        setRepository(updatedRows);
                        resolve();

                    }),
                    onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                        const index = selectedRow.tableData.id;
                        const updatedRows = [...repository];
                        updatedRows.splice(index, 1);
                        setRepository(updatedRows);
                        resolve();
                    }),
                    onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                        const index = oldRow.tableData.id;
                        const updatedRows = [...repository];
                        updatedRows[index] = updatedRow;
                        setRepository(updatedRows);
                        resolve();

                    })
                }}
            />
        </S.Container>
    )

}

export default Produtos;