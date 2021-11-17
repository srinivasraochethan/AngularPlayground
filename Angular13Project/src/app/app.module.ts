import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NodeVersionChangesComponent } from './components/node-version-changes/node-version-changes.component';
import { TypescriptChangesComponent } from './components/typescript-changes/typescript-changes.component';
import { IE11DeprecatedComponent } from './components/ie11-deprecated/ie11-deprecated.component';
import { TSConfigChangesComponent } from './components/tsconfig-changes/tsconfig-changes.component';
import { RxjsChangesComponent } from './components/rxjs-changes/rxjs-changes.component';
import { IvyEverywhereComponent } from './components/ivy-everywhere/ivy-everywhere.component';
import { AngularPackagingComponent } from './components/angular-packaging/angular-packaging.component';
import { PersistantCachingComponent } from './components/persistant-caching/persistant-caching.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { TestImprovementsComponent } from './components/test-improvements/test-improvements.component';
import { MinorChangesComponent } from './components/minor-changes/minor-changes.component';
import { MigrationPrerequisitesComponent } from './components/migration-prerequisites/migration-prerequisites.component';
import { HomeComponent } from './components/home/home.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NodeVersionChangesComponent,
    TypescriptChangesComponent,
    IE11DeprecatedComponent,
    TSConfigChangesComponent,
    RxjsChangesComponent,
    IvyEverywhereComponent,
    AngularPackagingComponent,
    PersistantCachingComponent,
    DynamicComponentComponent,
    TestImprovementsComponent,
    MinorChangesComponent,
    MigrationPrerequisitesComponent,
    HomeComponent,
    SafeHTMLPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
