import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

export const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:jobId', component: JobDetailComponent },
  { path: 'fav', component: FavListComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
];
