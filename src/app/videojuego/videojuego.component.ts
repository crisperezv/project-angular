import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = 'Componente de videojuegos';
        this.listado = 'Listado de los juegos más populares'
        // console.log("Se ha cargado el componente: videojuego.component.ts")
    }

    ngOnInit(): void {
        // console.log("OnInit ejecutado!");
    }

    ngDoCheck(): void {
        // console.log("DoCheck ejecutado!");
    }

    ngOnDestroy(): void {
        // console.log("OnDestroy ejecutado!");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo título del componente";
    }
}