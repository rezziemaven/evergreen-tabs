import { CleanedURL } from './helpers.js';

// add pinned tabs when window is opened
chrome.windows.onCreated.addListener(async (window) => {
  // get list of pinned tabs
  const pinnedTabs = await chrome.tabs.query({
    windowId: window.id,
    pinned: true,
  });

  // console.log('my tabs: ', pinnedTabs);
  const storage = await chrome.storage.sync.get(['evergreenTabLinks']);

  if (storage.evergreenTabLinks.length && !window.incognito) {
    // filter pinned tabs to get tabs that are already saved
    const cleanedLinks = storage.evergreenTabLinks.map((link) =>
      new CleanedURL(link.url).cleaned()
    );
    const alreadyPinnedTabIds = pinnedTabs
      .filter((tab) => {
        const cleanedTabUrl = new CleanedURL(tab.url).cleaned();
        return cleanedLinks.includes(cleanedTabUrl);
      })
      .map((tab) => tab.id);

    // delete previously pinned saved tabs
    await chrome.tabs.remove(alreadyPinnedTabIds);

    // create new tabs using new order of list
    storage.evergreenTabLinks.forEach(
      (link) => {
        chrome.tabs.create({
          url: link.url,
          pinned: true,
        });
      },
      ['normal']
    );
  }
});
