import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests in the custom hook: useFetchGifs', () => { 
    
    test('should return the initial state', () => { 
        const { result } = renderHook( () => useFetchGifs('zelda'));
        const { gifs, isLoading } = result.current;
        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return a GIFs array and isLoading is false', async() => { 
        const { result } = renderHook( () => useFetchGifs('zelda'));
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );
        const { gifs, isLoading } = result.current;
        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});