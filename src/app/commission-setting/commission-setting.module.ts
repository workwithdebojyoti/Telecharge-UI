import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommissionSettingComponent } from '../commission-setting/commission-setting.component';
import { CommissionSettingRoutingModule } from '../commission-setting/commission-setting-routing.module';
import { DemoMaterialModule } from '../material-module';
import { CommonControlsModule } from '../common-controls/common-controls.module';
@NgModule({
    declarations: [CommissionSettingComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CommissionSettingRoutingModule,
        DemoMaterialModule,
        CommonControlsModule
    ],
    exports: [CommissionSettingComponent]
})
export class CommissionSettingModule { }
