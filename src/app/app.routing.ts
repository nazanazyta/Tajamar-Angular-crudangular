import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { InsertarComponent} from './components/insertar/insertar.component';
import { ModificarComponent } from './components/modificar/modificar.component';

const appRoutes: Routes = [
    { path: "", component: DepartamentosComponent }
    , { path: "insertar", component: InsertarComponent }
    , { path: "eliminar/:iddepart", component: DepartamentosComponent }
    , { path: "modificar/:iddepart", component: ModificarComponent }
];

export const appRoutingProvider: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);