export default class Character {
  constructor(data) {
    this.name = data.name;
    this.hair_color = data.hair_color;
    this.eye_color = data.eye_color;
    this.gender = data.gender;
    this.url = data.url;
  }

  get Template() {
    return `<li>${this.name}</li>`;
  }
}
