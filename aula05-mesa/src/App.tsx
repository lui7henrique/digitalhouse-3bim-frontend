import styled from "styled-components";
import { Puppy } from "./components/Puppy";
import faker from "@faker-js/faker";

const Container = styled.li`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  max-width: 978px;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  const puppies = Array.from({ length: 1000 }).map((e) => {
    return {
      name: faker.animal.dog(),
      age: faker.random.number({ min: 1, max: 10 }),
      gender: !!faker.random.number({ min: 0, max: 1 }) ? "Male" : "Female",
      size: !!faker.random.number({ min: 0, max: 1 }) ? "Small" : "Large",
    };
  });

  return (
    <Container>
      <h1>🐶 Puppies: {puppies.length}</h1>
      {puppies.map((puppy) => {
        return <Puppy {...puppy} />;
      })}
    </Container>
  );
}

export default App;
