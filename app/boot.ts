import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ContactApp} from './ContactApp';

bootstrap(ContactApp, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
