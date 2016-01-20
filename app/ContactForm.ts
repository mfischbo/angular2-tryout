import {Component, EventEmitter, Output} from 'angular2/core';
import {Contact, Address, EmailAddress, PhoneNumber} from './Contact';
import {ContactService} from './ContactService';
import {Util} from './Utils';

@Component({
  selector : 'contact-form',
  templateUrl : '../views/ContactForm.html',
  providers : [ContactService]
})
export class ContactForm {

  @Output() contactCreated  = new EventEmitter<Contact>();
  contact : Contact;

  constructor(private _service : ContactService) {
    this.contact = this._service.buildContact();
  }

  addAddress() {
    this.contact.addresses.push({
      label : '',
      street : '',
      city : '',
      zipcode : '',
      country : ''
    });
  }

  removeAddress(addr : Address) {
    Util.remove(this.contact.addresses, addr);
  }

  addEmail() {
    this.contact.emailAddresses.push({
      label : '',
      address : ''
    });
  }

  removeEmail(email : EmailAddress) {
    Util.remove(this.contact.emailAddresses, email);
  }

  addPhone() {
    this.contact.phoneNumbers.push({
      label : '',
      number : ''
    });
  }

  removePhone(entry : PhoneNumber) {
    Util.remove(this.contact.phoneNumbers, entry);
  }

  onFormSubmit() {
    let retval : Contact = this._service.saveContact(this.contact);
    this.contactCreated.emit(retval);
    this.contact = this._service.buildContact();
  }
}
