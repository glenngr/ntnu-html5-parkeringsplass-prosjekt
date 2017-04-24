import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design';

import { HelpAboutComponent } from './help-about.component';
import { ShowMeHowDialogComponent } from './show-me-how/show-me-how-dialog.component';
import { ShowMeHowComponent } from './show-me-how/show-me-how.component';

@NgModule({
    imports: [MaterialDesignModule, CommonModule],
    exports: [HelpAboutComponent],
    entryComponents: [ShowMeHowDialogComponent],
    declarations: [HelpAboutComponent, ShowMeHowComponent, ShowMeHowDialogComponent],
    providers: [],
})
export class HelpAboutModule { }
