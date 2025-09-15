import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sport: '',
    role: '',
    profile: null,
    age: '',
    password: ''
  });
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill out all required fields.');
      return;
    }
    alert('Registration successful!');
    setShowRegistration(false);
    setFormData({
      name: '', phone: '', email: '', sport: '', role: '', profile: null, age: '', password: ''
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
    if (!loginData.identifier || !loginData.password) {
      alert('Please enter your email/phone and password.');
      return;
    }
    alert('Login successful!');
    setShowLogin(false);
    setLoginData({
      identifier: '', password: ''
    });
  };

  const cricketRoles = ['Batsman', 'Bowler', 'All-Rounder', 'Wicket Keeper'];
  const footballRoles = ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

  return (
    <div className="App">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <h2>SAKTHIVEL</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button className="nav-close" onClick={() => setIsMenuOpen(false)}>
              &times;
            </button>
            <ul>
              <li><a href="#home" onClick={() => { setIsMenuOpen(false); setShowRegistration(false); setShowLogin(false); }}>Home</a></li>
              <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
              <li><a href="#sponsors" onClick={() => setIsMenuOpen(false)}>Sponsors</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
              <li className="sign-in">
                <button className="nav-button" onClick={() => { setShowRegistration(true); setShowLogin(false); setIsMenuOpen(false); }}>Register</button>
              </li>
              <li className="sign-in">
                <button className="nav-button" onClick={() => { setShowLogin(true); setShowRegistration(false); setIsMenuOpen(false); }}>Login</button>
              </li>
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

      <section className={`registration-form ${showRegistration ? 'active' : ''}`}>
        <div className="container">
          <button className="form-close-btn" onClick={() => setShowRegistration(false)}>&times;</button>
          <h2>Sports Registration</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <label>Name</label>
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <label>Phone Number</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <label>Email</label>
            </div>
            <div className="form-group select-group">
              <select name="sport" value={formData.sport} onChange={handleChange} required>
                <option value="">Choose Sport</option>
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
              </select>
              <label>Sport</label>
            </div>
            {formData.sport && (
              <div className="form-group select-group">
                <select name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Select Role</option>
                  {(formData.sport === 'cricket' ? cricketRoles : footballRoles).map((r, i) => <option key={i} value={r}>{r}</option>)}
                </select>
                <label>Role</label>
              </div>
            )}
            <div className="form-group file-group">
              <label htmlFor="profile">Profile Picture</label>
              <input id="profile" type="file" name="profile" onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
              <label>Age</label>
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              <label>Password</label>
            </div>
            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>
      </section>

      <section className={`login-form ${showLogin ? 'active' : ''}`}>
        <div className="container">
          <button className="form-close-btn" onClick={() => setShowLogin(false)}>&times;</button>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input type="text" name="identifier" placeholder="Email or Phone" value={loginData.identifier} onChange={handleLoginChange} required />
              <label>Email or Phone</label>
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
              <label>Password</label>
            </div>
            <button type="submit" className="form-button">Login</button>
          </form>
        </div>
      </section>

      {!showRegistration && !showLogin && (
        <main>
          <section className="hero">
            <div className="hero-background">
              <div className="hero-overlay"></div>
            </div>
            <div className="container">
              <div className="hero-content">
                <h1>Revolutionizing Sports Auctions Worldwide</h1>
                <p>Join thousands of sports organizations that have completed over 2,020+ auctions across 10 different countries.</p>
                <div className="hero-buttons">
                  <button className="cta-button primary" onClick={() => setShowRegistration(true)}>Register now</button>
                  <button className="cta-button secondary">Watch Demo</button>
                </div>
                <div className="hero-stats">
                  <div className="stat">
                    <h3>2020+</h3>
                    <p>Auctions Completed</p>
                  </div>
                  <div className="stat">
                    <h3>10+</h3>
                    <p>Countries</p>
                  </div>
                  <div className="stat">
                    <h3>5000+</h3>
                    <p>Sports Registered</p>
                  </div>
                  <div className="stat">
                    <h3>10K+</h3>
                    <p>Total Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <h2>SAKTHIVEL</h2>
              </div>
              <p>Revolutionizing Sports auctions with cutting-edge technology and seamless user experiences.</p>
              <div className="social-links">
                <a href="#"><i className="icon-facebook"></i></a>
                <a href="#"><i className="icon-twitter"></i></a>
                <a href="#"><i className="icon-instagram"></i></a>
                <a href="#"><i className="icon-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SAKTHIVEL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;