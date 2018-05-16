
function generateTable(list){
  const heroContainer = generateElem('div', {}, 'container');

  document.getElementById('root').appendChild(heroContainer)

  list.map(item => {
    const parent = generateElem('div');
    const child = generateElem('img', item.hero, 'hero');
    
    child.setAttribute('data-imageSet', JSON.stringify(item.images));
    parent.style.position = 'relative';
    parent.appendChild(child);
    generateImageLabels(item, parent);
    
    heroContainer.appendChild(parent);
  });
}

