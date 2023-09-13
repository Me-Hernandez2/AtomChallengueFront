import {Component} from '@angular/core';
import {LoaderService} from 'src/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading: boolean = false;

  constructor(private loaderService$: LoaderService) {
  }

  ngOnInit() {
    this.loaderService$.getLoadingStatus().subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }
}
