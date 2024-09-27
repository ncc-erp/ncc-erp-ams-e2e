import { Table } from "@/pageObjects/components/controls/Table";
import { When, Then } from "@cucumber/cucumber";
import { expect } from 'chai';

When("I sort {string} column in {string} order", async function (columnName: string, sortingType: string) {
    const table = new Table();
    if (sortingType === 'descending') {
        await table.clickHeaderColumn(columnName);
    }
    await table.clickHeaderColumn(columnName);
});

Then("I expect {string} column to be sorted in {string} order", async function (columnName: string, sortingType: string) {
    const table = new Table();
    expect(await table.checkColumnSorting(sortingType, columnName)).to.equal(true);
});
