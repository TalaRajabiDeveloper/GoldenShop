import { User } from '../users/user';

export class Product {
    id: number;
    name: string;
    productTypeId: number;
    productTypeName: string;
    price: number;
    pictrureId: string;
    producerId : number;
    producerName : string;
    description: string;
    IsFavourite : boolean;
    fanUsers: User[];
}