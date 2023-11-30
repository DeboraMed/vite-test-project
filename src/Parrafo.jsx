import propTypes from 'prop-types';

const Parrafo = ({text}) => {
    return (
        <p>{text}</p>
    );
}

Parrafo.propTypes={
    text: propTypes.string.isRequired
}

export default Parrafo;