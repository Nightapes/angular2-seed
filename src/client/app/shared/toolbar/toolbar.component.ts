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

  private isOpen: boolean = false;

  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(undefined);
  }

  logout() {
    this.authService.logout();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
