import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateTopic = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [topic, setTopic] = useState({
    title: '',
    author: '',
    description: '',
    published_date: '',
  });

  const onChange = (e) => {
    setTopic({ ...topic, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/topics', topic)
      .then((res) => {
        setTopic({
          title: '',
          author: '',
          description: '',
          published_date: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateTopic!');
      });
  };

  return (
    <div className='CreateTopic'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show All Topics
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Topic</h1>
            <p className='lead text-center'>Create new topic</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Topic'
                  name='title'
                  className='form-control'
                  value={topic.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={topic.author}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this topic'
                  name='description'
                  className='form-control'
                  value={topic.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={topic.published_date}
                  onChange={onChange}
                />
              </div>
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTopic;