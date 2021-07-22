import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    flexbox: flex;

`

export const Button = styled(Link)`
    border: solid;
    padding: 2rem;
    background-color:black;
    text-align: center;
    font-size:5rem;
    color: red;
    text-decoration: none;
`;