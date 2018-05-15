import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Lightbox from './lightbox'

class Home extends Component {
  constructor(){
    super(...arguments);

    this.state = {
      groups: [],
      thumbnails: []
    }
  }

  componentDidMount(){
    let parent = this;
    fetch('http://localhost:3000/api').then(function(response) {
      response.json().then(body => {
        parent.setState({groups: body.groups})
      });
    })
    .catch(err => {
      console.warn('unable to retrieve data : ',err)
    });
  }

  render(){
    return(
      <Fragment>
        <Lightbox isHidden={this.state.thumbnails.length ? false : true} imageSet={this.state.thumbnails}/>
        <div className="container">
          {
            this.state.groups.map((group, ind) => {
            return(
              <div
                key={group.id}
                style={{
                  position: 'relative'
                }}
              >
                <img
                  id={ind}
                  className="hero"
                  alt={group.hero.alt}
                  height={group.hero.height}
                  src={group.hero.href}
                  meta={group.hero.meta}
                  rel={group.hero.rel}
                  size={group.hero.size}
                  width={group.hero.width}
                  onClick={e => this.displayLightBox(e)}
                />
                <div className="product-name">
                  {group.name}
                </div>
                <div className="product-price">
                  {`$${group.priceRange.regular.low} - $${group.priceRange.regular.high}`}
                </div>
              </div>
            )
            })
          }
        </div>
      </Fragment>
    )
  }

  displayLightBox(e){
    this.setState({thumbnails: this.state.groups[e.target.id].images})
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
