import PropTypes from 'prop-types';

export const Gif = ({ title, url }) => {
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
