import PropTypes from 'prop-types';
import { StyledImage, StyledItem } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({id, smallImg, bigImg, onClick}) => {
    return (
        <StyledItem id={id}>
            <StyledImage src={smallImg} alt="" onClick={()=>onClick(bigImg)}/>
        </StyledItem>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    smallImg: PropTypes.string.isRequired,
    bigImg: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}