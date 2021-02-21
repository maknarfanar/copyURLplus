
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "copyURL.js"});
   console.log("Copying");
});																																																																																																																																																																																																																																																																																	

