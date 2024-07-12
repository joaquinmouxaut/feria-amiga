import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.password === this.confirmPassword) {
      this.authService.register(this.email, this.password);
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }

}
