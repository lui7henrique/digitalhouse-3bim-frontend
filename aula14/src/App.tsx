import { useEffect, useState } from "react";
import { api } from "./services/api";

import * as S from "./styles";

type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  isDone?: boolean;
};

function App() {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // implementar
    e.preventDefault();

    try {
      const newTask = {
        title: input,
        description: description,
        date: new Date().toISOString(),
        isDone: false,
      };

      const response = await api.post("/tasks", newTask);

      const newTasks = [...tasks, response.data];
      setTasks(newTasks);

      setInput("");
      setDescription("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteAll = async () => {
    tasks.forEach(async (task) => {
      await api.delete(`/tasks/${task.id}`);
    });

    setTasks([]);
  };

  const handleToggleTaskStatus = async (id: string) => {
    await api.patch(`/tasks/${id}`, {
      isDone: !tasks.find((task) => task.id === id)?.isDone,
    });

    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }

      return task;
    });

    setTasks(newTasks);
  };

  const handleRemoveTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);

    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/tasks");

      const tasks = response.data;
      setTasks(tasks);
    };

    fetchData();
  }, []);

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
            <S.Input
              placeholder="Put your task description here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            {
              <S.Button
                type="submit"
                disabled={!input.trim() && !description.trim()}
              >
                Add
              </S.Button>
            }
          </S.FormAddTask>

          {!!tasks.length && (
            <S.RemoveAll onClick={handleDeleteAll}>Remove all</S.RemoveAll>
          )}
        </S.Form>
      </S.Header>

      <S.TaskList>
        {tasks.map((task) => {
          return (
            <S.Task key={task.id}>
              <S.Options>
                <S.TaskStatus
                  checked={task.isDone}
                  onClick={() => handleToggleTaskStatus(task.id)}
                />
                <div>
                  <S.TaskTitle isDone={task.isDone}>{task.title}</S.TaskTitle>
                  <span>{task.description}</span>
                </div>
              </S.Options>

              <S.Remove onClick={() => handleRemoveTask(task.id)}>
                Remove task
              </S.Remove>
            </S.Task>
          );
        })}
      </S.TaskList>
    </>
  );
}

export default App;
