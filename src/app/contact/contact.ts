import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  model = { name: '', email: '', message: '' };
  submitted = false;
  successMessage = '';
  errorMessage = '';

  submit(): void {
    if (!this.model.name || !this.model.email || !this.model.message) {
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';

    emailjs
      .send(
        'service_h0z7hfk',
        'template_vq6lxlo',
        this.model,
        'Egt9NVVn8wdp9gZlj'
      )
      .then(() => {
        this.successMessage = 'Message sent successfully!';
        this.model = { name: '', email: '', message: '' };
      })
      .catch(() => {
        this.errorMessage = 'Something went wrong. Please try again.';
      });
  }

}
