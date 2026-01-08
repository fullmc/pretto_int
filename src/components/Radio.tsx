import type IRadio from '../types/radio'
import './Radio.css'

function Radio({ label, id, name, checked, value, onChange }: IRadio) {
  return (
    <div className="radio-wrapper">
      <input 
        type="radio" 
        id={id} 
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Radio