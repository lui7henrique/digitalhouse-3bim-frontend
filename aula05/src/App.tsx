import { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button
        label={`Cont: ${count}`}
        onClick={() => setCount((count) => count + 1)}
        backgroundColor="gray"
        hasShadow
      />
    </Container>
  );
}

export default App;
