/*global chrome*/

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(JSON.stringify(request));
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  );
  if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' });
});
