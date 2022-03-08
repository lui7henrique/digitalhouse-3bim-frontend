import styled from "styled-components";

type PuppyProps = {
  name: string;
  age: number;
  gender: string;
  size: string;
};

export const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #242424;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SimpleInfos = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Divisor = styled.div`
  width: 1px;
  height: 25px;
  background-color: #636363;
  border-radius: 50%;
`;

export const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const Puppy = (props: PuppyProps) => {
  const { name, age, gender, size } = props;

  return (
    <Container>
      <ProfileImage src={`https://ui-avatars.com/api/?name=${name}`} />
      <Infos>
        <h2>Name: {name}</h2>

        <SimpleInfos>
          <p>Age: {age}</p>
          <Divisor />

          <p>Gender: {gender === "Female" ? "Female" : "Male"}</p>
          <Divisor />

          <p>Size: {size}</p>
        </SimpleInfos>
      </Infos>
    </Container>
  );
};
