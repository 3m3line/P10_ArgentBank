const Banner = ({ title, subtitles, text, imageSrc }) => {
    const bannerStyle = {
        backgroundImage: `url(${imageSrc})`,
      };
    
    return (
      <div className="hero" style={bannerStyle}>
        <section className="hero-content">
          {title && <h2 className="sr-only">{title}</h2>}
          {subtitles.map((subtitle, index) => (
            <p key={index} className="subtitle">{subtitle}</p>
          ))}
          <p className="text">{text}</p>
        </section>
      </div>
    );
  };
  
  export default Banner;
  