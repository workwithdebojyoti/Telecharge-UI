import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared-module';
import { AllProfileModule } from '../all-profile/all-profile.module';
import { EditProfileModule } from '../edit-profile/edit-profile.module';
import { CommonControlsModule } from '../common-controls/common-controls.module';
@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AllProfileModule,
        EditProfileModule,
        CommonControlsModule
    ]
})
export class ProfileModule { }
