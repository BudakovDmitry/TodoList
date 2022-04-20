import styled from "styled-components";
import Header from "../Header/Header";
import Main from "../Main/Main";

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 800px;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  );
}

export default App;
