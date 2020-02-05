import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RankAchieverListRoutingModule } from './rank-achiever-list-routing.module';
import { RankAchieverListComponent } from './rank-achiever-list.component';
import { CommonControlsModule } from '../common-controls/common-controls.module';
@NgModule({
    declarations: [RankAchieverListComponent],
    imports: [
        CommonModule,
        RankAchieverListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonControlsModule
    ]
})
export class RankAchieverListModule { }
