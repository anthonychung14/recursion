// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//what I don't know is how to typecast brackets or parens

var stringifyJSON = function(obj) {
  var str = ''
  //base case:
  if (typeof obj === 'string') {
    str += '"' + String(obj) + '"';
  }
  else if (typeof obj === 'boolean') {
    str += String(obj)
  }
  else if (typeof obj === 'number') {
    str += String(obj);
  }
  else if (obj === null) {
    str += String(obj);
  }
  else if (Array.isArray(obj)) {
    str += '[';
    for (var i = 0; i <obj.length; i++) {
      if (i<obj.length-1) 
          {str += stringifyJSON(obj[i]) + ","}
      else if (i === obj.length-1) 
          {str+= stringifyJSON(obj[i])}
    }
    str += "]"
  }
  else if (typeof obj === 'object') {
    str += "{"
    for (var p in obj) {
      if (p === "functions" || p === undefined) {
        str += "}"
        return str;
      }
      if (obj.hasOwnProperty(p)) { 
        if (p === Object.keys(obj)[Object.keys(obj).length-1]) {
          str += '"' + String(p) + '"' + ':' + stringifyJSON(obj[p])
        }
        else {
          str += '"' + String(p) + '"' +':' + stringifyJSON(obj[p]) + ",";}        
      }      
    } 
  str+= "}"
  }
  return str;
}





 
