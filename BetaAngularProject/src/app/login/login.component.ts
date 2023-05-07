import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public signUpForm: any = FormGroup;
  public errorMessage: string = '';
  public togglePassword = true;
  constructor(
    private router: Router,
    private userSer: UserService,
    private formbuild: FormBuilder
  ) {}
  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(): void {
    this.signUpForm = this.formbuild.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  get unameCopy() {
    return this.signUpForm.get('Username');
  }
  get unamePass() {
    return this.signUpForm.get('Password');
  }
  public doLogIn(): void {
    if (this.signUpForm.valid) {
      this.userSer.logInData(this.signUpForm.value).subscribe(
        (data: {}) => {
          console.log(data, 'login data');
          this.router.navigateByUrl('/user');
        },
        (error: {}) => {
          this.signUpForm.reset();
          this.errorMessage = 'Username or Password is incorrect.';
        }
      );
    }
  }
}
