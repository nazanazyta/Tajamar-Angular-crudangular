import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from './../../services/departamento.service';
import { Departamento } from './../../models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html'
})
export class DepartamentosComponent implements OnInit {
  public departamentos: Array<Departamento>;

  constructor(
    private _service: DepartamentoService,
    private _activeRoute: ActivatedRoute
  ) {
    this.departamentos = [];
  }

  cargarDepartamentos() {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    });
  }

  eliminarDepartamento(id) {
    this._service.deleteDepartamento(id).subscribe(response => {
      this.cargarDepartamentos();
    });
  }

  ngOnInit(): void {
    //RECIBIMOS UN PARÁMETRO O NO...
    this._activeRoute.params.subscribe(( params: Params) => {
      if(params.iddepart != null){
        //DEBEMOS ELIMINAR
        this.eliminarDepartamento(params.iddepart);
      }else{
        this.cargarDepartamentos();
      }
    });
  }

}
