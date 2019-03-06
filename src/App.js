import React, { Component } from 'react';
import logoBig from './img/logo-big.png';
import home from './img/home.jpg';
import parallax from './img/parallax.jpg';
import about from './img/IMG_0475.JPG';
import person1 from './img/person-1.jpg';
import person2 from './img/person-2.jpg';
import person3 from './img/person-3.jpg';
import person4 from './img/person-4.jpg';
import portfolio1 from './img/portfolio-1.jpg';
import portfolio2 from './img/portfolio-2.jpg';
import portfolio3 from './img/portfolio-3.jpg';
import portfolio4 from './img/portfolio-4.jpg';
import portfolio5 from './img/portfolio-5.jpg';
import portfolio6 from './img/portfolio-6.jpg';
import portfolio7 from './img/portfolio-7.jpg';
import portfolio8 from './img/portfolio-8.jpg';
import customerslogo1 from './img/customers/logo-1.svg';
import customerslogo2 from './img/customers/logo-2.svg';
import customerslogo3 from './img/customers/logo-3.svg';
import customerslogo4 from './img/customers/logo-4.svg';
import customerslogo5 from './img/customers/logo-5.svg';
import customerslogo6 from './img/customers/logo-6.svg';

import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App"> 
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container"><a href="#intro" className="navbar-brand scrollTo">IT Worker</a>
          <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span className="fa fa-bars"></span></button>
          <div id="navbarcollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#intro" className="nav-link link-scroll">Intro</a></li>
              <li className="nav-item"><a href="#about" className="nav-link link-scroll">About</a></li>
              <li className="nav-item"><a href="#services" className="nav-link link-scroll">Services</a></li>
              <li className="nav-item"><a href="#testimonials" className="nav-link link-scroll">Testimonials</a></li>
              <li className="nav-item"><a href="#references" className="nav-link link-scroll">My work</a></li>
              <li className="nav-item"><a href="#customers" className="nav-link link-scroll">Clients</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link link-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    <section id="intro" style={{background: "url("+home+") center center no-repeat", backgroundSize: "cover"}} className="intro-section pb-2">
      <div className="container text-center">
        <div data-animate="fadeInDown" className="logo"><img src={logoBig} alt="logo" width="130"/></div>
        <h1 data-animate="fadeInDown" className="text-shadow mb-5">Hello !</h1>
        <p data-animate="slideInUp" className="h3 text-shadow text-400">I Fahad Bader Al-Mutairi.</p>
      </div>
    </section>
    
    <section id="about" className="about-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">About me</h2>
        </header>
        <div className="row">
          <div data-animate="fadeInUp" className="col-lg-6 mt-5">
            <p>Part of University 101 mobile application team (graduation project). The application help student to choose their majors and calculate acceptance scores to join King Saud University. Work on documentation and implementation of University 101. Develop an admin control panel using web development languages (HTML5, CSS, JavaScript, and PHP) and using libraries such as JQuery bootstrap. Develop android application in android studio using java-programming language.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-6">
            <div className="skill-item">
              <div className="progress-title">PHP</div>
              <div className="progress">
                <div role="progressbar" style={{width: "60%", ariaValuenow:"0", ariaValuemin:"60", ariaValuemax:"100"}} className="progress-bar progress-bar-skill1"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">Javascript</div>
              <div className="progress">
                <div role="progressbar" style={{width: "70%", ariaValuenow:"70", ariaValuemin:"60", ariaValuemax:"100"}} className="progress-bar progress-bar-skill2"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">HTML coding</div>
              <div className="progress">
                <div role="progressbar" style={{width: "80%", ariaValuenow:"80", ariaValuemin:"0", ariaValuemax:"100"}} className="progress-bar progress-bar-skill3"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">Python</div>
              <div className="progress">
                <div role="progressbar" style={{width: "90%", ariaValuenow:"90", ariaValuemin:"0", ariaValuemax:"100"}} className="progress-bar progress-bar-skill4"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">Django</div>
              <div className="progress">
                <div role="progressbar" style={{width: "70%", ariaValuenow:"70", ariaValuemin:"0", ariaValuemax:"100"}} className="progress-bar progress-bar-skill5"></div>
              </div>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-sm-6 mx-auto mt-5"><img src={about} alt="This is me - IT worker" className="image rounded-circle img-fluid"/></div>
        </div>
      </div>
    </section>
    
    <section id="services" className="bg-gradient services-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">Services</h2>
        </header>
        <div className="row services text-center">
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-search"></i></div>
            <h3 className="heading mb-3 text-400">Consulting</h3>
            <p className="text-left description">On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-html5"></i></div>
            <h3 className="heading mb-3 text-400">HTML coding</h3>
            <p className="text-left description">Manor we shall merit by chief wound no or would. Oh towards between subject passage sending mention or it. Sight happy do burst fruit to woody begin at. Assurance perpetual he in oh determine as.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-tachometer"></i></div>
            <h3 className="heading mb-3 text-400">PHP webdelopment</h3>
            <p className="text-left description">Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel me do we attacks on highest enabled. Tried law yet style child. Bore of true of no be deal.</p>
          </div>
        </div>
        <hr data-animate="fadeInUp"/>
        <div data-animate="fadeInUp" className="text-center">
          <p className="lead">Would you like to know more or just discuss something?</p>
          <p><a href="#contact" className="btn btn-outline-light link-scroll">Contact me</a></p>
        </div>
      </div>
    </section>
    
    <section id="testimonials" className="testimonials-section bg-gray">
      <div className="container">
        <header className="text-center mb-2">
          <h2 data-animate="fadeInUp" className="title">My customers said<br/><span>about me</span></h2>
          <p data-animate="fadeInUp" className="lead">I am always glad to hear that my customers leave satisfied. Some of them shared with you their insights on our cooperation.</p>
        </header>
        <ul data-animate="fadeInUp" className="owl-carousel owl-theme testimonials equalize-height">
          <li className="item">
            <div className="testimonial full-height">
              <div className="text">
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
              </div>
              <div className="bottom">
                <div className="icon"><i className="fa fa-quote-left"></i></div>
                <div className="name-picture"><img alt="" src={person1}/>
                  <h5>John McIntyre</h5>
                  <p>CEO, TransTech</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="testimonial full-height">
              <div className="text">
                <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What is happened to me? &quot; he thought. It was not a dream.</p>
              </div>
              <div className="bottom">
                <div className="icon"><i className="fa fa-quote-left"></i></div>
                <div className="name-picture"><img alt="" src={person2}/>
                  <h5>John McIntyre</h5>
                  <p>CEO, TransTech</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="testimonial full-height">
              <div className="text">
                <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
              </div>
              <div className="bottom">
                <div className="icon"><i className="fa fa-quote-left"></i></div>
                <div className="name-picture"><img alt="" src={person3}/>
                  <h5>John McIntyre</h5>
                  <p>CEO, TransTech</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="testimonial full-height">
              <div className="text">
                <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.</p>
              </div>
              <div className="bottom">
                <div className="icon"><i className="fa fa-quote-left"></i></div>
                <div className="name-picture"><img alt="" src={person4}/>
                  <h5>John McIntyre</h5>
                  <p>CEO, TransTech</p>
                </div>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="testimonial full-height">
              <div className="text">
                <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.</p>
              </div>
              <div className="bottom">
                <div className="icon"><i className="fa fa-quote-left"></i></div>
                <div className="name-picture"><img alt="" src={person4}/>
                  <h5>John McIntyre</h5>
                  <p>CEO, TransTech</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    
    <section id="statistics" data-dir="up" style={{background: "url("+parallax+")"}} className="statistics-section text-white parallax parallax">
      <div className="container">
        <div className="row showcase text-center"> 
          <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
            <div className="item">
              <div className="icon"><i className="fa fa-align-justify"></i></div>
              <h5 className="text-400 mt-4 text-uppercase"><span className="counter">120</span><br/>Websites</h5>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
            <div className="item">
              <div className="icon"><i className="fa fa-users"></i></div>
              <h5 className="text-400 mt-4 text-uppercase"><span className="counter">50</span><br/>Satisfied Clients</h5>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
            <div className="item">
              <div className="icon"><i className="fa fa-copy"></i></div>
              <h5 className="text-400 mt-4 text-uppercase"><span className="counter">320</span><br/>Projects</h5>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
            <div className="item">
              <div className="icon"><i className="fa fa-font"></i></div>
              <h5 className="text-400 mt-4 text-uppercase"><span className="counter">333</span><br/>Magazines and Brochures</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-mask"></div>
    </section>
    <section id="references">
      <div className="container">
        <div className="col-sm-12">
          <div className="mb-5 text-center">
            <h2 data-animate="fadeInUp" className="title">My work</h2>
            <p data-animate="fadeInUp" className="lead">I have worked on dozens of projects so I have picked only the latest for you.</p>
          </div>
          <ul id="filter" data-animate="fadeInUp">
            <li className="active"><a href="#" data-filter="all">All</a></li>
            <li><a href="#" data-filter="webdesign">Webdesign</a></li>
            <li><a href="#" data-filter="seo">SEO</a></li>
            <li><a href="#" data-filter="marketing">Marketing</a></li>
            <li><a href="#" data-filter="other">Other</a></li>
          </ul>
          <div id="detail">
            <div className="row">
              <div className="col-lg-10 mx-auto"><span className="close">×</span>
                <div id="detail-slider" className="owl-carousel owl-theme"></div>
                <div className="text-center">
                  <h1 id="detail-title" className="title"></h1>
                </div>
                <div id="detail-content"></div>
              </div>
            </div>
          </div>
               <div id="references-masonry" data-animate="fadeInUp">
            <div className="row">
                  <div data-category="webdesign" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src={portfolio1} alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="seo" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src={portfolio2} alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 2</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider3.jpg,img/main-slider1.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="marketing" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src={portfolio3} alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 3</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="marketing" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src={portfolio4} alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 4</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="webdesign" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src={portfolio5} alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 5</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="other" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src={portfolio6} alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 6</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="seo" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src={portfolio7} alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="webdesign" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src={portfolio8} alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="customers" className="customers-section bg-gray">
      <div className="container">
        <div className="col-md-12">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="customer"><img src={customerslogo1} title="brand logo" data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto"/></div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="customer"><img src={customerslogo2} title="brand logo" data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto"/></div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="customer"><img src={customerslogo3} title="brand logo" data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto"/></div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="customer"><img src={customerslogo4} title="brand logo" data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto"/></div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="customer"><img src={customerslogo5} title="brand logo" data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto"/></div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="customer"><img src={customerslogo6} title="brand logo" data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto"/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="contact" data-animate="bounceIn" className="contact-section contact">
      <div className="container">
        <header className="text-center">
          <h2 className="title">Contact me</h2>
        </header>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form id="contact-form" method="post" action="">
              <div className="messages"></div>
              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="name" placeholder="Your firstname *" required="required" className="form-control"/>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="surname" placeholder="Your lastname *" required="required" className="form-control"/>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="email" placeholder="Your email *" required="required" className="form-control"/>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="phone" placeholder="Your phone" className="form-control"/>
                  </div>
                  <div className="col-md-12">
                    <textarea name="message" placeholder="Message for me *" rows="4" required="required" className="form-control"></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-outline-primary">Send message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left">
            <p className="social"><a href="#" className="external facebook wow fadeInUp"><i className="fa fa-facebook"></i></a><a href="#" data-wow-delay="0.2s" className="external instagram wow fadeInUp"><i className="fa fa-instagram"></i></a><a href="#" data-wow-delay="0.4s" className="external gplus wow fadeInUp"><i className="fa fa-google-plus"></i></a><a href="#" data-wow-delay="0.6s" className="email wow fadeInUp"><i className="fa fa-envelope"></i></a></p>
          </div>
               <div className="col-md-6 text-center text-lg-right mt-4 mt-lg-0">
            <p>© 2018 Your name goes here. All rights reserved.</p>
          </div>
          <div className="col-12 mt-4">
            <p className="template-bootstrapious">Template by <a href='https://bootstrapious.com/p/bootstrap-carousel'>Bootstrapious</a> & <a href="https://fity.cz/ostrava">Fity</a></p>
                   </div>
        </div>
      </div>
    </footer>
    </div>
    );
  }
}

export default App;
