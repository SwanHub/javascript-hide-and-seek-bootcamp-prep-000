function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var newRankedList = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < newRankedList.length; i++) {
    newRankedList[i].textContent = parseInt(newRankedList[i], 10) + n;
  }
  return newRankedList;
}

function deepestChild() {
  var x = '#grand-node'
  while (document.querySelector(x).children.length > 0) {
    x += " div";
  }
  return document.querySelector(x);
}
