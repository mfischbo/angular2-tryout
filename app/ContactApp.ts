import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactList} from './ContactList';
import {ContactDetails} from './ContactDetails';

@Component({
  selector : 'contact-app',
  templateUrl: '../views/ContactApp.html',
  directives : [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path : '/', name : 'ContactBook', component : ContactList},
  { path : '/:id', name : 'ContactDetails', component : ContactDetails}
])
export class ContactApp { }
