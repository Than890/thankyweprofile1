import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/bg.JPEG)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Than Kywe</h1>
                          <p><a className="btn btn-info btn-learn" href="https://drive.google.com/open?id=1NH3wl9vDDF4lPfx4LPCUeeXWL6p7F6Iy" target="_blank" rel="noopener noreferrer">VIEW CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
             </ul>
          </div>
        </section>
      </div>
    )
  }
}
