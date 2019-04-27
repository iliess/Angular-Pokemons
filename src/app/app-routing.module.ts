import { PageNotFoundComponent } from './page-notfound.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// routes
const appRoutes: Routes = [
	{ path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }