import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: false,
  
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent 
{
  isLoading$;

  constructor(private loadingService: LoadingService) {
    // Initialize isLoading$ after loadingService is initialized
    this.isLoading$ = this.loadingService.loading$;
  }
}
