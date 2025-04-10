import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../album';
import { Photo } from '../../photo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})

export class AlbumPhotosComponent implements OnInit {


  album!:Album;
  photos:Photo[] = [];

  constructor(
    private albumsService:AlbumsService,
    private route:ActivatedRoute,
    private router:Router) {}


  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'))

      this.albumsService.getAlbumById(id).subscribe((data)=>{
        this.album=data;
      })

      this.albumsService.getPhotos(id).subscribe((data)=>{
        this.photos = data;
      })
  }

  return() {
    this.router.navigate(['/album-details',this.album.id])
    }
}
