import { Gif } from './Gif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifsGrid = ({ category }) => {
  
  const { gifs, isLoading } = useFetchGifs(category);
  
  return (
    <>
      <h3>{ category }</h3>
      { isLoading && <h2>Loading...</h2> }
      <div className='card-grid'>
        { 
          gifs.map( ( gif ) => 
            <Gif key={ gif.id } { ...gif } /> 
          )
        }
      </div>
    </>
  )
}

GifsGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
