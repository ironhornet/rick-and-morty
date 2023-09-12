export interface IPaginationMuiProps {
  count: number
  onSetPageNumberHandler: (num: number) => void
  currentPage: number
}