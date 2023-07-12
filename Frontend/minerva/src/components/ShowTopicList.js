import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TopicCard from './TopicCard';

function ShowTopicList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/topics')
      .then((res) => {
        setTopics(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowTopicList');
      });
  }, []);

  const topicList =
    topics.length === 0
      ? 'No Topic found'
      : topics.map((topic, k) => <TopicCard topic={topic} key={k} />);

  return (
    <div className='ShowTopicList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Link
              to='/create-topic'
              className='btn btn-outline-warning float-left'
            >
              + Add New Topic
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{topicList}</div>
      </div>
    </div>
  );
}

export default ShowTopicList;