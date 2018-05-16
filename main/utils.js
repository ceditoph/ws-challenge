function eventHandler(e){
  e.preventDefault();
  
  switch(e.target.className){
    case 'hero':
      const imageSet = JSON.parse(e.target.getAttribute('data-imageSet'));
      generateLightbox(imageSet);
      break;

    case 'close controls':
      closeLightbox();
      break;

    case 'prev controls':
      cycleActiveImages('left');
      break;

    case 'next controls':
      cycleActiveImages('right');
      break;

    case 'radio-empty':
      selectActiveImage(e.target)
      break;
    default:
    break;
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
    buttons.push(generateElem('div', {'data-image': JSON.stringify(image)}, className));
  });

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
  const lightbox = document.getElementsByClassName('product-lightbox')[0];
  lightbox.remove();
}

function selectActiveImage(button){
  const image = button.getAttribute('data-image')

  document.getElementsByClassName('radio-filled')[0].className = 'radio-empty';
  button.className = 'radio-filled';
  document.querySelector('.product-image > img').replaceWith(generateElem('img', JSON.parse(image)))
}

function cycleActiveImages(direction){
  let nextButton;

  switch(direction){
    case 'left':
      if(document.querySelector('.radio-filled').previousSibling) nextButton = document.querySelector('.radio-filled').previousSibling;
      else nextButton = document.querySelectorAll('.radio-empty')[document.querySelectorAll('.radio-empty').length-1];
      break;

    case 'right':
      if(document.querySelector('.radio-filled').nextSibling) nextButton = document.querySelector('.radio-filled').nextSibling;
      else nextButton = document.querySelector('.radio-empty');
  }

  selectActiveImage(nextButton)
}