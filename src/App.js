import MainPage from "./Pages/MainPage";
 import { Provider } from "react-redux";
 import { PersistGate } from 'redux-persist/integration/react';
 import { store, persistor } from "./Redux/store";
function App() {
  return (

    <div className="h-[100vh]">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <MainPage />
    </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
