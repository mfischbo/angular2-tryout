import {Component} from 'angular2/core';
import {Contact} from './Contact';

@Component({
  selector : 'contact-list-entry',
  template : `
    <li class="contactListEntry">
      {{contact.firstName}} {{contact.lastName}}
    </li>
  `
})
export class ContactListEntry {

  contact : Contact;
}
