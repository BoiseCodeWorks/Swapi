import CharacterService from "../Services/CharacterService.js";
import store from "../store.js";

//Private
function _draw() {
  console.log(6);
  let characters = store.State.characters;
  let template = "";
  characters.forEach(c => {
    template += c.Template;
  });
  document.getElementById("characters").innerHTML = template;
}

//Public
export default class CharacterController {
  constructor() {
    store.subscribe("characters", _draw);
  }

  getApiCharacters() {
    console.log(1);
    CharacterService.getApiCharacters();
    console.log(3);
  }
}
