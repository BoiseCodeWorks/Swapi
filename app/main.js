import CharacterController from "./Controllers/CharacterController.js";

class App {
  characterController = new CharacterController();
}

window["app"] = new App();
