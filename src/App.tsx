import { TodoContainer } from "./components/todo-container/todo-container.component";
// import { AppContextProvider } from "./context/app-context";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Login } from "./components/login/login.component";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Register } from "./components/register/Register.component";
import { Container } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container maxWidth="sm">
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/todos" element={<TodoContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
