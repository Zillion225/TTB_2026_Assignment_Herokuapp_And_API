import { test, expect } from '@playwright/test';
import { expect_data } from '../resources/data/testData.json' with { type: 'json' };
const apiKey = process.env.REQRES_API_KEY;


test('Get user profile success', async ({ request }) => {
    const response = await request.get(`https://reqres.in/api/users/12`, {
        headers: {
            'Accept': 'application/json',
            'x-api-key': apiKey
        }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data).toEqual(expect_data.api.case_1.data);
});

test('Get user profile but user not found', async ({ request }) => {
    const response = await request.get(`https://reqres.in/api/users/1234`, {
        headers: {
            'Accept': 'application/json',
            'x-api-key': apiKey
        }
    });
    expect(response.status()).toBe(404);
    const responseBody = await response.json();
    expect(responseBody.data).toEqual(undefined);
});