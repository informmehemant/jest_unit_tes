import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  standalone: true,
  imports: [],
  templateUrl: './matchers.component.html',
  styleUrl: './matchers.component.scss'
})
export class MatchersComponent {

  compileAndroidCode() {
    throw new Error ('you are using Old Angular')
  }

}
