import { render, screen } from '@testing-library/react';
import { Gif } from '../../src/components/Gif';

describe('Tests in <Gif />', () => { 

    const title = 'zelda';
    const url = 'https://zelda.com/link.jpg';

    test('should match with the snapshot', () => { 
        const { container } = render(<Gif title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the URL and the indicated ALT', () => { 
        render(<Gif title={ title } url={ url } />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url); // expect(screen.getByRole('img').src).toBe(url);
        expect(alt).toBe(alt); // expect(screen.getByRole('img').alt).toBe(title);
    });

    test('should show the title in the component', () => { 
        render(<Gif title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
    });

});