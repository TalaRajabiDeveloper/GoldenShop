import {Product} from '../products/product';
export class User {
    id : string;
    email: string;
    phoneNumber: string;
    userName : string;
    gender: boolean;
    name: string;
    familyName: string;
    phone: string;
    fixPhone: string;
    newsLetter: boolean;
    introducerCode: number;
    favouriteProducts: Product[];

    constructor(id : string) {
        this.id = id;
    }

    
}
