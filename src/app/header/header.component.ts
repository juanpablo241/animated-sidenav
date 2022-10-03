import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages, notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.componentP2.scss']
})
export class HeaderComponent implements OnInit {


  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;
  notifications = notifications;
  userItems = userItems;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize($event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);

  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0]
  }

  getHeadClass(): string {
    let styleCLass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleCLass = 'head-trimmed';
    } else {
      styleCLass = 'head-md-screen';
    }
    return styleCLass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }

}
