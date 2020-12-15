import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { response } from 'express';
import { noop, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObserverable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
