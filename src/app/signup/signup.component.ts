import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      
      this.userService.createUser(userData).subscribe({
        next: (response) => {
          localStorage.setItem('currentUser', JSON.stringify({
            ...userData,
            _id: response.id
          }));

          alert('Successfully signed up!');
          this.router.navigate(['/tasks']);
        },
        error: (error) => {
          alert('Sign up failed. Please try again.');
        }
      });
    }
  }
}
