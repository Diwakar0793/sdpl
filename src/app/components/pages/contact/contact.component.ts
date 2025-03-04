import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  message: string = '';
  devices = ['MacBook Air',
    'MacBook Pro',
    'iMac',
    'Mac Mini',
    'Mac Studio',
    'Mac Pro',
    'iPad',
    'iPhone',
    'Apple Watch',
    'Airpods',
    'Other Accessories',
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
 this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      device: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.contactForm.value)
    if (this.contactForm.valid) {
      this.http.post('http://localhost:4200/contact.php', this.contactForm.value)
        .subscribe((response: any) => {
          this.message = response.message;
          console.log("message", this.message);
          this.contactForm.reset();
        }, error => {
          this.message = 'Error sending message. Try again later.';
        });
    }
  }

}