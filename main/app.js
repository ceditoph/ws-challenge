(() => {
  fetch('http://localhost:3000/api').then(function(response) {
    response.json().then(body => {
      generateTable(body.groups)
    });
  })
  .catch(err => {
    console.warn('unable to retrieve data : ',err)
  });
})();