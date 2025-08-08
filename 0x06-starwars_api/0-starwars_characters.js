#!/usr/bin/node
const rp = require('request-promise');

const movieID = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

rp(apiUrl)
  .then(function (resp) {
    const characters = JSON.parse(resp).characters;
    async function getCharacter () {
      for (let i = 0; i < characters.length; i++) {
        const char = await rp(characters[i]);
        console.log(JSON.parse(char).name);
      }
    }
    getCharacter();
  })
  .catch(function (err) {
    console.error(err);
  });
