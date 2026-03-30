import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public authService = inject(Auth);
  private router = inject(Router);

  logout() {
    this.authService.logout();
    // this.router.navigate(['/login-api']);
  }
}
