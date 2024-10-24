import './app.css';

export function App() {
  return (
    <div>
      <section id="header">
        <h1>Evergreen Tabs</h1>
      </section>
      <form className="form" onSubmit={submitForm}>
        <label for="link-input">
          <h2>Add new pinned tab</h2>
        </label>
        <div>
          <input
            name="link-input"
            id="link-input"
            type="url"
            placeholder="https://example.com"
            pattern="https?://.*"
            size={30}
            value={inputValue}
            onInput={inputHandler}
            required
          />
          <button className="add-item" type="submit">
            Add link
          </button>
        </div>
      </form>
      <hr />
      <section className="evergreen-tabs">
        <h2>My evergreen tabs</h2>
      </section>
      <section id="footer">
        <hr />
        <p>
          Created by{' '}
          <a href="https://github.com/rezziemaven" target="_blank">
            rezziemaven
          </a>
          . Source code on{' '}
          <a
            href="https://github.com/rezziemaven/evergreen-tabs"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}
