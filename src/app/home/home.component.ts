import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, timer,} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap, filter} from 'rxjs/operators';
import { createHttpObserverable } from '../common/util';
import { core } from '@angular/compiler';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;

    advanceCourses$: Observable<Course[]>;

    constructor() {

    }

    ngOnInit() {

      const http$ = createHttpObserverable('/api/courses');

      const courses$: Observable<Course[]> = http$
        .pipe(
          tap(() => console.log("HTTP request executed!!")),
          map(res => Object.values(res['payload'])),
          shareReplay()
        );

      this.beginnerCourses$ = courses$
          .pipe(
              map(courses => courses
                  .filter(course => course.category == 'BEGINNER'))
          );

      this.advanceCourses$ = courses$
          .pipe(
              map(courses => courses
                  .filter(course => course.category == 'ADVANCED'))
          );

    }
}
