import { getGifsFetch } from '../../src/helpers/getGifsFetch';

describe('Tests in getGifsFetch', () => {

    test('should return a GIFs array', async() => { 
        const gifs = await getGifsFetch('zelda');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });

});