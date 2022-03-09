import React from "react";
import styled from "styled-components";

type ParticipantProps = {
  name: string;
  car: string;
};

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const FunctionalParticipant = ({ name, car }: ParticipantProps) => {
  return (
    <ListItem>
      <ProfileImage
        src={`https://ui-avatars.com/api/?name=${name}`}
        alt={name}
      />
      <p>
        <strong>{name}</strong> está convidado para festa e virá de {car}
      </p>
    </ListItem>
  );
};

export class ClassParticipant extends React.Component<ParticipantProps> {
  render() {
    const { name, car } = this.props;

    return (
      <ListItem>
        <ProfileImage
          src={`https://ui-avatars.com/api/?name=${name}`}
          alt={name}
        />
        <p>
          <strong>{name}</strong> está convidado para festa e virá de {car}
        </p>
      </ListItem>
    );
  }
}
