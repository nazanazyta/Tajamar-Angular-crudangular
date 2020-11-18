import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from './../../models/departamento';
import { DepartamentoService } from './../../services/departamento.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html'
})
export class ModificarComponent implements OnInit {
  public departamento: Departamento;
  @ViewChild("cajanumero") cajanumero: ElementRef;
  @ViewChild("cajanombre") cajanombre: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad: ElementRef;

  constructor(
    private _service: DepartamentoService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) { }

  buscarDepartamento(iddept) {
    this._service.buscarDepartamento(iddept).subscribe(response => {
      this.departamento = response;
    });
  }

  modificarDepartamento() {
    var num = parseInt(this.cajanumero.nativeElement.value);
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;
    var dept = new Departamento(num, nom, loc);
    this._service.updateDepartamento(dept).subscribe(response => {
      this._router.navigate(["/"]);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.buscarDepartamento(params.iddepart);
    });
  }

}
