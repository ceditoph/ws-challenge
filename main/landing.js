function generateTable(list){
  const heroContainer = generateElem('div', {}, 'container');
    
  document.getElementById('root').appendChild(heroContainer)

  list.map(item => {
    let child = generateElem('img', item.hero, 'hero');
    generateLabels(item)
    // heroContainer.appendChild(generateLabels(child));
  })
}

function generateLabels(item){
// console.log(item)
  const priceLabel = generateElem('div',{innerText: item.priceRange.regular.low}, 'product-price');
  const productName = generateElem('div',{innerText: item.name}, 'product-name');
}

//              <div
//               key={group.id}
//               style={{
//                 position: 'relative'
//               }}
//             >
//               <img
//                 id={ind}
//                 className="hero"
//                 alt={group.hero.alt}
//                 height={group.hero.height}
//                 src={group.hero.href}
//                 meta={group.hero.meta}
//                 rel={group.hero.rel}
//                 size={group.hero.size}
//                 width={group.hero.width}
//                 onClick={e => this.displayLightBox(e)}
//               />
//               <div className="product-name">
//                 {group.name}
//               </div>
//               <div className="product-price">
//                 {`$${group.priceRange.regular.low} - $${group.priceRange.regular.high}`}
//               </div>
//             </div>