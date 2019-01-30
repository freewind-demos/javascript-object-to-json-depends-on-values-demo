const obj1 = {
  response: {
    type: "text/html",
    body: "<div>very long content</div>"
  }
}

const obj2 = {
  response: {
    type: "application/json",
    body: {
      "aaa": "1111111111111111111111111",
      "bbb": "2222222222222222222222222"
    }
  }
}

function show(obj) {
  const json = JSON.stringify(obj, (key, value) => {
    if (key === 'response' && value.type === 'application/json') {
      return JSON.stringify(value, null, 4);
    } else if (typeof value === 'string') {
      return value.length > 10 ? value.slice(0, 10) + "..." : value;
    } else {
      return value
    }
  }, 4)
  return json;
}

console.log(show(obj1));
console.log(show(obj2));
