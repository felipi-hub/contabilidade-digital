import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Contact } from '../../models/contact';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent implements OnInit {
  contact = {
    names: '',
    phone: '',
    email: '',
    message: ''
  };
  contactForm!: FormGroup;
  matcher = new ErrorStateMatcher();

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  phoneFormControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: this.nameFormControl,
      email: this.emailFormControl,
      phone: this.phoneFormControl
    });
  }

  saveContact() {
    if (this.contactForm.valid) {
      const contact: Contact = this.contactForm.value;
      console.log('Contato salvo:', contact);
    } else {
      console.log('Formulário inválido');
    }
  }

  clearForm() {
    this.contactForm.reset(); // Reseta todos os campos do formulário


  }

}




