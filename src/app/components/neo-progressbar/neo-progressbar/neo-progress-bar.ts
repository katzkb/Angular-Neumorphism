import {
  Component,
  OnInit,
  ElementRef,
  NgZone,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import * as style from '@angular/material/progress-bar';
import { NumberInput } from '@angular/cdk/coercion';

@Component({
  selector: 'neo-progress-bar',
  templateUrl: './neo-progress-bar.html',
  styleUrls: ['./neo-progress-bar.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'neo-progress-bar',
  }
})
export class NeoProgressBar extends MatProgressBar
  implements AfterViewInit, OnDestroy {
  constructor(public _neoElementRef: ElementRef, _ngZone: NgZone) {
    super(_neoElementRef, _ngZone);
  }

  AfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }

  static ngAcceptInputType_value: NumberInput;
}
