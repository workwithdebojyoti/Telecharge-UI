import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsFeedFormComponent } from '../news-feed-form/news-feed-form.component';
import { NewsFeedFormRoutingModule } from '../news-feed-form/news-feed-form-routing.module';
import { CommonControlsModule } from '../common-controls/common-controls.module';
@NgModule({
    declarations: [NewsFeedFormComponent],
    imports: [
        CommonModule,
        NewsFeedFormRoutingModule,
        ReactiveFormsModule,
        CommonControlsModule
    ]
})
export class NewsFeedFormModule { }