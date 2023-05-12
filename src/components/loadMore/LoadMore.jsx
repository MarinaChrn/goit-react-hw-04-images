import PropTypes from 'prop-types';
import { StyledLoadMore } from "./LoadMore.styled"

export const LoadMore = ({handleClick})=> {
    return(
        <StyledLoadMore onClick={()=>handleClick()}>
            Load more
        </StyledLoadMore>
    )
}

LoadMore.propTypes = {
    handleClick: PropTypes.func.isRequired,
}