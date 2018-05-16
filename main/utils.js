function generateElem(type, attributes, className){
  const elem = document.createElement(type)
  className = className || '';
  
  _.map(attributes, (val, key) => {
    if(key === 'href') elem.src = val;
    if(key === 'innerText') elem.innerText = val;
  });
  
  elem.className = className;

  return elem;
}

function generateLabels(item, elem){
  const priceLabel = generateElem('div',{innerText: '$ ' + item.priceRange.regular.low}, 'product-price');
  const productName = generateElem('div',{innerText: item.name}, 'product-name');

  elem.appendChild(priceLabel);
  elem.appendChild(productName);

  return elem;
}