import fakeFetch from './fake-fetch.js';

let joinString; // undefined

// case 1 example is faster than youtube
//    1. joinString = example
//    2. youtube checks and goes to defined case
//    3. updates joinString to  example + youtube
//    4 print it

// case 2 youtube is faster than example
//    1. joinString = youtube
//    2. example checks and go to defined case
//    3. updates joinString to youtube + example
//    4. print it

fakeFetch('https://youtube.com')
  .then((response) => {
    // if youtube is after example

    if (joinString !== undefined /* if joinString is defined*/) {
      // joinString = example
      joinString = response.html + joinString; // youtube + example
      console.log(joinString);
    } else {
      /* if joinString is not defined*/
      joinString = response.html;
    }
  })
  .catch((error) => console.log(error));

fakeFetch('https://example.com')
  .then((response) => {
    // if example is after youtube

    if (joinString !== undefined /*  joinString is defined*/) {
      // joinString = youtube
      joinString += response.html; // youtube + example
      console.log(joinString);
    } else {
      /* if joinString is not defined*/
      joinString = response.html;
    }
  })
  .catch((error) => console.log(error));

// <html><h1>https://youtube.com</h1></html> <html><h1>https://example.com</h1></html>
