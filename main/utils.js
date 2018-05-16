function eventHandler(e){
  e.preventDefault();
  
  if(e.target.className === 'hero'){
    const imageSet = JSON.parse(e.target.getAttribute('data-imageSet'));
    generateLightbox(imageSet);
  }
}

function generateElem(type, attributes, className){
  const elem = document.createElement(type)
  attributes = attributes || {};
  className = className || '';
  
  setAttributes(elem, attributes);
  elem.className = className;

  return elem;
}

function setAttributes(elem, attrs) {
  for(var key in attrs) {
    if(key === 'href') elem.setAttribute('src', attrs[key]);
    else if(key === 'textContent') elem.textContent = attrs[key];
    // else if(key === 'images') elem['data-images'] = attrs[key];
    else elem.setAttribute(key, attrs[key]);
  }
}

function generateImageLabels(item, elem){
  const priceLabel = generateElem('div',{textContent: '$ ' + item.priceRange.regular.low}, 'product-price');
  const productName = generateElem('div',{textContent: item.name}, 'product-name');

  elem.appendChild(priceLabel);
  elem.appendChild(productName);

  return elem;
}

function generateRadioButtons(imageSet, active){
  const buttons = [];
  active = active || 0;

  imageSet.map((image, i) => {
    const className = i === active ? 'radio-filled' : 'radio-empty';
    buttons.push(generateElem('div', {}, className));
  });

  console.log(buttons)
  return buttons;
}

function generateLightboxControls(){
  return [
    generateElem('div', {textContent: 'x'}, 'close controls'),
    generateElem('div', {textContent: '<'}, 'prev controls'),
    generateElem('div', {textContent: '>'}, 'next controls')
  ];
}

function closeLightbox(){
  const lightbox = document.getElementsByClassName('lightbox')[0];
  lightbox.close();
}