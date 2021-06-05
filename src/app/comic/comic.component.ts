import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service'
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  constructor(public comic: ComicService) { }

  ngOnInit(): void {
    console.log(this.comic.get());
  }

}
