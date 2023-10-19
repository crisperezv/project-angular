import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [
        ZapatillaService
    ]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla> = [];
    public marcas : String[];
    public color: string;
    public mi_marca: string;
    
    constructor(
        private _zapatillaService: ZapatillaService
        ){
        this.color = 'orange';
        this.mi_marca = 'Fila';
        this.marcas = new Array();
    }

    ngOnInit(): void {
        this.zapatillas = this._zapatillaService.getZapatillas();
        alert(this._zapatillaService.getTexto());
        this.getMarcas();
    }

    public getMarcas(){
        this.zapatillas.forEach((z, index) => {
            if(this.marcas.indexOf(z.marca) == -1){
                this.marcas.push(z.marca);
            }
        });

        console.log(this.marcas);
    }

    public getMarca(){
        alert(this.mi_marca);
    }

    public addMarca(){
        this.marcas.push(this.mi_marca);
    }

    public borrarMarca(index: number){
        this.marcas.splice(index, 1);
    }

    public onBlur(){
        console.log("Has salido del input");
    }

    public mostrarPalabra(){
        alert(this.mi_marca);
    }
}