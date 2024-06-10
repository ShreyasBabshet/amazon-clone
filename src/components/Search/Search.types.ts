export interface SearchProps {
    options: IOption[],
    onChange: (selectedOptions: IOption[]) => void
}

export interface IOption {
    id: string | number;
    label: string
}