import { Component,OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../album';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album',
  imports: [CommonModule,RouterModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})

export class AlbumComponent implements OnInit{

  albums:Album[]=[];
  
  constructor(private albumService:AlbumsService){}

  ngOnInit():void{
    console.log('Album')
    this.loadAlbums();
  }

  loadAlbums() {
    this.albumService.getAlbums().subscribe((data) => {
      console.log('Loaded albums:', data); 
      this.albums = data;
    });
  }
  

  deleteAlbum(id:number) {
    this.albumService.deleteAlbum(id).subscribe(()=>{
      this.albums = this.albums.filter(album =>album.id !==id )
      console.log('deleted'+`${id}`)
    })
  }

}
