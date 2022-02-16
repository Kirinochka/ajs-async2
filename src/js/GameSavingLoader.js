import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static async load() {
    const data = await read(); // возвращается Promise!
    const value = await json(data); // возвращается Promise!
    return new Promise((resolve) => resolve(new GameSaving(value)))
      .then((res) => res.save);
  }
}

export default GameSavingLoader;
