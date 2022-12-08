import "./App.scss";
import AppMain from "./MainMenu/AppMain";
import Window from "./Authorization/AuthorizationWindow/Window";
import Entry from "./Authorization/EntryWindow/Entry";
import Modal from "./OpenModal/Modal";

function App() {
  return (
    <div className="app">
      <AppMain />
      <Window />
      <Entry />
      <Modal />
    </div>
  );
}

export default App;
