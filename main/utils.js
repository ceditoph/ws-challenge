function generateElem(type, attributes, className){
  const elem = document.createElement(type)
  
  _.map(attributes, (val, key) => {
    if(key === 'href') elem.src = val;
  });
  
  elem.className = className;

  return elem;
}