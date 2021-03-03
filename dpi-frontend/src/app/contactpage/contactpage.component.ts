import { Component, Input, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';
import { FormsModule } from '@angular/forms';
import { Contact } from '../Contact';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http"

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  name : string;
  email : string;
  message : string;

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})};

  constructor(private http : HttpClient) { }


  ngOnInit() {

  }

  submitForm(contact : Contact) {
    this.http.post<Contact>('https://mailthis.to/bdeyo28', contact)
          .subscribe(status => console.log(JSON.stringify(status)));
  }
  
}