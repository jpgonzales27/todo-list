import { TodoContainer } from "./components/todo-container/todo-container.component";
import { AppContextProvider } from "./context/app-context";
import { Provider } from "react-redux";
import { store } from "./state/state";
// import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      {/* <AppContextProvider> */}
      <TodoContainer />
      {/* </AppContextProvider> */}
    </Provider>
  );
}

export default App;
