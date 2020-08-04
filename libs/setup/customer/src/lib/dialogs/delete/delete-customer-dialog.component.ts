import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { CustomerFacade } from '../../+state/customers/customer.facade';

@Component({
  selector: 'coldstorage-delete-customer-dialog',
  templateUrl: './delete-customer-dialog.component.html',
  styleUrls: ['./delete-customer-dialog.component.scss'],
})
export class DeleteCustomerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public facade: CustomerFacade
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.facade.deleteCustomer(this.data.id);
  }
}
