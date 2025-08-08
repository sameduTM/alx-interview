#!/usr/bin/node
const request = require('request');

const movieID = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(apiUrl, (err, response, body) => {
  if (err) {
    console.error(err);
  }
  const characters = JSON.parse(body).characters;
  characters.forEach((char) => {
    request(char, (err, response, body) => {
      if (err) {
        console.error(err);
      }
      console.log(JSON.parse(body).name);
    });
  });
});
