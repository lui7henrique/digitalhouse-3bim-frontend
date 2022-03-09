import faker from "@faker-js/faker";
import {
  FunctionalParticipant,
  ClassParticipant,
  ListItem,
} from "./components/Participant";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1180px;
  margin: 0 auto;
`;

export const List = styled.ul`
  width: 100%;
`;

export const ListTitle = styled.h2``;

function App() {
  const participants = Array.from({ length: 20 }).map((_) => {
    return {
      name: faker.name.findName(),
      car: faker.vehicle.vehicle(),
    };
  });

  return (
    <>
      <Grid>
        <List>
          <ListTitle>Convidados</ListTitle>
          {participants.map((participant) => {
            return (
              <ListItem>
                <p>{participant.name}</p>
              </ListItem>
            );
          })}
        </List>
        <List>
          <ListTitle>Carros</ListTitle>
          {participants.map((participant) => {
            return (
              <ListItem>
                <p>{participant.car}</p>
              </ListItem>
            );
          })}
        </List>
      </Grid>

      <Grid>
        <List>
          <ListTitle>Functional Components</ListTitle>
          {participants.map((participant) => {
            return <FunctionalParticipant {...participant} />;
          })}
        </List>

        <List>
          <ListTitle>Class Components</ListTitle>
          {participants.map((participant) => {
            return <ClassParticipant {...participant} />;
          })}
        </List>
      </Grid>
    </>
  );
}

export default App;
