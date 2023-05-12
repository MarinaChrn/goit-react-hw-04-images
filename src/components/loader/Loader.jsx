import { Rings } from 'react-loader-spinner'
import { Layout } from './Loader.styled'

export const Loader = () => {
    return (
        <Layout>
            <Rings
                height="150"
                width="150"
                color="#3f51b5"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </Layout>
    )
}