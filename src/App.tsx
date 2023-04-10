import { TodoContainer } from "./components/todo-container/todo-container.component";
import { AppContextProvider } from "./context/app-context";

function App() {
  return (
    <AppContextProvider>
      <TodoContainer />
    </AppContextProvider>
  );
}

export default App;
