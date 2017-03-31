import React, {PropTypes} from 'react';

export const TextInput = ({name, label, onChange, type, placeholder, value, error, id, cls}) => {
  let formWrapper = 'input-field '
  formWrapper = cls ? `${formWrapper} ${cls}` : `${formWrapper} col m12 s12 l12`
  if(error && error.length > 0 ) {
    formWrapper = `${formWrapper} has-error`
  } 
  return (
    <div className={formWrapper}>
      <input 
        id={id}  
        type={type} 
        className="validate" 
        name={name}
        value={value}
        onChange={onChange}
        value={value}
        />
      <label htmlFor={id}>{label}</label>
      <span>{error && <div className="input-error">{ error }</div>}</span>
    </div>
  )
} 

TextInput.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export const TextArea = ({name, label, onChange, placeholder, value, error, id, rows}) => {
  return (
    <div className="input-field">
      <textarea 
        id={id}  
        className="validate" 
        name={name}
        rows={rows || 20}
        value={value}
        onChange={onChange}
        value={value}
        ></textarea>
      <label htmlFor={id}>{label}</label>
      <span>{error && <div className="input-error">{ error }</div>}</span>
    </div>
  )
} 

TextArea.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  cols: PropTypes.string,
  rows: PropTypes.string
  
}

