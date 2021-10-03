import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core'

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked 
{
  data : number = 100;
  constructor() 
  { console.log(" Inside Constructor ...");  }

  Increment()
  {
    this.data += 1;
  }
  Decrement()
  {
    this.data -= 1;
  }

  ngDoCheck()
  { console.log(" Inside ngDoCheck ...");  }

  ngOnInit(): void 
  { console.log(" Inside ngOnInit ..."); }

  ngOnChanges()
  { console.log(" Inside ngOnChanges ..."); }
  
  ngOnDestroy()
  { console.log(" Inside  ngOnDestroy ...");  }

  ngAfterContentChecked()
  { console.log(" Inside ngAfterContentChecked ...");  }

  ngAfterContentInit()
  { console.log(" Inside ngAfterContentInit ...");  }

  ngAfterViewInit()
  { console.log(" Inside ngAfterViewInit ...");  }

  ngAfterViewChecked()
  { console.log(" Inside ngAfterViewChecked ...");  }

}
