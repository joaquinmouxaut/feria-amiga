import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule ]
})
export class LoginComponent implements OnInit { 
  private formBuilder = inject(FormBuilder);
  public formGroup: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  private authService = inject(AuthService);

  ngOnInit() {
  }

  async login() {
    if (this.formGroup.valid) {
      const { email, password } = this.formGroup.value;
      await this.authService.login(email, password);  
    }
  }
}
