import PropTypes from 'prop-types'
import Button from './Button'

const header = ({ title, onClick, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='black' 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onClick} />
        </header>
    )
}


header.defaultProps = {
    title: 'Task Tracker',
}

header.propTypes = {
    title: PropTypes.string.isRequired
}

export default header
