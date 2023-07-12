
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTopic from '../../CreateTopic';
import ShowTopicList from '../../ShowTopicList';
import ShowTopicDetails from '../../ShowTopicDetails';
import UpdateTopicInfo from '../../UpdateTopicInfo';
import ShowPresentation from '../../ShowPresentations';


const TopicsTab = () => {
    return (
        <Router>
          <div>
            <Routes>
              <Route exact path='/' element={<ShowTopicList />} />
              <Route path='/create-topic' element={<CreateTopic />} />
              <Route path='/edit-topic/:id' element={<UpdateTopicInfo />} />
              <Route path='/show-topic/:id' element={<ShowTopicDetails />} />
              {/* <Route path='/show-tab' element={<Tab/>} />
               */}
               
            </Routes>
          </div>
        </Router>
        
      );
    };
    
    export default TopicsTab;