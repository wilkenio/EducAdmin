import { Component } from '@angular/core';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';
@Component({
  selector: 'app-turmas',
  imports: [SideBarComponent,TopBarComponent],
  templateUrl: './turmas.component.html',
  styleUrl: './turmas.component.css'
})
export class TurmasComponent {

}
