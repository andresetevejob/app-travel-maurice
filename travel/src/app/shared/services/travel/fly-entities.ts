export interface FlySearchRequest{
    dept:string,
    dest:string,
    priceMin:number,
    priceMax:number,
    dateDept:string,
    dateRet:string
}
export interface Fly{
  dept: string,
  dest: string,
  price:Price
}
export interface Price {
    total: number,
    currency: string
}