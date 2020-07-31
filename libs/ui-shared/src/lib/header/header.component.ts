import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'coldstorage-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isAuthenticated: boolean;
  @Output() public sideNavToggle = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onToggleSidenav(): void {
    this.sideNavToggle.emit();
  }
}
