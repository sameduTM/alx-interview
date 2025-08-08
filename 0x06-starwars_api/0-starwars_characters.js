#!/usr/bin/node
const request = require('request');

const movieID = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(apiUrl, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const characters = JSON.parse(body).characters;

  function printCharacter (index) {
    if (index >= characters.length) return;
    request(characters[index], (err, res, body) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(JSON.parse(body).name);
      printCharacter(index + 1); // Process the next character
    });
  }

  printCharacter(0); // Start with the first character
});
