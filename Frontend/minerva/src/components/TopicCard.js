import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TopicCard = (props) => {
  const topic = props.topic;

  return (
    <div className='card-container'>
      <img
        src='https://picsum.photos/900/300'
        alt='Topics'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-topic/${topic._id}`}>{topic.title}</Link>
        </h2>
        <h3>{topic.author}</h3>
        <p>{topic.description}</p>
      </div>
    </div>
  );
};

export default TopicCard;