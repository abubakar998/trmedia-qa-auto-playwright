import { test, expect } from '@playwright/test';
import { BoardsPage } from '../../pages/boards';
import { BoardPage } from '../../pages/board';
import { makeUniqueName } from '../../utilities/string.util';

test.describe('Board flow', {tag: ['@ui-v1']}, () => {
    const boardTitle = makeUniqueName('board-')
    const listName = makeUniqueName('list-')
    const listName2 = makeUniqueName('list2-')

    test('Create New Board and Verify Board created successfully', async ({ page }) => {
        const boardsPage = new BoardsPage(page);
        const boardPage = new BoardPage(page);
        await boardsPage.goto();
        await expect(boardsPage.myBoardsTitle).toHaveText('My Boards');
        await boardsPage.createNewBoard(boardTitle);

        // Expect a title "to contain" a substring.
        await expect(boardPage.boardTitle).toHaveText(boardTitle);
    });

    test('Add two lists and verify two lists created successfully', async ({ page }) => {
        const boardsPage = new BoardsPage(page);
        const boardPage = new BoardPage(page);
        await boardsPage.goto();
        await expect(boardsPage.myBoardsTitle).toHaveText('My Boards');

        await boardsPage.selectBoardByText(boardTitle).click()
        await expect(boardPage.boardTitle).toHaveText(boardTitle);

        // Add first list
        await boardPage.addNewList(listName);
        // Verify first list created successfully
        await expect(boardPage.listName.first()).toHaveValue(listName);

        // Add second list
        await boardPage.addNewList(listName2);
        // Verify second list created successfully
        await expect(boardPage.listName.nth(1)).toHaveValue(listName2);
    });

    test('Delete List', async ({ page }) => {
        const boardsPage = new BoardsPage(page);
        const boardPage = new BoardPage(page);
        await boardsPage.goto();
        await expect(boardsPage.myBoardsTitle).toHaveText('My Boards');
        await boardsPage.selectBoardByText(boardTitle).click()
        // Expect a title "to contain" a substring.
        await expect(boardPage.boardTitle).toHaveText(boardTitle);
        await expect(boardPage.listName).toHaveCount(2);

        // Delete first list
        await boardPage.deleteListByOrder()
        await expect(boardPage.listName).toHaveCount(1);
        await expect(boardPage.listName.first()).toHaveValue(listName2);
    });

    test.afterAll('Delete Board', async ({page}) => {
        const boardsPage = new BoardsPage(page);
        const boardPage = new BoardPage(page);
        await boardsPage.goto();
        await expect(boardsPage.myBoardsTitle).toHaveText('My Boards');
        await boardsPage.selectBoardByText(boardTitle).click()
        // Expect a title "to contain" a substring.
        await expect(boardPage.boardTitle).toHaveText(boardTitle);

        await boardPage.deleteBoard()
        await expect(boardsPage.myBoardsTitle).toHaveText('My Boards');
    });
});
