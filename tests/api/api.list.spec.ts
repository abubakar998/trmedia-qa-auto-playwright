// tests/api/login-api.spec.js
import { test, expect, request } from '@playwright/test';
import { makeUniqueName } from '../../utilities/string.util';

test.describe('List flow', {tag: ['@api-v1']}, () => {
    let boardId: Number; 
    let listId: Number;

    test.beforeAll('Create Board', async () => {
        const boardPayload: { name: string } = {
            name: makeUniqueName('board-')
        }
        const context = await request.newContext();
        const response = await context.post('/api/boards', {
            data: boardPayload,
        });

        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        boardId = body.id;
        expect(body.name).toBe(boardPayload.name);
    });

    test('Create List', async () => {
        const listPayload = {
            boardId : boardId as Number,
            name : makeUniqueName('list-') as string,
            order: 0 as Number
        }
        const context = await request.newContext();
        const response = await context.post('/api/lists', {
            data: listPayload,
        });

        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        listId = body.id;
        expect(body.name).toBe(listPayload.name);
        expect(body.order).toBe(listPayload.order);
        expect(body.boardId).toBe(listPayload.boardId);
    });

    test('Delete List', async () => {
    const context = await request.newContext();
    const response = await context.delete(`/api/lists/${listId}`);
    expect(response.ok()).toBeTruthy();
    });

    test.afterAll('Delete Board', async () => {
    const context = await request.newContext();
    const response = await context.delete(`/api/boards/${boardId}`);
    expect(response.ok()).toBeTruthy();
    });
});
