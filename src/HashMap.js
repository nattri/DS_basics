class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  /**
   * This method's implementation can vary for different type of algo
   * to generate hashKey.
   * This method will return an index in between 0 and length of array,
   * which is not random and will remain same if same key is provided.
   * @param {*} key
   */
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
  }

  /**
   * Returns all unique keys
   */
  keys() {
    const keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0])) {
            keyArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keyArr;
  }

  /**
   * Returns all unique values
   */
  values() {
    const valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

const init = () => {
  const hasMap = new HashMap(4);
  hasMap.set("hi", "my name is what?");
  hasMap.set("hello", "world");
  hasMap.set("blah blah", "keep doing that");
  hasMap.set("not here", "find somewhere else");
  hasMap.set("not here", "find somewhere else");
  console.log(hasMap);
  // console.log(hasMap.keys());
  // console.log(hasMap.values());
  // console.log(hasMap.get("not here"));
};

export default init;
