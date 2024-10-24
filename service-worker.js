// add pinned tabs when window is opened
chrome.windows.onCreated.addListener(async (window) => {
  const tabs = await chrome.tabs.query({ windowId: window.id });
  console.log('my tabs: ', tabs);
  const storage = await chrome.storage.sync.get(['evergreenTabLinks']);
  if (storage.evergreenTabLinks.length && !window.incognito) {
    storage.evergreenTabLinks.forEach(
      (link) => {
        const tabExists = tabs.some((tab) => {
          // strip out http or https:// from link
          const urlMinusScheme = link.url.split('//')[1];
          console.log({ tabURL: tab.url, linkURL: urlMinusScheme });
          return tab.url.includes(urlMinusScheme);
        });
        console.log('exists? ', tabExists);
        if (!tabExists)
          chrome.tabs.create({
            url: link.url,
            pinned: true,
          });
      },
      ['normal']
    );
  }
});
