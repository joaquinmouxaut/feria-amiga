import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private app = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.app);

  constructor(
    private router: Router
  ) {}

  register(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then((result) => {
      sendEmailVerification(result.user);
    })
  }

  async login(email: string, password: string) {
    const result = await signInWithEmailAndPassword(this.auth, email, password);
    this.router.navigate(['/private']);
    return result;
  }

  async isAuthenticated(): Promise<boolean> {
    const user = await this.auth.currentUser;
    debugger;
    return user !== null;
  }
}
