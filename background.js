const defaultFilters = [
    { id: 1, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.doubleclick.net/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 2, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.googlesyndication.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 3, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.googletagservices.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 4, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.googleadservices.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 5, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.google-analytics.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 6, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.googleadservices.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 7, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.zedo.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 8, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.adbrite.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 9, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.adbureau.net/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 10, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.carbonads.net/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 11, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.cdn.carbonads.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 12, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.cdn.carbonads.net/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 13, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.cdn.doubleclick.net/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 14, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.cdn.googletagservices.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 15, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.cdn.googleadservices.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 16, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.cdn.zedo.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 17, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.adnxs.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 18, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.adsafeprotected.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 19, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.adroll.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 20, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.advertising.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 21, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.contextweb.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 22, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.dotomi.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 23, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.facebook.net/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 24, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.media.net/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 25, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.mookie1.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 26, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.openx.net/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 27, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.pubmatic.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 28, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.quantserve.com/*", resourceTypes: ["main_frame", "sub_frame"] } },
    { id: 29, priority: 1, action: { type: "block" }, condition: { urlFilter: "*://*.amazon.in/*", resourceTypes: ["main_frame", "sub_frame"] } },
  ];
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: defaultFilters,
      removeRuleIds: defaultFilters.map(rule => rule.id)
    }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else {
        console.log('Default filters added successfully');
      }
    });
  });
  