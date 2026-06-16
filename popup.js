const button = document.getElementById("save");
button.addEventListener("click", async () => {
  const maxTabs = Number(document.getElementById("maxTabs").value);

  await chrome.storage.sync.set({
    maxTabs
  });

  setTimeout(() => {
    window.close();
  }, 1000);
});
