import React from 'react'
import PropTypes from 'prop-types'

const InputField = (props) => {
    const {label, name, onChange} = props;
    return (
        <div>
            <label>
                {label}
                <input name={name} onChange={onChange}/>
            </label>
        </div>
    )
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default InputField
