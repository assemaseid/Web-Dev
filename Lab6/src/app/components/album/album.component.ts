import { Component,OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../album';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-album',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})

export class AlbumComponent implements OnInit{

  albums:Album[]=[];
  newAlbumTitle: string = '';
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
      this.loadAlbums()
    })
  }

  addAlbum() {
    const title = this.newAlbumTitle.trim();
    if (!title) return;
    const newAlbum: Album = { userId: 1, id: 0, title }; 
    this.albumService.createAlbum(newAlbum).subscribe((created) => {
      this.albums.push(created); 
      this.newAlbumTitle = '';   
    });
  }
  
  
}
