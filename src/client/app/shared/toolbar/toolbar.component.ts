import { Component } from '@angular/core';
import { AuthService } from '../../secure/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
