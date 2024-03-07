import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Buiding Digital Experience That Inspire</h2>
        <p>
          Passionate Frontent Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img className="icon" src="/assets/react.svg" alt="react icon" />
          </div>
          <img src="/assets/profile.jpg" />
        </div>
        <div>
          <div className="tech-icon">
            <img className="icon" src="/assets/html.svg" alt="html icon" />
          </div>
          <div className="tech-icon">
            <img className="icon" src="/assets/css.svg" alt="css icon" />
          </div>
          <div className="tech-icon">
            <img
              className="icon"
              src="/assets/javascript.svg"
              alt="javascript icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
