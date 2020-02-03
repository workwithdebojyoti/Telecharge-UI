import { Component, OnInit, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-control',
  templateUrl: './header-control.component.html',
  styleUrls: ['./header-control.component.css']
})
export class HeaderControlComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
  private auth: AuthService,
  private router: Router) { }

  ngOnInit() {
  }
  public logout() {
    this.storage.set('is_login', false);
    this.auth.logout();
  }

  routeToHome(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
