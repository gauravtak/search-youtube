// Runs when the extension is installed/updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchOnYoutube",
    title: "Search On Youtube ",
    contexts: ["selection"], // show on any right-click context
  });
});

// Handle clicks on custom menu items
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchOnYoutube") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const selection = window.getSelection().toString();
        const url = `https://www.youtube.com/results?search_query=${selection}`;
        window.open(url, "_blank");
      },
    });
  }
});
