import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b>Venedictto</b> 2019</span>
    <div class="socials">
      <a href="https://github.com/Venedictto/probability-simulations-" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
