import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
    declarations: [
        FooterComponent,
        TopbarComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
    ],
    exports: [
        FooterComponent,
        TopbarComponent
    ]
})
export class ComponentsModule {}