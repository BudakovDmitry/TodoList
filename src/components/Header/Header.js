import styled from "styled-components";
import { useSelector } from "react-redux";

const HeaderContainer = styled.header`
    width: 100%;
    height: 30px;
    background-color: #d3d3d3;
    border: 1px solid #808080;
    align-items: center;
    padding: 5px;
`;

const Title = styled.h2`
    margin: 3px;
    font-size: 24px;
    color: #000000;
`;

function Header() {
    const todos = useSelector((state) => state.todos);

    return (
        <HeaderContainer>
            <Title>Todos ({todos.length})</Title>
        </HeaderContainer>
    );
}

export default Header;
