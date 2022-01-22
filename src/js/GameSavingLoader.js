import json from './parser';
import read from './reader';

class GameSavingLoader {
  static async load() {
    const data = await read(); // возвращается Promise!
    const value = await json(value); // возвращается Promise!
    return value;
  }
}

export default GameSavingLoader;
