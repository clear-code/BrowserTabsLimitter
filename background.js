const MAX_TABS = 5;

chrome.tabs.onCreated.addListener(async (tab) => {
  const tabs = await chrome.tabs.query({
    windowId: tab.windowId
  });

  if (tabs.length > MAX_TABS) {
    await chrome.tabs.remove(tab.id);
  }
});