browser.contextMenus.create({
  id: 'google_search',
  title: '"%s" on google',
  contexts: ['selection'],
  onclick: onRequest
});

function onRequest(info, tab) {
  var u = 'https://www.google.com/#q=' + info.selectionText;
  browser.tabs.create({url: u});
}

