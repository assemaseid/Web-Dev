import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent,
        title:'Home Page'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'About Page'
    },
    {
        path:'album',
        component:AlbumComponent,
        title:'Albums Page'
    },
    {
        path:'album-details/:id',
        component:AlbumDetailsComponent,

    },
    {
        path:'album/:id/photos',
        component:AlbumPhotosComponent
    }
];

