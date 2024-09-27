import { BaseComponent } from "../BaseComponent";
import { HTMLElement } from "./HtmlElement";
import { HtmlElementCollection } from "./HtmlElementCollection";
import { Pagination } from "./Pagination";

export class Table extends BaseComponent {
  get paginations() {
    return HtmlElementCollection.by('.ant-table-pagination');
  }
  get topPagination() {
    return new Pagination(this.paginations.get(0));
  }
  get bottomPagination() {
    return new Pagination(this.paginations.get(1));
  }

  get headerColumns() {
    return HtmlElementCollection.by('.ant-table-thead .ant-table-cell');
  }
  get checkAllCheckbox() {
    return HTMLElement.by('.ant-table-selection');
  }

  get tableRows() {
    return HtmlElementCollection.by('.ant-table-row');
  }

  async clickHeaderColumn(name: string) {
    await this.headerColumns.findElementByText(name).click();
  }

  async selectAll() {
    await this.checkAllCheckbox.click();
  }

  async selectByRowIndex(index) {
    await this.tableRows.get(index).findElement('.ant-table-selection-column .ant-checkbox').click();
  }

  async getCell(columnName: string, rowIndex: number) {
    const index = await this.headerColumns.getIndexByText(columnName);
    const cell = await this.tableRows.get(rowIndex).findElements('.ant-table-cell').get(index);

    return cell;
  }

  async getColumnIdex(columnName: string) {
    return await this.headerColumns.getIndexByText(columnName);
  }

  async getCellValue(columnName: string, rowIndex: number) {
    const cell = await this.getCell(columnName, rowIndex);

    return cell.getText();
  }

  async checkColumnSorting(sortingType: string, columnName: string) {
    const valuesArray = await this.getColumnValuesArray(columnName);
    const sortedArray = [...valuesArray].sort((a, b) => {
        if (sortingType === 'ascending') {
            return a.toString().localeCompare(b.toString(), 'vi');
        } else if (sortingType === 'descending') {
            return b.toString().localeCompare(a.toString(), 'vi');
        }
        return 0;
    });
    return JSON.stringify(valuesArray) === JSON.stringify(sortedArray);
}

  async getColumnValuesArray(columnName: string) {
    const index = await this.getColumnIdex(columnName);
    const valuesArray: any[] = await HtmlElementCollection.by(`.ant-table-row > td:nth-child(${index + 1})`).getTexts();
    return valuesArray;
  }
}
