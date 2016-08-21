import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SecureGuard, LoginComponent, AuthService, SecureGuardAdmin  } from './index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
})

export class SecureModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SecureModule,
            providers: [SecureGuard, SecureGuardAdmin, AuthService]
        };
    }
}
