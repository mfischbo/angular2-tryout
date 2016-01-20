import {Observable} from 'rxjs';
import {Injectable, Component} from 'angular2/core';
import {Http, Response, RequestOptions, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Contact} from './Contact';
import {Util} from './Utils'

@Component({
  viewProviders : [HTTP_PROVIDERS]
})
@Injectable()
export class ContactService {

  private reqOpts : RequestOptions;

  constructor(private http : Http) {
    var header : Headers = new Headers();
    header.append('Content-Type', 'application/json');

    this.reqOpts = new RequestOptions({
      headers : header
    })
  }

  /**
   * Creates a new contact
   * @return  An empty contact
   */
  buildContact() : Contact {
    return {
      _id : undefined,
      _rev : undefined,
      type : 'Contact',
      firstName : '',
      lastName : '',
      birthday : new Date(),
      phoneNumbers : [{ label : '', number : '' }],
      emailAddresses : [{ label : '', address : '' }],
      addresses : [{
        label : '',
        street : '',
        zipcode : '',
        city : '',
        country : ''
      }],
      imageUrl : ''
    }
  }

  /**
   * Returns an array of all contacts persisted
   * @return Contact[] all persisted contacts
   */
  getAllContacts() : Contact[] {
    var retval : Contact[] = [];
    var source : Observable<Response> =
      this.http.get('http://localhost:5984/fundba/_design/contacts/_view/all', this.reqOpts);
    source
      //.map(response => response.json())
      .subscribe(res => {
        var x = res.json();
        for (var i in x.rows) {
          retval.push(x.rows[i].value);
        }
      });
    return retval;
  }

  /**
   * Returns a contact by the specified id
   * @param id The id of the contact to be returned
   * @return The contact with the specified id or null if no such contact exists
   */
  getContactById(id : string) : Contact {
    var retval : Contact = null;
    this.http.get('http://localhost:5984/fundba/' + id, this.reqOpts)
      .map(res => res.json())
      .subscribe((res : Contact) => retval)
    return retval;
  }

  /**
   * Persists a contact
   * @param The contact to be persisted
   */
  saveContact(contact : Contact) : Contact {

    this.http.post('http://localhost:5984/fundba/', JSON.stringify(contact), this.reqOpts)
    .subscribe(res => {
      let x = res.json();
      contact._rev = x.rev;
      contact._id = x.id;
    });
    return contact;
  }

  /**
   * Deletes a contact from the persistent storage
   * @param contact The contact to be deleted
   */
  deleteContact(contact : Contact) {
    this.http.delete('http://localhost:5984/fundba/' + contact._id, this.reqOpts);
  }
}
