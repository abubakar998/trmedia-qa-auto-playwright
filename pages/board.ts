// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class BoardPage {
  readonly page: Page;
  readonly boardTitle: Locator;
  readonly boardOptionsButton: Locator;
  readonly listOptionsButton: Locator;
  readonly deleteBoardBtn: Locator;
  readonly createListBtn: Locator;
  readonly addListBtn: Locator;
  readonly addListInput: Locator;
  readonly listName: Locator;
  readonly listOptionBtn: Locator;
  readonly deleteListBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.boardTitle = page.locator('//input[@data-cy="board-title"]/preceding-sibling::div');
    this.boardOptionsButton = page.locator('[data-cy="board-options"]');
    this.listOptionsButton = page.locator('[data-cy="list-options"]');
    this.deleteBoardBtn = page.locator('[data-cy="delete-board"]');
    this.createListBtn = page.locator('[data-cy="create-list"]')
    this.addListBtn = page.locator('button', { hasText: "Add list" })
    this.addListInput = page.locator('[data-cy="add-list-input"]');
    this.listName = page.locator('[data-cy="list-name"]');
    this.listOptionBtn = page.locator('[data-cy="list-options"]');
    this.deleteListBtn = page.locator('[data-cy="delete-list"]');

  }

  async deleteBoard() {
    await this.boardOptionsButton.click();
    await this.deleteBoardBtn.click();
  }

  async addNewList(listName: string) {
    await this.page.mouse.click(0, 0);
    await this.createListBtn.click();
    await this.addListInput.fill(listName);
    await this.addListBtn.click();

  }

  async deleteListByOrder(n=0) {
    await this.listOptionBtn.nth(n).click();
    await this.deleteListBtn.click();  
  }
}
