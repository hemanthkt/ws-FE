import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  const messageref = useRef();
  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = messageref.current.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <div>
      <input type="text" placeholder="MEssage..." ref={messageref} />
      <button onClick={sendMessage}></button>
    </div>
  );
}

export default App;
