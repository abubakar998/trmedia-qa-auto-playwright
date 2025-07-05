// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class BoardsPage {
  readonly page: Page;
  readonly createBoardContainer: Locator;
  readonly createBoardInput: Locator;
  readonly createBoardButton: Locator;
  readonly myBoardsTitle:Locator;

  constructor(page: Page) {
    this.page = page;
    this.createBoardContainer = page.locator('[data-cy="create-board"]');
    this.createBoardInput = page.locator('[data-cy="new-board-input"]');
    this.createBoardButton = page.locator('[data-cy="new-board-create"]');
    this.myBoardsTitle = page.locator('[data-cy="board-list"] h1').first();
  }

  selectBoardByText(text:string):Locator {
    return this.page.locator('[data-cy="board-item"] h2', { hasText: text }).first();
  }
  async goto() {
    await this.page.goto('/');
  }
  async createNewBoard(boardTitle: string) {
    await this.createBoardContainer.click();
    await this.createBoardInput.fill(boardTitle);
    await this.createBoardButton.click();
  }
}
