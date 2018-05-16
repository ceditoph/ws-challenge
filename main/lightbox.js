
function generateLightbox(imageSet){
  const lightbox = generateElem('div', {}, 'product-lightbox');
  const lightboxContent = generateElem('div', {}, 'lightbox-content');
  const imageContainer = generateElem('div', {style: `height: ${imageSet[0].height}; width: ${imageSet[0].width}`}, 'product-image')
  const lightboxImage = generateElem('img', imageSet[0]);
  const controls = generateLightboxControls();
  const radioContainer = generateElem('div', {}, 'radio-container');
  const radioButtons = generateRadioButtons(imageSet);

  //put buttons in container
  radioButtons.map((radioButton, i) => {
    radioContainer.appendChild(radioButton);
  });

  //put controls into content node
  controls.map(control => {
    lightbox.appendChild(control);
  });
  
  //place image in container
  imageContainer.appendChild(lightboxImage);

  //place image and radio buttons into  node
  lightbox.appendChild(imageContainer);
  lightbox.appendChild(radioContainer);

  //place  node into lightbox
  // lightbox.appendChild(lightbox);

  //place lightbox on doc body
  document.body.appendChild(lightbox);
}

//     return this.state.isHidden ? null : (
//       <div id="lightbox" className="product-lightbox">
//         <div className="lightbox-content" 
//           style={{
//             height: (this.state.imageSet[this.state.currentImageIndex].height+20),
//             width: (this.state.imageSet[this.state.currentImageIndex].width+20)
//           }}
//         >
          // <div className="close controls" onClick={this.hideLightbox.bind(this)}>x</div>
          // <div className="prev controls" onClick={() => this.selectPrevImage()}>&lang;</div>
          // <div className="next controls" onClick={() => this.selectNextImage()}>&rang;</div>
//           <div className="product-image"
//             style={{
//               height: (this.state.imageSet[this.state.currentImageIndex].height),
//               width: (this.state.imageSet[this.state.currentImageIndex].width)
//             }}
//           >
//             <img
//               src={this.state.imageSet[this.state.currentImageIndex].href}
//             />
//           </div>
//           <div className="radio-container">
//           {
//             this.state.imageSet.map((image, ind) => {
//               return (
//                 <div
//                   key={image.rel+ind}
//                   id={ind}
//                   className={ind === Number(this.state.currentImageIndex) ? 'radio-filled' : 'radio-empty'}
//                   type="radio"
//                   onClick={e => this.setActiveImage(e.target.id)}
//                 />
//               )
//             })
//           }
//           </div>
//         </div>
//       </div>
//     )
//   }

//   setActiveImage(currentImageIndex){
//     this.setState({currentImageIndex})
//   }

//   selectPrevImage(){
//     const currentImage = document.getElementsByClassName('radio-filled')[0];

//     let prevImageIndex = currentImage.id - 1 >= 0 ? currentImage.id - 1 : this.state.imageSet.length - 1;

//     this.setActiveImage(prevImageIndex)
//   }

//   selectNextImage(){
//     const currentImage = document.getElementsByClassName('radio-filled')[0];

//     let nextImageIndex = Number(currentImage.id) + 1 < this.state.imageSet.length ? Number(currentImage.id) + 1 : 0;
//     console.log('next image index ',nextImageIndex)

//     this.setActiveImage(nextImageIndex)
//   }

//   hideLightbox(){
//     this.setState({isHidden: true})
//   }
// }
      
          
      
          