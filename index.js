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
  .then(data => {
      console.log(data)
      document.getElementById("test-txt").innerHTML = data
  })
  .catch(error => console.error('Error:', error));
