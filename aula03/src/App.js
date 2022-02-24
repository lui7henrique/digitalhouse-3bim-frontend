import { useEffect, useState } from "react";

const SECOND = 1000; // 1 second in milliseconds

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState({
    hour: String(new Date().getHours()).padStart(2, "0"),
    seconds: String(new Date().getSeconds()).padStart(2, "0"),
    minutes: String(new Date().getMinutes()).padStart(2, "0"),
  });

  useEffect(() => {
    setTimeout(() => {
      setTime({
        hour: String(new Date().getHours()).padStart(2, "0"),
        seconds: String(new Date().getSeconds()).padStart(2, "0"),
        minutes: String(new Date().getMinutes()).padStart(2, "0"),
      });
    }, SECOND);
  }, [time]);

  return (
    <div>
      <h1>
        Horário atual: {time.hour}:{time.minutes}:{time.seconds}
      </h1>
      <h3>This a Create React App! 👋</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
    </div>
  );
}

export default App;
