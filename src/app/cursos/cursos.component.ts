import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  public nombre: string = '';
  public followers: number = -1;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){

  }
  
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.followers = +params['followers'];
      console.log(typeof this.followers);
    });
  }
  redirigir(){
    this._router.navigate(['/zapatillas']);
  }
}
