export default interface ICheckbox {
  label: string
  id: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
