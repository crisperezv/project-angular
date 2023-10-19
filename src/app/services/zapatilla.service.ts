import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla("Nike Airmax", 190, "Nike", "Gris", true),
            new Zapatilla("Reebook Classic", 80, "Reebook", "Blanca", true),
            new Zapatilla("Nike Runner", 60, "Nike", "Negras", true),
            new Zapatilla("Adidas Yezzy", 180, "Adidas", "Gris", false),
            new Zapatilla("Reebook Spartan", 120, "Reebook", "Gris", false),
        ];
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }

    getTexto(){
        return "Hola Mundo, desde un servicio!";
    }
}