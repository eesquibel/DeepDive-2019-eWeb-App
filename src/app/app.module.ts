import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChunkPipe } from './chunk.pipe';
import { DefaultComponent } from './default/default.component';
import { DirectoryItemComponent } from './directory/directory-item/directory-item.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';
import { AdrComponent } from './profile/adr/adr.component';
import { CstComponent } from './profile/cst/cst.component';
import { IndComponent } from './profile/ind/ind.component';
import { ProfileComponent } from './profile/profile.component';
import { SaveComponent } from './profile/save/save.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IndComponent,
    CstComponent,
    AdrComponent,
    DirectoryComponent,
    SaveComponent,
    DirectoryItemComponent,
    ChunkPipe,
    FilterPipe,
    SortPipe,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.base_href}],
  bootstrap: [AppComponent]
})
export class AppModule { }
