import { Component } from '@angular/core';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';
@Component({
  selector: 'app-notas',
  imports: [SideBarComponent,TopBarComponent],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {

}
