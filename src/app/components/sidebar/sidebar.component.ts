import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/maps', title: 'Mapas',  icon:'location_on', class: '' },
    { path: '/table-list', title: 'Usuarios Registrados',  icon:'perm_identity', class: '' },
    { path: '/typography', title: 'Admón. de Tours',  icon:'toys', class: '' },
    { path: '/user-profile', title: 'Ventas',  icon:'local_atm', class: '' },
    { path: '/icons', title: 'Recursos',  icon:'bubble_chart', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
