import { Component, OnInit } from '@angular/core';
import { NgeConfirmDialogService } from 'nge-facturaperu';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private confirmDialogService: NgeConfirmDialogService) { }

  ngOnInit() {
  }

  public onConfirm() {
    console.log('confirm method');

    this.confirmDialogService.confirmSave()
      .then(this.success.bind(this))
      .catch(this.cancel.bind(this));
  }

  private success(result: any) {
    console.log('PODENOS GUARDAR');
  }
  private cancel(reason: any) {
    console.log('SE CANCELÓ');
  }
}
