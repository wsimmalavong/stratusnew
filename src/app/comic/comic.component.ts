import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service'
import { Comic } from './comic.model';
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  constructor(public comic: ComicService) { }

  ngOnInit(): void {
    this.comic.get()
        .subscribe((data:Comic) => {
            console.log(data.title)
        });
  }

}
