import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    text-align: center;
    margin: 0;
    color: white;
    background-color: black;

`
export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
`;
export const Button = styled(Link)`
    font-family: 'Roboto', sans-serif;    
    border: solid;
    padding: 0,5rem;
    background-color:black;
    text-align: center;
    font-size:2rem;
    color: white;
    border-radius: 9px;
    text-decoration: none;
    margin: 10px;
`;
