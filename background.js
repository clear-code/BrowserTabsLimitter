chrome.tabs.onCreated.addListener(async (tab) => {

  const { maxTabs = 5 } = await chrome.storage.sync.get("maxTabs");

  const tabs = await chrome.tabs.query({
    windowId: tab.windowId
  });
  
  if (tabs.length > maxTabs) {
    await chrome.tabs.remove(tab.id);
  }
});