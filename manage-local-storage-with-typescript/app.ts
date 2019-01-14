import * as localStorage from "./localStorage.js";

function* idMaker(): any {
  let index = 0;
  while(true)
    yield index++;
}
const gen = idMaker();
const generateUsername = (): string => `User00${gen.next().value}`
const generateSettingsKey = (): string => `Settings-00${gen.next().value}`

localStorage.createRecord(generateSettingsKey(), generateUsername());
localStorage.createRecord(generateSettingsKey(), generateUsername());

localStorage.clearAll();