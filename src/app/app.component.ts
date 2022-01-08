import { Component } from '@angular/core';
import { GlobalStateService } from './services/global-state.service';
import { Router } from '@angular/router';
import { Roles } from './enums/roles.enums';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rol = ""
  showMenu=false
  pages = [
    {opcion:"Datos de la cuenta", route:'/datos'},
    {opcion:"Acerca de", route: '/acercade', rol:Roles.cliente},
    {opcion:"Clientes", route: '/clientes', rol:Roles.administrador},
    {opcion:"Corte de caja", route: '/cortecaja', rol:Roles.administrador},
    {opcion:"Cotizaciones", route: '/cotizaciones'},
    {opcion:"Empleados", route:'/empleados',rol:Roles.administrador},
    {opcion:"Movimientos", route: '/movimientos', rol:Roles.administrador},
    {opcion:"Ventas", route: '/ventas', rol:Roles.administrador},
  ];
      
  constructor(private GlobalStateService:GlobalStateService, private Router:Router, private MenuController:MenuController) {
    this.Router
    this.GlobalStateService.asObservable.subscribe(  x=>{
    this.showMenu=!!x;
    this.rol=this.GlobalStateService.userSession?.user.role
    this.MenuController.enable(!!x)
    })
  }
  isAdmin(){
    return Roles.administrador == this.GlobalStateService.userSession?.user.role
  }
  isCustomer(){
    return Roles.cliente == this.GlobalStateService.userSession?.user.role
  }

  goDatos() {
    this.Router.navigate(['/datos'])
  }
  goRoles() {
    this.Router.navigate(['/empleados'])
  }
  goClientes() {
    this.Router.navigate(['/clientes'])
  }
  goMovimientos() {
    this.Router.navigate(['/movimientos'])
  }
  goVentas() {
    this.Router.navigate(['/ventas'])
  }
  goSucursales() {
    this.Router.navigate(['/sucursales'])
  }
  logout(){
    this.GlobalStateService.logout()
    this.Router.navigate(['/login'])
  }   
}
