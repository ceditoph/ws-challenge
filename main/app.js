(() => {
  fetch('http://localhost:3000/api')
  .then(response => {
    response.json().then(body => {
      generateTable(body.groups)
    });
  })
  .then(() => {
    document.addEventListener('click', eventHandler);
  })
  .catch(err => {
    console.warn('unable to retrieve data : ',err)
  });
})();