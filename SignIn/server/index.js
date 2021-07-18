const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { urlencoded, json } = require('body-parser');
const { v4 } = require('uuid');
const axios = require('axios');
const app = express();

app.use(express.static('dist'));
app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));
app.use(json());

// 사용자의 프로필 정보를 반환해주는 API
app.get('/api/user/:id', (req, res) => {
  // 토큰이 없을 경우 에러 처리
  if (!req.haeders['token']) {
    return res.status(403).send({
      status: 'Error',
    });
  }

  axios
    .get('https://randomuser.me/api')
    .then((result) => {
      const [userProfile] = result.data.results;
      const { name, picture, phone, email, country } = userProfile;

      res.status(200).send({
        status: 'OK',
        result: {
          name,
          picture,
          phone,
          email,
          country,
        },
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: 'Error',
      });
    });
});

// 사용자가 작성한 글의 목록을 반환해주는 API
app.get('/api/user/:id/posts', (req, res) => {
  // 토큰이 없을 경우 에러 처리
  if (!req.headers['token']) {
    return res.status(403).send({
      status: 'Error',
    });
  }

  axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${req.params.id}`)
    .then((result) => {
      res.status(200).send({
        status: 'OK',
        results: result.data,
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: 'Error',
      });
    });
});

app.post('/api/authentication', (req, res) => {
  if (Math.floor(Math.random() * 10) % 2 === 0) {
    res.status(200).send({
      status: 'OK',
      result: {
        id: Math.floor(Math.random() * 10),
        token: v4(), // 클라이언트는 로그인 이후 다른 API를 호출할 때 항상 정보를 추가하여 전달
      },
    });
  } else {
    res.status(400).send({
      status: 'Error',
    });
  }
});

app.listen(8080, () => {
  console.log('ready to dumy signup server');
});
