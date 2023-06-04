export type UserDetails={
    name:{
        first:string;
        last:string;
        title:string;
    };
    email:string;
    phone:string;
    cell:string;
    picture:{
        large:string;
        medium:string;
        thumbnail:string;
    };
    registered:{
        age:number;
        date:string;
    }
    location:{
        street: {
            number:number,
            name:string;
        },
        city:string,
        state:string,
        country:string,
        postcode: number,
        coordinates: {
            latitude:string,
            longitude: string
        },
        timezone: {
            offset:string;
            description:string;
        }
    }
}