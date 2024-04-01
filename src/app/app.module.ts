import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaComponent } from './components/pizza/pizza.component';
import { RollComponent } from './components/roll/roll.component';
import { FriesComponent } from './components/fries/fries.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './shared/grid/grid.component';
import { DetailComponent } from './shared/detail/detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

const appRouting: Routes = [
  { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
  { path: 'pizzas', component: PizzaComponent },
  { path: 'pizzas/:id', component: DetailComponent },
  { path: 'rolls', component: RollComponent },
  { path: 'rolls/:id', component: DetailComponent },
  { path: 'fries', component: FriesComponent },
  { path: 'fries/:id', component: DetailComponent },
  { path: 'user', component: UserComponent },
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    RollComponent,
    FriesComponent,
    GridComponent,
    PageNotFoundComponent,
    UserComponent,
    FormComponent,
    ListComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRouting),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
