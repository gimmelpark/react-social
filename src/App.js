import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="App-content-wrapper">
          <Route
            path={'/profile'}
            render={ () => <Profile
              profilePage={ props.state.profilePage }
              dispatch={ props.dispatch }
            /> }
          />
          <Route
            path={'/messages'}
            render={ () => <Messages
              messagesPage={ props.state.messagesPage }
              dispatch={ props.dispatch }
            /> }
          />
          <Route
            path={'/news'}
            render={ () => <News /> }
          />
          <Route
            path={'/music'}
            render={ () => <Music /> }
          />
          <Route
            path={'/settings'}
            render={ () => <Settings /> }
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
