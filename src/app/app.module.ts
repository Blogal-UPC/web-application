import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarWriterComponent } from './shared/components/navbar-writer/navbar-writer.component';
import { NavbarReaderComponent } from './shared/components/navbar-reader/navbar-reader.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CategoryFormComponent } from './pages/writer/category-form/category-form.component';
import { CategoryListComponent } from './pages/writer/category-list/category-list.component';
import { ArticleListComponent } from './pages/writer/article-list/article-list.component';
import { ArticleFormComponent } from './pages/writer/article-form/article-form.component';
import { WriterLayoutComponent } from './pages/writer/writer-layout/writer-layout.component';
import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout.component';
import { ArticleCatalogComponent } from './pages/article/article-catalog/article-catalog.component';
import { ArticleDetailComponent } from './pages/article/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarWriterComponent,
    NavbarReaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoryFormComponent,
    CategoryListComponent,
    ArticleListComponent,
    ArticleFormComponent,
    WriterLayoutComponent,
    AuthLayoutComponent,
    ArticleCatalogComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }