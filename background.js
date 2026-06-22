checkTabs();

async function checkTabs() {
  const maxTabs = await getMaxTabs();

  const currentWindow = await chrome.windows.getCurrent();

  const tabs = await chrome.tabs.query({
    windowId: currentWindow.id
  });

  if (tabs.length > maxTabs) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icons_128.png",
      title: "Tab Limiter",
      message: `現在 ${tabs.length} タブ開いています`
    });
  }
}

async function getMaxTabs() {
  const managed = await chrome.storage.managed.get("maxTabs");

  if (managed.maxTabs !== undefined) {
    return managed.maxTabs;
  }

  const sync = await chrome.storage.sync.get("maxTabs");
  return sync.maxTabs ?? 5;
}

chrome.tabs.onCreated.addListener(async (tab) => {

  const maxTabs = await getMaxTabs();

  const tabs = await chrome.tabs.query({
    windowId: tab.windowId
  });

  if (tabs.length > maxTabs) {
    await chrome.tabs.remove(tab.id);
  }
});