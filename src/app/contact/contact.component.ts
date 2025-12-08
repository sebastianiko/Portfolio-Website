import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <section class="contact-section">
      <div class="ellipse ellipse1"></div>
      <div class="ellipse ellipse2"></div>
      <div class="ellipse ellipse3"></div>
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
  styles: [`
    .contact-section {
      position: relative;
      display: flex;
      justify-content: center;
      padding: 100px 50px;
      overflow: hidden; /* Prevents ellipses from showing scrollbars */
    }

    .contact-content {
      display: flex;
      justify-content: space-between;
      max-width: 1241px;
      width: 100%;
      gap: 80px;
      z-index: 1;
    }

    .contact-text {
      max-width: 450px;
    }

    .contact-text h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 90px;
      color: #5988FF;
      margin-bottom: 20px;
    }

    .contact-text h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 32px;
      color: #5988FF;
      margin-bottom: 20px;
    }

    .contact-text p {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      color: #000000;
    }

    .contact-form-container {
      max-width: 617px;
      width: 100%;
    }

    .form-group {
      margin-bottom: 20px;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      width: 100%;
      border: 1px solid #5988FF;
      border-radius: 10px;
      background: #FFFFFF;
      padding: 15px 25px;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      box-sizing: border-box; /* Ensures padding doesn't affect width */
    }

    input[type="text"],
    input[type="email"] {
      height: 50px;
    }

    textarea {
      height: 202px;
      resize: none;
    }

    .privacy-policy {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }

    .privacy-policy input[type="checkbox"] {
      margin-right: 10px;
    }

    .privacy-policy label {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
    }

    .privacy-policy a {
      color: #5988FF;
      text-decoration: underline;
    }

    .btn-send {
      width: auto;
      height: 58px;
      padding: 15px 30px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 23px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-send:disabled {
      border: 2px solid #BBBBBB;
      background-color: #F0F0F0;
      color: #BBBBBB;
      cursor: not-allowed;
    }

    .btn-send:not(:disabled) {
      background: #5988FF;
      color: #FFFFFF;
      border: 2px solid #5988FF;
    }

    .error-message {
      color: red;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      margin-top: 5px;
    }
    
    .checkbox-error {
        margin-bottom: 15px;
    }

    .ellipse {
      position: absolute;
      background-color: #5988FF;
      filter: blur(100px);
      border-radius: 50%;
      z-index: -1;
    }

    .ellipse1 {
      width: 300px;
      height: 300px;
      top: -100px;
      left: -100px;
    }

    .ellipse2 {
      width: 400px;
      height: 400px;
      bottom: -150px;
      right: -150px;
    }

    .ellipse3 {
      width: 250px;
      height: 250px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media (max-width: 768px) {
      .contact-section {
        padding: 40px 20px;
      }

      .contact-content {
        flex-direction: column;
        gap: 40px;
      }

      .contact-text {
        max-width: 100%;
        text-align: center;
      }
      
      .contact-text h1 {
        font-size: 45px;
      }

      .contact-text h2 {
        font-size: 23px;
      }

      .contact-form-container {
        max-width: 100%;
      }

      input[type="text"],
      input[type="email"] {
        height: 40px;
      }

      textarea {
        height: 162px;
      }

      .btn-send {
        width: 100%;
        height: 54px;
        padding: 13px 24px;
      }
      
      .privacy-policy label {
        font-size: 12px;
      }

      .error-message {
        font-size: 10px;
      }
    }
  `]
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
