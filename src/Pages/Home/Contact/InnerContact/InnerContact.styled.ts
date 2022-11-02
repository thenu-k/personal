import styled from "styled-components";

export const InnerContact = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    background-color: inherit;

    & form{
        display: flex;
        flex-direction: column;
    }

    & form h1{
        width: 25%;
        height: 2em;
        font-weight: normal;
        font-size: 3em;
        font-family: 'Abril Fatface',cursive;
        background-color: #181818;
        border-radius: 10px;
    }
`