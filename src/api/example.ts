async function example() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();
  return { data, response };
}

export default example;
