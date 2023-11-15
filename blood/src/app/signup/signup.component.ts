// signup.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  file:any
  constructor( private authService: AuthService) { }

  signupForm =new FormGroup({
    nom:  new FormControl(),
    prenom:  new FormControl(),
    dates:  new FormControl(),
    phone:  new FormControl(),
    emails:  new FormControl(),
    password:  new FormControl(),
    codepostal:  new FormControl(),
    typedesang: new FormControl (),
    files: new FormControl ()
  });
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.file=file
  } 
  onSubmit() {
    const formData = new FormData()
    formData.append("nom",this.signupForm.value.nom)
    formData.append("prenom",this.signupForm.value.prenom)
    formData.append("date",this.signupForm.value.dates)
    formData.append("telephone",this.signupForm.value.phone)
    formData.append("email",this.signupForm.value.emails)
    formData.append("password",this.signupForm.value.password)
    formData.append("codepostal",this.signupForm.value.codepostal)
    formData.append("typedesang",this.signupForm.value.typedesang)
    formData.append("pdfPath",this.file)
    this.authService.signup(formData).subscribe((response) => {
      console.log(response)
    });

    //console.log(formData,this.signupForm.value)


  }
}
