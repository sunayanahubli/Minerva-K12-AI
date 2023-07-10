import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateTopic from './components/CreateTopic';
import ShowTopicList from './components/ShowTopicList';
import ShowTopicDetails from './components/ShowTopicDetails';
import UpdateTopicInfo from './components/UpdateTopicInfo';
import ShowPresentation from './components/ShowPresentations';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowTopicList />} />
          <Route path='/create-topic' element={<CreateTopic />} />
          <Route path='/edit-topic/:id' element={<UpdateTopicInfo />} />
          <Route path='/show-topic/:id' element={<ShowTopicDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;