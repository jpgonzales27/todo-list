import React, { Dispatch, useReducer } from "react";
import { StateProps, initialState } from "../reducer/initial-state";
import { reducer } from "../reducer/reducer";
import { ItemActions } from "../reducer/actions";

type Props = {
  children: JSX.Element;
};

const AppContext = React.createContext<{
  state: StateProps;
  dispatch: Dispatch<ItemActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
