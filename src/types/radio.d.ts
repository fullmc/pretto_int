export default interface IRadio {
  label: string
  id: string
  name: string
  value?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
