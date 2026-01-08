export interface ICity {
  label: string
  name?: string
  postcode: string
}

export interface ICitySelector {
  cities: ICity[]
  onAddCity: (city: ICity) => void
  onRemoveCity: (city: ICity) => void
}