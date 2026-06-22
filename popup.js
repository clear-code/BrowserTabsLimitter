const button = document.getElementById("save");
button.addEventListener("click", async () => {
  const maxTabs = Number(document.getElementById("maxTabs").value);

  await chrome.storage.sync.set({
    maxTabs
  });

  document.getElementById("message").textContent = "保存しました";

  setTimeout(() => {
    window.close();
  }, 1000);
});