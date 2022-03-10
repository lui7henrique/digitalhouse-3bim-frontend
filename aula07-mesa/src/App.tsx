import { useCallback, useEffect, useState } from "react";

import * as S from "./styles";

type Task = {
  id: number;
  text: string;
  isDone?: boolean;
};

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length,
      text: input,
      isDone: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInput("");
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleMarkTaskAsDone = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }

        return task;
      })
    );
  };

  const handleRemoveTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <S.Header>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.FormAddTask>
            <S.Input
              placeholder="Put your task here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <S.Button type="submit" disabled={!input.trim() || input === ""}>
              Add
            </S.Button>
          </S.FormAddTask>
          {!!tasks.length && (
            <S.RemoveAll onClick={() => handleDeleteAll()}>
              Remove all
            </S.RemoveAll>
          )}
        </S.Form>
      </S.Header>

      <S.TaskList>
        {tasks.map((task) => {
          return (
            <S.Task key={task.id}>
              <S.TaskTitle isDone={task.isDone}>{task.text}</S.TaskTitle>
              <S.Options>
                <S.Remove onClick={() => handleRemoveTask(task.id)}>
                  Remove task
                </S.Remove>
                <S.TaskStatus
                  checked={task.isDone}
                  onClick={() => handleMarkTaskAsDone(task.id)}
                />
              </S.Options>
            </S.Task>
          );
        })}
      </S.TaskList>
    </>
  );
}

export default App;
