export default interface IRadio {
  label: string
  id: string
  name: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
