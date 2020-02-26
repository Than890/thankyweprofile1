import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am graduated from University of Computer Studies(Meiktila) with CS as my major.I love exploring new technologies and interest in Coding.</p>
                    <p>I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Things I've done. . . .</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb"/>
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I have some experience building websites using JavaScript,PHP,JQuery,HTML,CSS,Bootstrap and MySQL Database.
                    <ul><br/><h3>Projects</h3>
                        <li>Student Result Management System</li>
                        <li>Online Book Store Services</li>
                    </ul>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Frontend and Framework</h3>
                    <p>I have good knowledge in some language suchas HTML,CSS,JavaScript,Bootstrap,Reactjs,JQuery and Ajax</p>
                    <p>I have good knowledge about Laravel Framework </p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Backend</h3>
                    <p>PHP is my specialize but I'm doing Nodejs now.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-7">
                <span className="icon">
                    <i className="icon-database"></i>
                </span>
                <div className="desc">
                    <h3>Database</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                </div>
            </div>
         </div>
         </div>
        </section>
      
      </div>
    )
  }
}
