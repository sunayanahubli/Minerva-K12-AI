import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTopic from '../CreateTopic';
import ShowTopicList from '../ShowTopicList';
import ShowTopicDetails from '../ShowTopicDetails';
import UpdateTopicInfo from '../UpdateTopicInfo';

let indexData = {
    pages: [
      {
        expData: {
          company: "Topics",
          details: [
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
          ]
        }
      },
      {
        expData: {
          company: "Programs",
          position: "Summer Workshop",
          period: "May 2023 - Aug 2023",
          details: [
            "Suspendisse potenti. Vestibulum aliquam luctus sem, at feugiat felis. Pellentesque dignissim lorem eu ipsum condimentum varius. ",
            "Nam vehicula pretium arcu. Nam venenatis ante et porta pellentesque."
          ]
        }
      },
      {
        expData: {
          company: "Contributers",
          details: [
            "Suspendisse potenti. Vestibulum aliquam luctus sem, at feugiat felis. Pellentesque dignissim lorem eu ipsum condimentum varius. ",
            "Nam vehicula pretium arcu. Nam venenatis ante et porta pellentesque."
          ]
          
        }
      },
      {
        expData: {
          company: "Resources",
          details: [
            "Suspendisse potenti. Vestibulum aliquam luctus sem, at feugiat felis. Pellentesque dignissim lorem eu ipsum condimentum varius. ",
            "Nam vehicula pretium arcu. Nam venenatis ante et porta pellentesque."
          ]
          
        }
      }
    ]
  };
  
  export default indexData;
  