import {Component} from '@angular/core';
import {Post} from './interface/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

    posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitmagna' +
        ' aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      loveIts: 1,
        created_at: new Date()
    },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitmagna' +
                ' aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            loveIts: 3,
            created_at: new Date()
        },
        {
            title: 'Mon troisième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitmagna' +
                ' aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            loveIts: 0,
            created_at: new Date()
    }
  ];
}
