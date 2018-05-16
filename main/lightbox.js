
function generateLightbox(imageSet){
  //generate all elements for the lightbox\\
  const lightbox = generateElem('div', {}, 'product-lightbox');
  const imageContainer = generateElem('div', {style: `height: ${imageSet[0].height}; width: ${imageSet[0].width}`}, 'product-image')
  const lightboxImage = generateElem('img', imageSet[0]);
  const controlContainer = generateElem('div', {style: `height: ${imageSet[0].height}; width: ${imageSet[0].width}`}, 'control-container');
  const controls = generateLightboxControls();
  const radioContainer = generateElem('div', {}, 'radio-container');
  const radioButtons = generateRadioButtons(imageSet);

  //put buttons in container
  radioButtons.map((radioButton, i) => {
    radioContainer.appendChild(radioButton);
  });

  //put controls in container
  controls.map(control => {
    controlContainer.appendChild(control);
  });
  
  //place image in container
  imageContainer.appendChild(controlContainer);
  imageContainer.appendChild(lightboxImage);
  imageContainer.appendChild(radioContainer);

  //place image container and buttons inside the content node
  lightbox.appendChild(imageContainer);

  //place lightbox on doc body
  document.body.appendChild(lightbox);
}
