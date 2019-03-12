import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './component/post-list/post-list.component';
import {PostListItemComponent} from './component/post-list-item/post-list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
