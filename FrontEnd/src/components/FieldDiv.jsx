const FieldDiv = ({ label, type, id, name, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id} 
        name={name} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export default FieldDiv;
