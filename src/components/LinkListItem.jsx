:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  --text: #47403e;
  --background: #fbfbfe;
  --primary: #7fbc15;
  --secondary: #edfbd0;
  --accent: #ffd23d;

  color-scheme: light dark;
  color: var(--text);
  background-color: var(--background);
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  --text: #47403e;
  --background: #fbfbfe;
  --primary: #7fbc15;
  --secondary: #edfbd0;
  --accent: #ffd23d;
  color: var(--text);
  background-color: var(--background);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  li {
    background-color: var(--primary);
  }

  .error {
    background-color: lightgoldenrodyellow;
    color: darkgoldenrod;
    border-color: lightgoldenrodyellow;
  }
body {
  width: 20rem;
  /* margin: 0; */
  /* padding: 0; */
}
h1 {
  font-size: xx-large;
}

h2 {
  font-size: large;
}
ul {
  display: block;
  list-style-type: none;
  margin: 2rem 0;
  padding: 0;
  flex: 1;
  width: 100%;
}

.evergreen-tabs {
  padding: 2rem 0;
}

.evergreen-tabs h2 {
  margin-top: 0;
}

li {
  display: flex;
  padding: 0.5rem;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}
li button {
  width: 1rem;
  height: 1rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
li span.link {
  font-weight: bold;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}
form div {
  display: flex;
  justify-content: space-between;
}

input {
  margin-right: 0.1rem;
  padding: 0.4rem;
}
