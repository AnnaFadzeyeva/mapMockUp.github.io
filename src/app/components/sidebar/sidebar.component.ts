import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // show on click hide default = show

  isShow1 = false;
  isShow2 = false;
  isShow3 = false;
  isShow4 = false;
  isShow5 = false;
  isShow6 = false;
  isShow7 = false;
  isShow8 = false;

  isShow11 = false;
  isShow12 = false;

  toggleDisplay1() {
    this.isShow1 = !this.isShow1;
  }
  
  toggleDisplay2() {
    this.isShow2 = !this.isShow2;
  }

  toggleDisplay3() {
    this.isShow3 = !this.isShow3;
  }

  toggleDisplay4() {
    this.isShow4 = !this.isShow4;
  }

  toggleDisplay5() {
    this.isShow5 = !this.isShow5;
  }

  toggleDisplay6() {
    this.isShow6 = !this.isShow6;
  }
  
  toggleDisplay7() {
    this.isShow7 = !this.isShow7;
  }

  toggleDisplay8() {
    this.isShow8 = !this.isShow8;
  }

  toggleDisplay11() {
    this.isShow11 = !this.isShow11;
  }

  toggleDisplay12() {
    this.isShow12 = !this.isShow12;
  }

}
