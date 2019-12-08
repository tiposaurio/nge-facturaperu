import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgeBreadcrumbIconModule, NgeButtonIconModule,
  NgeConfirmDialogModule,
  NgeInputIconModule,
  NgeTreeViewModule,
  NgeDividerModule,
  NgeFieldsetModule,
  NgeStepsModule,
  NgeFacturaperuModule} from 'nge-facturaperu';
import { TreeViewComponent, InputIconComponent, ButtonIconComponent,
  ConfirmDialogComponent, StepsComponent, FieldsetComponent, DividerComponent } from './components';
import { AppRoutingModule } from './app-rounting.module';

  export const COMPONENTS: any[] = [
    InputIconComponent, ButtonIconComponent,
    ConfirmDialogComponent,
    // MenuComponent, 
    StepsComponent,
    FieldsetComponent, DividerComponent,
    TreeViewComponent,
  ];
export const GW3_MODULES: any[] = [
  NgeFacturaperuModule,
  NgeBreadcrumbIconModule,
  NgeButtonIconModule,
  NgeInputIconModule,
  NgeConfirmDialogModule,
  NgeTreeViewModule,
  NgeDividerModule,
  NgeFieldsetModule,
  NgeStepsModule
];
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...GW3_MODULES,
    // RouterModule.forRoot(AppRoutingModule),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
