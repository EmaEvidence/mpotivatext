chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  chrome.tabs.onCreated.addListener(function (...rest) {
    console.log(rest, '=-=-=-=-=created-=-=-=-=');
  });
  chrome.tabs.onUpdated.addListener(function (...rest) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      let url = tabs[0].url;
      console.log(url, '-=-=-=-=-=-url=-=-=-=-=-=');
  });
  })
});