const Feature = ({ icon, title, children }) => {
    return (
      <div className="feature-item">
        <img src={icon} alt="Feature Icon" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{children}</p>
      </div>
    );
  };
  
  export default Feature;