import { useState, useEffect } from 'preact/hooks';
import { LinkList } from './components/LinkList';
import { CleanedURL } from '../helpers';
import './app.css';

export function App() {
  const [links, setLinks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [linkExistsErrorVisible, setLinkExistsErrorVisible] = useState(false);

  // console.log('mylinks: ', links);

  // get value of input when submit button is clicked
  const inputHandler = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const submitForm = async (e) => {
    if (e.currentTarget.checkValidity()) {
      e.preventDefault();
      // double check url isn't already in array
      const duplicateExists = links.some((link) => {
        const cleanedLink = new CleanedURL(link.url).cleaned();
        const cleanedInput = new CleanedURL(inputValue).cleaned();

        return cleanedLink === cleanedInput;
      });
      if (duplicateExists) setLinkExistsErrorVisible(true);
      else {
        if (linkExistsErrorVisible) setLinkExistsErrorVisible(false);
        setLinks((currentLinks) => [
          ...currentLinks,
          {
            id: Date.now(),
            url: inputValue,
          },
        ]);
        setInputValue('');
      }
    }
  };

  // TODO: move items in list
  const updateLinksOrder = (oldIndex, newIndex) => {
    // console.log(oldIndex, newIndex);
    setLinks((currentLinks) => {
      const newLinks = [...currentLinks];
      [newLinks[oldIndex], newLinks[newIndex]] = [
        newLinks[newIndex],
        newLinks[oldIndex],
      ];
      return newLinks;
    });
  };

  // Remove item from list
  const removeLink = (id) => {
    setLinks((currentLinks) => currentLinks.filter((link) => link.id !== id));
  };

  // Clear list
  const clearList = async () => {
    await chrome.storage.sync.remove(['evergreenTabLinks']);
    setLinks([]);
  };

  // Load list when popup opens
  useEffect(() => {
    chrome.storage.sync.get(['evergreenTabLinks'], (result) => {
      if (result.evergreenTabLinks) {
        setLinks([...result.evergreenTabLinks]);
      }
    });
  }, []);

  // Update local storage when change is made to links state
  useEffect(() => {
    chrome.storage.sync.set({ evergreenTabLinks: [...links] }, (result) => {});
  }, [links]);

  return (
    <div>
      <section id="header">
        <h1>Evergreen Tabs</h1>
      </section>
      {linkExistsErrorVisible && (
        <div className="error">
          Link already exists. Please enter a different link.
        </div>
      )}
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
        {!links.length ? (
          <p>No tabs saved yet. Add one above!</p>
        ) : (
          <LinkList
            onDragLink={updateLinksOrder}
            links={links}
            onClear={clearList}
            onRemoveLink={removeLink}
          />
        )}
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
