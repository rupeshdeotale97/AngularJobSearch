import { Component, Inject } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Job } from '../models/job-model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { localStorageToken } from 'app/localstorage.token';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent {
  jobs: Job[] = [];

  constructor(private jobService: JobsService, @Inject(localStorageToken) private localStorage: Storage) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
  }

  favoriteJobs: Job[] = JSON.parse(this.localStorage.getItem('fav') || '[]');

  toggleFavorite(job: Job): void {
    const index = this.favoriteJobs.findIndex((j) => j.id === job.id);
    if (index === -1) {
      this.favoriteJobs.push(job);
    } else {
      this.favoriteJobs.splice(index, 1);
    }
    this.localStorage.setItem('fav', JSON.stringify(this.favoriteJobs));
  }

  isFavorite(job: Job): boolean {
    return this.favoriteJobs.some(fav => fav.id === job.id);
  }
}
