function* fetchJson(url) {
    const response = yield fetch(url);
    const json = yield response.json();
    return json;
  }
  
  async function runGenerator() {
    const gen = fetchJson('https://jsonplaceholder.typicode.com/todos/1');
    let result = null;
    while (true) {
      const { value, done } = gen.next(result);
      if (done) {
        return value;
      }
      result = await value;
    }
  }
  
  runGenerator().then((json) => {
    console.log(json);
  });