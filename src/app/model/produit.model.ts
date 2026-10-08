export class Produit {
    idProduit? : number;
    nomProduit? : string;
    prixProduit? : number;
    dateCreation? : Date ;
}


import { Produit } from '../model/produit.model';
export class ProduitsComponent implements OnInit {
produits : Produit[]; //un tableau de Produit

constructor() {
this.produits = [
{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreati
on : new Date("01/14/2011")},
{idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCr
eation : new Date("12/17/2010")},
{idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dat
eCreation : new Date("02/20/2020")}
 ];
 }

/*  export interface Produit {
    idProduit? : number;
    nomProduit? : string;
    prixProduit? : number;
    dateCreation? : Date ;
} */
 