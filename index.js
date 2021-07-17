const express = require('express');

const app = express();

function solve(a, b, c) {
  let discrim = (b ** 2) - (4 * a * c);
  if (discrim < 0) return { solutions: 0 };

  let s1 = (-b + Math.sqrt(discrim)) / (2 * a);
  let s2 = (-b - Math.sqrt(discrim)) / (2 * a);
  let isSame = (s1 == s2);
  let response = {
    discrim,
    solution: isSame ? s1 : null,
    s1: !isSame ? s1 : null,
    s2: !isSame ? s2 : null,
    solutions: isSame ? 1 : 2
  }
  return response;
}

app.get('/', (req, res) => {
  res.redirect('https://github.com/codeforfunfelix/QuadFormAPI');
});

app.get('/solve', (req, res) => {
  if(req.query.a && req.query.b && req.query.c) {
    res.json(solve(req.query.a, req.query.b, req.query.c));
  } else {
    res.status(400).send();
  }
});

app.listen(3000, () => {
  console.log('server started');
});
