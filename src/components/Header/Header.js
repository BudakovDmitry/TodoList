import styled from "styled-components";

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
  return (
    <HeaderContainer>
      <Title>Todos (5)</Title>
    </HeaderContainer>
  );
}

export default Header;
