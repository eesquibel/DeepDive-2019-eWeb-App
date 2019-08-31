import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { IndComponent } from './profile/ind/ind.component';
import { CstComponent } from './profile/cst/cst.component';
import { AdrComponent } from './profile/adr/adr.component';
import { DirectoryComponent } from './directory/directory.component';
import { SaveComponent } from './profile/save/save.component';
import { DirectoryItemComponent } from './directory/directory-item/directory-item.component';
import { ChunkPipe } from './chunk.pipe';
import { FilterPipe } from './filter.pipe';
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
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
