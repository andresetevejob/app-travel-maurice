export interface user{
    username:string;
    password:string;
}
export interface SignUpRequest extends user{
    email:string;
}