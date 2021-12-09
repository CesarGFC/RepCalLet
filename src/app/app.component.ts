import { Component } from '@angular/core';
import { GlobalStateService } from './services/global-state.service';
import { Router } from '@angular/router';
import { Roles } from './enums/roles.enums';

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
    {opcion: "Roles", route:'/empleado',rol:Roles.administrador},
    {opcion:"Estado de reparaciones", route: '/entradas', rol:Roles.administrador},
    {opcion:"Ver artículos", route: '/articulos'}, 
    {opcion:"Ver clientes", route: '/clientes', rol:Roles.administrador},
    {opcion:"Ver movimientos", route: '/movimientos', rol:Roles.administrador},
    {opcion:"Ver productos", route: '/productos'},
    {opcion:"Ver servicios", route: '/servicios'},
    {opcion:"Ver ventas", route: '/ventas', rol:Roles.administrador},
    {opcion:"Sucursales", route: '/sucursales', rol:Roles.cliente},
  ];
      
  constructor(private GlobalStateService:GlobalStateService, private Router:Router) {
    this.Router
    this.GlobalStateService.asObservable.subscribe(  x=>{
    this.showMenu=!!x;
    this.rol=this.GlobalStateService.userSession?.user.role
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
  goEntradas() {
    this.Router.navigate(['/entradas'])
  }
  goArticulos() {
    this.Router.navigate(['/articulos'])
  }
  goClientes() {
    this.Router.navigate(['/clientes'])
  }
  goMovimientos() {
    this.Router.navigate(['/movimientos'])
  }
  goProductos() {
    this.Router.navigate(['/productos'])
  }
  goServicios() {
    this.Router.navigate(['/servicios'])
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
