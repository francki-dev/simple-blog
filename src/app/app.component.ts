import {Component} from '@angular/core';
import {Post} from './classes/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'simple-blog';

  posts: [Post] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitmagna' +
        ' aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      loveIts: 1,
      createdAt: new Date()
    }
  ];
}
