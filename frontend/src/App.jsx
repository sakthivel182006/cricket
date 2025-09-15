// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <h2>BidAthlete</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button className="nav-close" onClick={() => setIsMenuOpen(false)}>
              &times;
            </button>
            <ul>
              <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
              <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
              <li><a href="#sponsors" onClick={() => setIsMenuOpen(false)}>Sponsors</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
              <li className="sign-in"><a href="#signin">Sign In / Register</a></li>
            </ul>
          </nav>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>Revolutionizing Athlete Auctions Worldwide</h1>
              <p>Join thousands of sports organizations that have completed over 2,020+ auctions across 10 different countries.</p>
              <div className="hero-buttons">
                <button className="cta-button primary">Register now</button>
                <button className="cta-button secondary">Watch Demo</button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <h3>0</h3>
                  <p>Auctions Completed</p>
                </div>
                <div className="stat">
                  <h3>0</h3>
                  <p>Countries</p>
                </div>
                <div className="stat">
                  <h3>0</h3>
                  <p>Athletes Registered</p>
                </div>
                <div className="stat">
                  <h3>0</h3>
                  <p>Total Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2>Advanced Features Designed for Modern Auctions</h2>
              <p>Our platform provides everything you need to run successful athlete auctions</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-live-stream"></i>
                </div>
                <h3>Live Streaming Integration</h3>
                <p>Seamless integration with YouTube, Facebook, and Twitch with custom overlays that display real-time bidding information.</p>
                <a href="#" className="feature-link">Learn more →</a>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-registration"></i>
                </div>
                <h3>Online Player Registration</h3>
                <p>Customizable registration forms that athletes can access from anywhere. Automated data validation and profile management.</p>
                <a href="#" className="feature-link">Learn more →</a>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-support"></i>
                </div>
                <h3>24/7 Customer Support</h3>
                <p>Our dedicated support team is available around the clock to assist with any issues or questions you may have.</p>
                <a href="#" className="feature-link">Learn more →</a>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-sponsor"></i>
                </div>
                <h3>Sponsor Promotion</h3>
                <p>Highlight your sponsors across multiple touchpoints including dashboards, summary screens, and live overlays.</p>
                <a href="#" className="feature-link">Learn more →</a>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-analytics"></i>
                </div>
                <h3>Advanced Analytics</h3>
                <p>Comprehensive reporting tools that provide insights into bidding patterns, participant engagement, and financial outcomes.</p>
                <a href="#" className="feature-link">Learn more →</a>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-security"></i>
                </div>
                <h3>Secure Transactions</h3>
                <p>Bank-level encryption and secure payment processing to ensure all financial transactions are protected.</p>
                <a href="#" className="feature-link">Learn more →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="demo">
          <div className="container">
            <div className="demo-content">
              <div className="demo-text">
                <h2>See BidAthlete in Action</h2>
                <p>Our interactive dashboard makes managing auctions simple and intuitive. Real-time updates, participant tracking, and seamless bid management all in one place.</p>
                <ul className="demo-features">
                  <li>Real-time bid tracking</li>
                  <li>Participant management</li>
                  <li>Automated notifications</li>
                  <li>Financial reporting</li>
                </ul>
                <button className="cta-button primary">Request a Demo</button>
              </div>
              <div className="demo-visual">
                <div className="dashboard-preview">
                  <div className="dashboard-header">
                    <div className="dashboard-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="dashboard-content">
                    <div className="chart-placeholder"></div>
                    <div className="stats-placeholder">
                      <div className="stat-placeholder"></div>
                      <div className="stat-placeholder"></div>
                      <div className="stat-placeholder"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2>What Our Clients Say</h2>
              <p>Hear from sports organizations that have transformed their auctions with our platform</p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"BidAthlete revolutionized our annual draft. The live streaming integration brought our event to a global audience and increased participation by 40%."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image"></div>
                  <div className="author-details">
                    <h4>Michael Johnson</h4>
                    <p>Commissioner, National Basketball League</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"The registration system saved us countless hours of paperwork. The analytics helped us understand bidding patterns and maximize outcomes."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image"></div>
                  <div className="author-details">
                    <h4>Sarah Williams</h4>
                    <p>Director, European Football Association</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"Our sponsors were thrilled with the visibility they received. The overlay system made our broadcast look professional and engaging."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image"></div>
                  <div className="author-details">
                    <h4>David Chen</h4>
                    <p>CEO, Asia Pacific Sports Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sponsors" className="sponsors">
          <div className="container">
            <div className="section-header">
              <h2>Trusted by Leading Organizations</h2>
              <p>We're proud to partner with sports organizations and sponsors worldwide</p>
            </div>
            <div className="sponsors-grid">
              <div className="sponsor-logo"></div>
              <div className="sponsor-logo"></div>
              <div className="sponsor-logo"></div>
              <div className="sponsor-logo"></div>
              <div className="sponsor-logo"></div>
              <div className="sponsor-logo"></div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Athlete Auctions?</h2>
              <p>Join thousands of sports organizations using BidAthlete to streamline their auction process and maximize results.</p>
              <div className="cta-buttons">
                <button className="cta-button primary">Get Started Today</button>
                <button className="cta-button secondary">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>Have questions or want to learn more about how BidAthlete can help your organization? Our team is here to help.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="icon-email"></i>
                    <div>
                      <h4>Email</h4>
                      <p>support@bidathlete.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="icon-phone"></i>
                    <div>
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="icon-location"></i>
                    <div>
                      <h4>Office</h4>
                      <p>123 Sports Avenue, San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Organization" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="cta-button primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <h2>BidAthlete</h2>
              </div>
              <p>Revolutionizing athlete auctions with cutting-edge technology and seamless user experiences.</p>
              <div className="social-links">
                <a href="#"><i className="icon-facebook"></i></a>
                <a href="#"><i className="icon-twitter"></i></a>
                <a href="#"><i className="icon-instagram"></i></a>
                <a href="#"><i className="icon-linkedin"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Product</h3>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Subscribe</h3>
              <p>Stay updated with our latest features and news.</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Your email" />
                <button><i className="icon-send"></i></button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} BidAthlete. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;