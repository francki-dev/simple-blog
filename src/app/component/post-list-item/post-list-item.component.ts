import {Component, DoCheck, Input} from '@angular/core';
import {Post} from '../../interface/post';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements DoCheck {

    @Input() post: Post;

    loveIt: string;

    constructor() {
    }

    incrementPost() {
        ++this.post.loveIts;
    }

    decrementPost() {
        --this.post.loveIts;
    }

    ngDoCheck(): void {
        if (this.post.loveIts > 0) {
            this.loveIt = 'list-group-item-success';
        } else if (this.post.loveIts < 0) {
            this.loveIt = 'list-group-item-danger';
        } else {
            this.loveIt = '';
        }
    }
}
