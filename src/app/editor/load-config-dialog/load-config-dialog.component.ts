import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-load-config-dialog',
  templateUrl: './load-config-dialog.component.html',
  styleUrls: ['./load-config-dialog.component.scss'],
})
export class LoadConfigDialogComponent implements OnInit {
  compName!: string;

  constructor(
    private dialogRef: MatDialogRef<LoadConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {}

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.compName);
  }
}
