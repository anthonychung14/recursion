// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*
  This code is supposd to gather all elements of "classname" 
  into an array

  1. Why don't you first see how it works natively
    - Creates an array of HTML elements that have the same "class"
    - All the HTML formatting remains intact
    - One big array that can be set to another variable

  2. Then, create an understanding of what each of the pieces are.
    - Document.body => returns the whole thing. This is the DOM
    
    - Node.childNodes => returns a live collection of childNodes
      -Ordered collection that was children of current element.
      -I think you'll use this to return everything under the DIV class
    
    -Element.classList => returns live DOMToken. 
      -This will let you check for classlists
      -el.classList(contains("foo"))

  3. Use Twittler to play around with DOM elements and test them out

    -right now, I have figured out how to test that a class exists


  4. Figure out what the base case is supposed to be

    -how can I iteratively reduce

    if ()



  5. Base case = return all the elements


  6. Else, call the function again, but this time with a slight change

      So it looks like you add everything under the given class name UP
      until a </div>


  7. If there are none there at all, you should return some kind of alert

  */
var getElementsByClassName = function(className){
  // your code here
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