import './Checkbox.css'
import type ICheckbox from '../types/checkbox'

function Checkbox({ label, id, checked, onChange }: ICheckbox) {
  return (
    <div className="checkbox-wrapper">
      <input 
        type="checkbox" 
        id={id} 
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox