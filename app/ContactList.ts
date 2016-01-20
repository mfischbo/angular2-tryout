import {Component} from 'angular2/core'
import {Contact} from './Contact';
import {ContactService} from './ContactService';
import {ContactListEntry} from './ContactListEntry';
import {ContactForm} from './ContactForm';

@Component({
  selector : 'contact-list',
  templateUrl : '../views/ContactList.html',
  providers : [ContactService],
  directives : [ContactForm]
})
export class ContactList {

  private contacts;
  private mode = 'LIST';

  constructor(private _service : ContactService) {
      this.contacts = _service.getAllContacts();
      
  }

  handleContactCreate($event) {
    console.log($event);
    this.mode = 'LIST';
  }

  showForm() {
    this.mode = 'CREATE';
  }
}
