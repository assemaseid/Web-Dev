import { Component,OnInit } from '@angular/core';
import { Album } from '../../album';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})

export class AlbumDetailsComponent implements OnInit{

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
  }

  return() {
    this.router.navigate(['/album'])
  }

  save() {
    if(this.album) {
      const updatedAlbum = {...this.album, title:this.editedTitle}
      this.albumService.updateAlbum(this.album.id, updatedAlbum).subscribe(()=>{
        alert('Title edited')
      })
    }
  }

  photos() {
    this.router.navigate(['/album', this.album.id, 'photos']);
  }
}
