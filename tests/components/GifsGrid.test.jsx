import { render, screen } from '@testing-library/react';
import { GifsGrid } from '../../src/components/GifsGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <GifsGrid />', () => {

    const category = 'zelda';

    test('should show the loading initially', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true,
        });
        render(<GifsGrid category={ category } />); //screen.
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('should show items when the GIFs are loaded', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'zelda',
                url: 'https://localhost/zelda.jpg',
            },
            {
                id: '123',
                title: 'link',
                url: 'https://localhost/link.jpg',
            }
        ]

        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false,
        });

        render(<GifsGrid category={ category } />); 
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});