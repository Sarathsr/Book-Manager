import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService : AuthService, 
    private router : Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    }); 
    this.toastr.success("Logged out Succesfully");
  }

}
