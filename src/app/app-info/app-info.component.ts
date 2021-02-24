
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { FilterService } from 'src/services/filter.service';
import { WebworkerServiceService } from 'src/services/webworker-service.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {
  @Input() countries: any[] = [];
  @Input() worldInfo: any;
  // public top10: any[] = [];
  //@Output() mapChanged:EventEmitter<any> = new EventEmitter<any>();
  constructor(private webworker: WebworkerServiceService,private filter:FilterService) { }

  ngOnInit(): void {
  }

  public getCurrentCountryInfo(item: any) {
    if (item == "WorldWide") {
      this.worldInfo = JSON.parse(localStorage.getItem("worldinfo"));
      this.filter.filteredCollectionChangeEmiter.emit(this.worldInfo);
      return;
    }
    this.webworker.getCurrentCountry(item).subscribe(res => {
      this.worldInfo = res;
      //console.log(res);
      this.filter.filteredCollectionChangeEmiter.emit(this.worldInfo);    
    });
   }
}
