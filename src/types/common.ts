export interface CountryTypes {
    country: string;
    
    borders?: any;
    subregion: string;
    name: {
        altSpellings: any;
        Location:any;
      common: string;
    };
    flags: {
        png: string;
    };
    altSpellings: any;
    population: number;
    region: string;
    capital: string;
}
   
export interface buttonTypes{
    onClick: (event: any) => void;
    width: number;
    height:number
    children:string
    border:string
}
