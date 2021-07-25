import React, { useEffect, useState } from "react";
import * as S from '../../Styles/SharedStyles/styled';
import MaterialTable from "material-table";

const Clientes = () => {

    function guidGenerator() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
      //https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid/2117523#2117523

    const [repository, setRepository] = useState([]);

    useEffect(() => {
        let repository = localStorage.getItem('clientsDB');
        repository = JSON.parse(repository);
        setRepository(repository);
    }, []);

    useEffect(() => {
        const upDatedDB = JSON.stringify(repository);
        localStorage.setItem("clientsDB",upDatedDB);
    },[repository]);

    const tableColumns = [
        {title: 'Cod Cliente', field: 'id', editable: "never"},
        {title: 'Nome', field: 'customer_name'},
        {title: 'Phone', field: 'phone_number'},
        {title: 'e-mail', field: 'email'},
        {title: 'Endereço', field: 'adress'}
    ];

    return(
        <S.Container>
            <S.Title>Base Clientes</S.Title>
            <S.Button to='/'>Voltar Para Painel de Gestão</S.Button>
            <MaterialTable 
                title="Base Clientes"
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
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
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

export default Clientes;