import { Component, Inject } from '@angular/core';
import { Job } from '../models/job-model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { localStorageToken } from 'app/localstorage.token';


@Component({
  selector: 'app-fav-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fav-list.component.html',
  styleUrl: './fav-list.component.css'
})
export class FavListComponent {
  constructor(@Inject(localStorageToken) private localStorage: Storage,) {

  }
  favJob: Job[] = [];

  ngOnInit(): void {
    this.favJob = JSON.parse(this.localStorage.getItem('fav') || '[]');
  }

  
toggleFavorite(job: Job): void {
  const index = this.favJob.findIndex(j => j.id === job.id);
  if (index === -1) {
    this.favJob.push(job);
  } else {
    this.favJob.splice(index, 1);
  }
  this.localStorage.setItem('fav', JSON.stringify(this.favJob));
}
}
