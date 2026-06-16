const button = document.getElementById("save");
button.addEventListener("click", async () => {
  const maxTabs = Number(document.getElementById("maxTabs").value);

  await chrome.storage.sync.set({
    maxTabs
  });

  alert("保存しました");
});