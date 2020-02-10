import store from "../store.js";
import Character from "../Models/Character.js";

// @ts-ignore
const _api = axios.create({
  baseURL: "https://swapi.co/api/",
  timeout: 15000
});

class CharacterService {
  getApiCharacters() {
    console.log(2);
    _api
      .get("people") //NOTE whatever is added in the get will be appended to the baseURL
      .then(res => {
        console.log(4);
        let characters = res.data.results.map(
          rawData => new Character(rawData)
        );
        store.commit("characters", characters);
        console.log(8);
      })
      .catch(error => {
        console.error(error);
      });
  }
  getApiStarships() {
    console.log(2);
    _api
      .get("starships") //NOTE whatever is added in the get will be appended to the baseURL
      .then(res => {
        console.log(4);

        // let question = new Question(res.data)

        let characters = res.data.results.map(
          rawData => new Character(rawData)
        );
        store.commit("characters", characters);
        console.log(8);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const service = new CharacterService();
export default service;
