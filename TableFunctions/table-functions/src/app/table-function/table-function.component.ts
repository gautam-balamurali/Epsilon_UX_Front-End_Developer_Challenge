import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableFunctionService } from '../config/services/table-function.service';
import { ProductListConfig } from '../core/app.config';
import { ProductModel } from '../models/product.model';

/**
 * Table Function Component to render the table details
 */
@Component({
  selector: 'app-table-function',
  templateUrl: './table-function.component.html',
  styleUrls: ['./table-function.component.scss'],
})
export class TableFunctionComponent implements OnInit {
  displayedColumns = ProductListConfig.displayedColumns;
  dataSource: MatTableDataSource<ProductModel>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public tableFunctionService: TableFunctionService) {}

  ngOnInit(): void {
    this.fetchProductDetails();
  }

  /**
   * Fetches product details
   */
  fetchProductDetails() {
    this.tableFunctionService.getProductDetails().subscribe({
      next: (response) => {
        try {
          this.dataSource = new MatTableDataSource(response?.cookies);
          this.dataSource.sort = this.sort;
        } catch (error) {
          console.error(error);
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
