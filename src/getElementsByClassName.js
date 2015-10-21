// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//  This code is supposd to gather all elements of "classname" 
//  into an array

var getElementsByClassName = function(className){
  var docBody = document.body;
  var result = [];
  var walk = function (node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
      walk(node, func);
      node = node.nextSibling;
    }
  }
  walk(docBody, function(node) { 
    if (node.classList && node.classList.contains(className)) {
      result.push(node)
    }
  });
  return result;
};