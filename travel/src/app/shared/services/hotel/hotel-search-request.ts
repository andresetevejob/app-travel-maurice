export interface HotelSearchRequest{
    cityCode: string,
    guests: number,
    dateIn:string,
    dateOut:string,
    priceMin:number,
    priceMax:number
}

export interface Hotel{
    name: string
    contact:Contact
    adresse:Adresse,
    offers:Offer[]
}

export interface Contact{
    email:string,
    fax:string,
    phone:string
}
export interface Adresse{
    cityName: string,
    postalCode: string,
    lines:string[],
    country:string
}
export interface Offer{
  checkInDate:string,
  checkOutDate:string,
  guests:number,
  price:Price
}
export interface Price{
    total:number,
    currency:string
}