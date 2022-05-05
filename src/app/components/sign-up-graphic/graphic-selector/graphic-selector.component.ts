import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-graphic-selector',
  templateUrl: './graphic-selector.component.html',
  styleUrls: ['./graphic-selector.component.scss'],
})
export class GraphicSelectorComponent implements OnInit {
  @Input()
  parent!: FormGroup;

  @Input()
  graphics!: any[];

  @Output()
  graphicAdded = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAdd(): any {
    this.graphicAdded.emit(this.parent.get('graphicSelector')!.value);
  }
}
