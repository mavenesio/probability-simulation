import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar
        class="menu-sidebar"
        tag="menu-sidebar"
        state="sidebarStatus"
        [responsive]="true"
        >
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column (click)="collapse()">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent{
  constructor(private sidebarService: NbSidebarService) {
/*
    this.sidebarService.onToggle().subscribe(res => {
      res.compact = true;
    });
*/
  }

  public sidebarStatus = 'compacted';

  public collapse() {
   this.sidebarService.collapse('menu-sidebar');
  }
}
