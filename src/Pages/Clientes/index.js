import React, { useEffect, useState } from "react";
import * as S from '../../Styles/SharedStyles/styled';
import MaterialTable from "material-table";

const Clientes = () => {

    const [repository, setRepository] = useState([]);

    useEffect(() => {
        let repository = localStorage.getItem('clientsDB');
        repository = JSON.parse(repository);
        setRepository(repository);
    }, []);

    const tableColumns = [
        {title: 'Cod Cliente', field: 'id'},
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
                    tableLayout: "auto"
                }}
            />
        </S.Container>
    )

}

export default Clientes;