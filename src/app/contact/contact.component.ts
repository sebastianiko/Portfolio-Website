import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <section class="contact-section">
      <div class="contact-content">
        <div class="contact-text">
          <h1>Contact</h1>
          <h2>Got a problem to solve?</h2>
          <p>Contact me through this form, I am interested in hearing from you, about your project, ideas, and company.</p>
        </div>
        <div class="contact-form-container">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input type="text" id="name" formControlName="name" placeholder="Your name" />
            </div>
            <div class="form-group">
              <input type="email" id="email" formControlName="email" placeholder="Your email" />
               @if (formSubmitted && contactForm.get('email')?.hasError('email')) {
                <div class="error-message">Please enter a valid email address.</div>
              }
            </div>
            <div class="form-group">
              <textarea id="message" formControlName="message" placeholder="Your message"></textarea>
               @if (formSubmitted && contactForm.get('message')?.hasError('required')) {
                <div class="error-message">Message is required.</div>
              }
            </div>
            <div class="privacy-policy">
              <input type="checkbox" id="privacyAccepted" formControlName="privacyAccepted" />
              <label for="privacyAccepted">I've read the <a href="#">privacy policy</a> and agree to the terms and conditions.</label>
            </div>
             @if (formSubmitted && contactForm.get('privacyAccepted')?.hasError('requiredTrue')) {
              <div class="error-message checkbox-error">You must accept the privacy policy.</div>
            }
            <button type="submit" class="btn-send" [disabled]="!contactForm.valid">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyAccepted: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.log('Form data sent:', this.contactForm.value);
      this.contactForm.reset();
      this.formSubmitted = false;
    }
  }
}
