import { IE11DeprecatedComponent } from './components/ie11-deprecated/ie11-deprecated.component';
import { TSConfigChangesComponent } from './components/tsconfig-changes/tsconfig-changes.component';
import { RxjsChangesComponent } from './components/rxjs-changes/rxjs-changes.component';
import { IvyEverywhereComponent } from './components/ivy-everywhere/ivy-everywhere.component';
import { PersistantCachingComponent } from './components/persistant-caching/persistant-caching.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { TestImprovementsComponent } from './components/test-improvements/test-improvements.component';
import { MinorChangesComponent } from './components/minor-changes/minor-changes.component';
import { TypescriptChangesComponent } from './components/typescript-changes/typescript-changes.component';
import { NodeVersionChangesComponent } from './components/node-version-changes/node-version-changes.component';
import { MigrationPrerequisitesComponent } from './components/migration-prerequisites/migration-prerequisites.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', redirectTo: 'angularUpdates', pathMatch: 'full'
    },
    {
        path: 'angularUpdates', component: HomeComponent
    },
    {
        path: 'angularUpdates/nodeVersionChanges', component: NodeVersionChangesComponent
    },
    {
        path: 'angularUpdates/typescriptChanges', component: TypescriptChangesComponent
    },
    {
        path: 'angularUpdates/ie11Deprecated', component: IE11DeprecatedComponent
    },
    {
        path: 'angularUpdates/tsconfigChanges', component: TSConfigChangesComponent
    },
    {
        path: 'angularUpdates/rxjsChanges', component: RxjsChangesComponent
    },
    {
        path: 'angularUpdates/ivyEverywhere', component: IvyEverywhereComponent
    },
    {
        path: 'angularUpdates/persistantCaching', component: PersistantCachingComponent
    },
    {
        path: 'angularUpdates/dynamicComponent', component: DynamicComponentComponent
    },
    {
        path: 'angularUpdates/testImprovements', component: TestImprovementsComponent
    },
    {
        path: 'angularUpdates/minorChanges', component: MinorChangesComponent
    },
    {
        path: 'angularUpdates/prerequisites', component: MigrationPrerequisitesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
