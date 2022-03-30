import styled from "styled-components";

export const Header = styled.header`
  height: 300px;
  width: 100vw;
  background: #009e54;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 978px;
  width: 100%;
  margin: 0 auto;
`;

export const FormAddTask = styled.div`
  align-items: center;
  justify-items: center;
  display: flex;
`;

export const Input = styled.input`
  background: white;
  width: 70%;
  border: none;
  outline: none;
  height: 2rem;
  padding: 0 1rem;
`;

export const Button = styled.button`
  width: 30%;
  height: 2rem;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const RemoveAll = styled.sub`
  font-size: 0.8rem;
  color: #fff;
  opacity: 0.5;
  cursor: pointer;
`;

export const TaskList = styled.div`
  max-width: 978px;
  margin: 0 auto;
  width: 100%;

  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Task = styled.div`
  background: #242424;
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskTitle = styled.p<{
  isDone?: boolean;
}>`
  font-size: 1rem;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  margin: 0;
  padding: 0;
`;

export const TaskStatus = styled.input.attrs({ type: "checkbox" })``;

export const Remove = styled.p`
  font-size: 0.8rem;
  opacity: 0.5;
  cursor: pointer;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.8rem;
      opacity: 0.5;
    }
  }
`;
