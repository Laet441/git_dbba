// Require modules
require("dotenv").config();

// Custom functions
fetch('https://abcde-f2d4.restdb.io/rest/db', {
    method: "GET",
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': process.env.API_KEY
    }
  }
)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


// 
// console.log(process.env.API_KEY);
// d75c9c26159a031dc3541fa74b360dd536406