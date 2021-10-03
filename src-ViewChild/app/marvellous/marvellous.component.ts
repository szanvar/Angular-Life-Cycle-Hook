import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  templateUrl: './marvellous.component.html'
})
export class MarvellousComponent implements  AfterViewInit
{
  @ViewChild("myref") myValue: ElementRef | any;

  ngAfterViewInit()
  {
    console.log(this.myValue);
    this.myValue.nativeElement.focus()
  }
  
}