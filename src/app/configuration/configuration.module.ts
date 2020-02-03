import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { CommonControlsModule } from '../common-controls/common-controls.module';
@NgModule({
    declarations: [ConfigurationComponent],
    imports: [
        CommonModule,
        ConfigurationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonControlsModule
    ]
})
export class ConfigurationModule { }
