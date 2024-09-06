import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import LoginPage from '@/pageObjects/LoginPage'; 
import DashboardPage from '@/pageObjects/DashboardPage'; 

Given('I login in AMS successfully', async function () {
    await LoginPage.login('nccadmin', '123456a@'); 
  });

// Scenario: View all assets
When('I click on Asset dropdown', async function () {
    await DashboardPage.clickAssetDropdown();
  });
  
  When('I click on All asset sub nav', async function () {
    await DashboardPage.clickAllAssetsSubNav();
  });
