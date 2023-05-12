import { StyledButton, StyledButtonlabel, StyledInput, StyledSearchbarHead, StyledSearchForm } from "./Searchbar.styled"
import { useState } from "react";
import PropTypes from 'prop-types'

export const Searchbar = ({onSubmit})=> {
    const [value, setValue] = useState('');

    const handleChange = ({target: {value}})=> {
        setValue(value.toLowerCase())
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (value.length!==0) {
            onSubmit(value);
            setValue('')
        }
    }

    return (
        <StyledSearchbarHead>
        <StyledSearchForm  onSubmit={handleSubmit}>
            <StyledButton type="submit">
            <StyledButtonlabel>Search</StyledButtonlabel>
            </StyledButton>
        
            <StyledInput
            type="text"
            autoComplete="off"
            autoFocus value={value}
            placeholder="Search images and photos" name="search" onChange={handleChange}
            />
        </StyledSearchForm>
        </StyledSearchbarHead>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}