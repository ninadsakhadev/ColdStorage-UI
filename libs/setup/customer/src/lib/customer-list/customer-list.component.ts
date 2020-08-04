import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AddCustomerDialogComponent } from '../dialogs/add/add-customer-dialog.component';
import { Customer } from '@swamisamarth/api-interfaces';
import { CustomerFacade } from '../+state/customers/customer.facade';
import { DeleteCustomerDialogComponent } from '../dialogs/delete/delete-customer-dialog.component';
import { EditCustomerDialogComponent } from '../dialogs/edit/edit-customer-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaginatorOptions } from '@swamisamarth/ui-shared';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'swamisamarth-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public displayedColumns: string[];
  columnNames = [
    {
      id: 'id',
      value: 'Id',
    },
    {
      id: 'name',
      value: 'Name',
    },
    {
      id: 'address',
      value: 'address',
    },
    {
      id: 'phone',
      value: 'Phone No',
    },
  ];
  public paginatorOptions = PaginatorOptions;
  public dataSource = new MatTableDataSource<Customer>();
  public customerTotal: number;
  public noData: Customer[] = [];
  public loading: boolean;
  public error$: Observable<string>;
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  id: string;
  constructor(public facade: CustomerFacade, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.facade.allCustomer$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((customers) => this.initializeData(customers));

    this.facade.loading$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((loading) => {
        if (loading) {
          this.dataSource = new MatTableDataSource([] as Customer[]);
        }
        this.loading = loading;
      });

    this.error$ = this.facade.error$;
    this.facade.getAll();
    this.displayedColumns = [...this.columnNames.map((x) => x.id), 'actions']; //
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public doFilter(value: string): void {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  addNew() {
    this.dialog.open(AddCustomerDialogComponent, {
      data: { customer: Customer },
    });
  }

  startEdit(row: Customer) {
    this.id = row.id;
    this.dialog.open(EditCustomerDialogComponent, {
      data: {
        ...row,
      },
    });
  }

  deleteItem(row: Customer) {
    this.id = row.id;
    this.dialog.open(DeleteCustomerDialogComponent, {
      data: { ...row },
    });
  }

  private initializeData(customers: Customer[]): void {
    this.dataSource = new MatTableDataSource(customers.length ? customers : []);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
