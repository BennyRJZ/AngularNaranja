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
  public currentImage = [];
  


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
  addImage(image_url, description){
    this.imageService.addImage(image_url, description).subscribe(data => {
      this.fetch();
    });
    }
    updateImage(id, image_url, description){
      this.imageService.updateImage(id, image_url, description).subscribe(data => {
        this.fetch();
      }, error => {alert('Error, verifica tus datos')});
      }
  ngOnInit() {
    this.fetch();
  }

}
