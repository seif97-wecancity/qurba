import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  itemsFooter = [
    {
      nameItem : 'ClickTik',
      img : '01.png'
    },
    {
      nameItem : '@ 2022 ClickTik',
      img : null
    }
  ]
}
