import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

// Adjust the path

function App() {
  return (
    <div className="App">
      <ChatProvider>
        {/* Your Routes Here */}
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/chats" Component={ChatPage} />
        </Routes>
      </ChatProvider>
    </div>
  );
}

export default App;
