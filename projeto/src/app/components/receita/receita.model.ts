import { Product } from "../product/product.model";

export interface Receita {
    id?: number
    name: string
    produtos: Array<Product>
    qtdutilizado: number
}