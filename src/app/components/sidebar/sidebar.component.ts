import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  addObjectParameter = '';
  addObjectParameter2 = '';
  addObjectParameter3 = '';
  addObjectParameter6 = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickAddObjectMS(){
    this.addObjectParameter = "m/s";
  }
  onClickAddObjectKMH(){
    this.addObjectParameter = "km/h";
  }
  onClickAddObjectBeafort(){
    this.addObjectParameter = "Beafort";
  }

  onClickAddObjectHPA(){
    this.addObjectParameter2 = "hPa";
  }
  onClickAddObjectPA(){
    this.addObjectParameter2 = "Pa";
  }

  onClickAddObjectC(){
    this.addObjectParameter3 = "°C";
  }
  onClickAddObjectK(){
    this.addObjectParameter3 = "K";
  }

  onClickAddObjectMM(){
    this.addObjectParameter6 = "mm";
  }
  onClickAddObjectHR(){
    this.addObjectParameter6 = "hr";
  }

}
