import { useCallback, useEffect, useState } from "react";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  background: #121212;
  padding: 1rem;
  color: #8b0000;
  font-size: 3rem;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const formatValue = useCallback((value: string) => {
    return value.padStart(2, "0");
  }, []);

  const [currentTime, setCurrentTime] = useState({
    hours: formatValue(String(new Date().getHours())),
    minutes: formatValue(String(new Date().getMinutes())),
    seconds: formatValue(String(new Date().getSeconds())),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime({
        hours: formatValue(String(new Date().getHours())),
        minutes: formatValue(String(new Date().getMinutes())),
        seconds: formatValue(String(new Date().getSeconds())),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content>
        {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
      </Content>
    </Container>
  );
}

export default App;
