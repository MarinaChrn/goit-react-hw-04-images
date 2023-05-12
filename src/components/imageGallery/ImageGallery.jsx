import { useState, useEffect } from "react"
import fetchData from "api"
import { StyledImageGallery } from "./ImageGallery.styled"
import { ImageGalleryItem } from "components/imageGalleryItem/ImageGalleryItem"
import { Loader } from "components/loader/Loader"
import { LoadMore } from "components/loadMore/LoadMore"
import { Modal } from "components/modal/Modal"
import PropTypes from 'prop-types'

const ERROR_MESSAGE = "Не вийшло взяти дані, спробуйте ще раз"

// export default class ImageGallery extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             value: props.value,
//             images:[],
//             isLoading: false,
//             error: null,
//             page: 1,
//             total: 0,
//             modalOpen: false,
//             modalData: ''
//         }
//     }

//     fetchSearch = (search,page) => {
//         try {
//             this.setState({isLoading: true, error: null});
//             const fetchedSearch = fetchData(search, page);
//             fetchedSearch.then(response=> {
//                 this.setState(prevState=>{
//                     if (prevState.images!==response.hits) {
//                         return ({images: [...prevState.images, response.hits], total: response.total})
//                     } 
//                 })
//             })
//         } catch(error) {
//             this.setState({error: ERROR_MESSAGE})
//         } finally {
//             this.setState({isLoading: false});
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(this.props.value.trim()!==prevProps.value.trim()) {
//             this.setState({value: this.props.value.trim()})
//             this.setState({images: []});
//             this.setState({page:1});
//             const search = this.props.value;
//             this.fetchSearch(search, 1)
//         } 
//         }

//     handleCloseModal=()=> {
//         this.setState({ modalOpen: false});
//     }

//     handleOpenModal=(bigImg)=> {
//         this.setState({ modalData: bigImg});
//         this.setState({ modalOpen: true});
//     }

//     handleClick=()=>{
//         const newPage = this.state.page+1;
//         this.setState(prevState => ({ page: newPage}));
//         const addImages =()=> {
//             const search = this.props.value;
//             this.fetchSearch(search,newPage);
//         }
//         addImages()
//     }
   
//     render() {
//         const imagesArray = [];
//         const {isLoading, error,images,total,modalOpen,modalData} = this.state;
//         images.map(image=> imagesArray.push(...image));
//         const maxImages = total/12;
//         return (
//             <div>
//                 {isLoading && <Loader/>}
//                 {error&&<p>{error}</p>}
//                 {images&&!isLoading&&<StyledImageGallery>
//                     {(imagesArray.map(image => 
//                         <ImageGalleryItem id={image.id} key={image.id} smallImg={image.webformatURL} bigImg={image.largeImageURL} onClick={this.handleOpenModal}/>
//                     ))}
//                 </StyledImageGallery>}
//                 {imagesArray.length>0&&total>12&&imagesArray.length<=maxImages&&<LoadMore handleClick={this.handleClick}/>}
//                 {modalOpen&&<Modal onClose={this.handleCloseModal} modalData={modalData}/>}
//             </div>
//         )
//     }
// }

export const ImageGallery = ({imgValue})=> {
    const [value, setValue] = useState(imgValue);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');

    

    // const fetchSearch = useCallback((search,page) => {
    //     try {
    //         setIsLoading(true);
    //         setError(null);
    //         const fetchedSearch = fetchData(search, page);
    //         fetchedSearch.then(response=> {
    //             // this.setState(prevState=>{
    //             //     if (prevState.images!==response.hits) {
    //             //         return ({images: [...prevState.images, response.hits], total: response.total})
    //             //     } 
    //             // })
    //             if (images!==response.hits) {
    //                 setImages([...images, response.hits]);
    //                 setTotal(response.total);
    //             }
    //         })
    //     } catch(error) {
    //         setError(ERROR_MESSAGE);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }, [images])

    useEffect(()=> {
        setValue(imgValue.trim())
        setImages([]);
        setPage(1);
            try {
                setIsLoading(true);
                setError(null);
                const fetchedSearch = fetchData(imgValue, 1);
                fetchedSearch.then(response=> {
                    if (images!==response.hits) {
                        setImages([...images, response.hits]);
                        setTotal(response.total);
                    }
                })
            } catch(error) {
                setError(ERROR_MESSAGE);
            } finally {
                setIsLoading(false);
            }
    },[imgValue,images])

    const handleCloseModal=()=> {
        setModalOpen(false);
    }

    const handleOpenModal=(bigImg)=> {
        setModalData(bigImg);
        setModalOpen(true);
    }

    const handleClick=()=>{
        const newPage = page+1;
        setPage(newPage);
        // const addImages =()=> fetchSearch(imgValue,newPage);
        // addImages()
    }

    const imagesArray = [];
    images.map(image=> imagesArray.push(...image));
    const maxImages = total/12;
    return (
        <div>
            {isLoading && <Loader/>}
            {error&&<p>{error}</p>}
            {images&&!isLoading&&<StyledImageGallery>
                {(imagesArray.map(image => 
                    <ImageGalleryItem id={image.id} key={image.id} smallImg={image.webformatURL} bigImg={image.largeImageURL} onClick={handleOpenModal}/>
                ))}
            </StyledImageGallery>}
            {imagesArray.length>0&&total>12&&imagesArray.length<=maxImages&&<LoadMore handleClick={handleClick}/>}
            {modalOpen&&<Modal onClose={handleCloseModal} modalData={modalData}/>}
        </div>
    )
}

ImageGallery.propTypes = {
    value: PropTypes.string.isRequired
}