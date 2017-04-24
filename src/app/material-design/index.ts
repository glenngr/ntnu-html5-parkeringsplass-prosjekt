import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdDialogModule, MdSidenavModule, MdProgressSpinnerModule, MdRadioModule,
    MdButtonModule, MdButtonToggleModule, MdSliderModule, MdSelectModule,
    MdOptionModule, MdTooltipModule, MdIconModule, MdMenuModule, MdToolbarModule,
    MdCardModule
} from '@angular/material';

const MATERIAL_MODULES = [
    MdDialogModule, MdSidenavModule, MdProgressSpinnerModule, MdRadioModule,
    MdButtonModule, MdButtonToggleModule, MdSliderModule, MdSelectModule,
    MdOptionModule, MdTooltipModule, MdIconModule, MdMenuModule, MdToolbarModule,
    MdCardModule
];

@NgModule({
    imports: [...MATERIAL_MODULES, BrowserAnimationsModule],
    exports: [...MATERIAL_MODULES],
    declarations: [],
    providers: [],
})
export class MaterialDesignModule { }

