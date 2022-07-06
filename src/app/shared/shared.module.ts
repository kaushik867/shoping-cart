import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MinTextLengthPipe } from './min-text-length.pipe';
import { MinTitlePipe } from './min-title.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MinTextLengthPipe,
    MinTitlePipe,
    PageNotFoundComponent,
    ServerErrorComponent,
    LoaderComponent,
  ],
  imports: [
    RouterModule,
    MaterialModule,
  ],
  exports: [
    MinTextLengthPipe,
    MinTitlePipe,
    LoaderComponent,
  ]
})
export class SharedModule { }
