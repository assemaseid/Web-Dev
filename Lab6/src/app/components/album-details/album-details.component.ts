import { Component,OnInit } from '@angular/core';
import { Album } from '../../album';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})

export class AlbumDetailsComponent implements OnInit{

  albums:Album[]=[]
  album!:Album;
  editedTitle: string = '';
 
  
  constructor(private albumService:AlbumsService,
              private route:ActivatedRoute,
              private router:Router) {}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumById(id).subscribe((data) => {
      this.album = data;
      this.editedTitle = data.title;
    })
    this.albumService.getAlbums().subscribe(data=>{
      this.albums=data;
    })
  }

  return() {
    this.router.navigate(['/album'])
  }

  save() {
    if (this.album) {
      const updatedAlbum = { ...this.album, title: this.editedTitle };
      this.albumService.updateAlbum(this.album.id, updatedAlbum).subscribe(() => {
        this.albums = this.albums.map(album =>
          album.id === updatedAlbum.id ? updatedAlbum : album
        );
        this.album = updatedAlbum;
        alert('Title edited');
      });
    }
  }

  photos() {
    this.router.navigate(['/album', this.album.id, 'photos']);
  }
}
