import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowTopicDetails(props) {
    const [topic, setTopic] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/topics/${id}`)
      .then((res) => {
        setTopic(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowTopicDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/topics/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowTopicDetails_deleteClick');
      });
  };

  const TopicItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{topic.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{topic.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Published Date</td>
            <td>{topic.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Description</td>
            <td>{topic.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
 
  return (
    <div className='ShowTopicDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show All Topics
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>{topic.title}</h1>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{TopicItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(topic._id);
              }}
            >
              Delete Topic
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-topic/${topic._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Topic
            </Link> 
          </div>       
          <div  className='display-4 text-center'>Files (The presentation displayed using OnedDrive)</div>
        <iframe src="https://onedrive.live.com/embed?resid=87507A1C172B5E25%21110&authkey=!AFWW5maozMYF1Y0&em=2" width="1140px" height="788px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
       
        {/* ${topic.file_url} */}
         </div> 
          </div>
      </div>
  );
}

export default ShowTopicDetails;