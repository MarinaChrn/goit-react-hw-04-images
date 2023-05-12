import { StyledButton, StyledButtonlabel, StyledInput, StyledSearchbarHead, StyledSearchForm } from "./Searchbar.styled"
import { Component } from "react";
import PropTypes from 'prop-types'

export class Searchbar extends Component {
    state = {
        value: ' ',
    }

    handleChange = ({target: {value}})=> {
        this.setState({value: value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.value.length!==0) {
            this.props.onSubmit(this.state.value);
            this.setState({value: ''})
        }
    }

    render (){
        return (
            <StyledSearchbarHead>
            <StyledSearchForm  onSubmit={this.handleSubmit}>
                <StyledButton type="submit">
                <StyledButtonlabel>Search</StyledButtonlabel>
                </StyledButton>

                <StyledInput
                type="text"
                autoComplete="off"
                autoFocus value={this.state.value}
                placeholder="Search images and photos" name="search" onChange={this.handleChange}
                />
            </StyledSearchForm>
            </StyledSearchbarHead>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}