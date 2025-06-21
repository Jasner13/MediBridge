import "./Home.css";
import medibridge from '../assets/MediBridge_Home.png';
import logo from '../assets/MediBridge_LogoClear.png'; // adjust the path as needed

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
        <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="MediBridge Logo" className="logo-img" />
            <span className="logo-text">MediBridge</span>
        </div>
        <ul className="nav-links">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Reviews</li>
            <li>Login</li>
            <li>Register</li>
        </ul>
        </nav>

      {/* Hero Section */}
        <header
        className="hero-section"
        style={{
            backgroundImage: `url(${medibridge})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '10vh',
            position: 'relative',
        }}
        >
        <div className="hero-overlay">
            <div className="hero-text">
            <h1><span className="red">Medi</span>Bridge</h1>
            <h2>Connecting Patients with Doctors Anytime, Anywhere</h2>
            <p>
                MediBridge provides remote consultations, AI-powered symptom checkers,
                and a secure telehealth platform for underserved communities.
            </p>
            </div>
        </div>
        </header>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How it Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <h4>Register</h4>
            <p>Sign up as a patient or doctor.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <h4>ChatBot</h4>
            <p>Describe symptoms using our AI assistant.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <h4>Schedule</h4>
            <p>Choose a doctor and time slot.</p>
          </div>
          <div className="step">
            <h3>Step 4</h3>
            <h4>Consult</h4>
            <p>Join your video call from the portal.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MediBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;