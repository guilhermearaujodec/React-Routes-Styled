import styled from "styled-components";

export const NavMenu = styled.nav`

    width: 100%;
    min-height: 8vh;
    padding: 20px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: darkblue;
        transition: 1s;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.3em;
    }

    a:hover {
        color: yellow;
    }

    span {
        color: #fff;
        font-size: 1.5em;
    }
`

export const FooterRodape = styled.footer`

    width: 100%;
    min-height: 5vh;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #422;

    p {
        color: #fff;
        text-align: center;
        font-size: 1.2em;
    }
`

export const MainGeral = styled.main`

    flex-grow: 1;           /* Joga o rodapé para baixo com o display flex */
    width: 100%;
    padding: 30px;

    h1 {
        text-align: center;
        color: darkred;
    }
`