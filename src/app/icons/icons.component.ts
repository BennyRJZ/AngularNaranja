import { Component, OnInit } from '@angular/core';
import { ImageService } from 'app/services/image.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  public array = [];
  public arrayOfImages = [];

  constructor(private imageService: ImageService) { }

  deleteImage(id) {
    if (confirm('Desea eliminar la imagen?')){
      this.imageService.deleteImage(id).subscribe(data => {
        this.fetch();
      });
    }
  }

  fetch() {
    this.imageService.getImage()
    .subscribe(res => {
      this.arrayOfImages = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.fetch();
  }

}
