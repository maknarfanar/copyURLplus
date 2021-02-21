
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "copyURL.js"});
   console.log("Copying");
});																																																																																																																																																																																																																																																																																	


	



/*
// create element for pasting
const textEl = document.createElement('textarea');
document.body.appendChild(textEl);

var prevPasted = '';
setInterval(function () {
    // paste text from clipboard to focused textarea
    textEl.focus();
    textEl.value = '';
    document.execCommand('paste');
    const pastedText = textEl.value;

    // simple cache check
    if (pastedText !== prevPasted) {
        prevPasted = pastedText;

        if (pastedText.match(/https?:/)) { // you can improve you URL scheme

            // get the current tab
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                var tab = tabs[0];

                // check if current tab has the same URL
                if (tab.url === pastedText) {
                    console.log('Omnibox URL:', pastedText);
                }
            });
        }
    }
}, 500);*/