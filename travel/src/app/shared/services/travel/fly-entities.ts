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
  flyStart: FlyInfo,
  flyArrival:FlyInfo
  price:Price
}
export interface Price {
    total: number,
    currency: string
}
export interface FlyInfo{
    duration:string
    departure:FlyCityCodeHour,
    arrival:FlyCityCodeHour
}
export interface FlyCityCodeHour{
  iataCode: string,
  at:string,
  terminal:string
}