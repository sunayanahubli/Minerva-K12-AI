import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateTopicInfo(props) {
  const [topic, setTopic] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/topics/${id}`)
      .then((res) => {
        setTopic({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateTopicInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setTopic({ ...topic, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: topic.title,
      author: topic.author,
      description: topic.description,
      published_date: topic.published_date,
    };

    axios
      .put(`http://localhost:8082/api/topics/${id}`, data)
      .then((res) => {
        navigate(`/show-topic/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateTopicInfo!');
      });
  };

  return (
    <div className='UpdateTopicInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show All Topics
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Topic</h1>
            <p className='lead text-center'>Update Topic's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
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
              <label htmlFor='author'>Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={topic.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='Description of the Topic'
                name='description'
                className='form-control'
                value={topic.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='published_date'>Published Date</label>
              <input
                type='text'
                placeholder='Published Date'
                name='published_date'
                className='form-control'
                value={topic.published_date}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Topic
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTopicInfo;