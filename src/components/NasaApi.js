import axios from 'axios'
import { useEffect, useState } from 'react'
import DisplayResult from './DisplayResult';

function NasaApi() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        handleQuery()
    }, [])

    const handleQuery = () => {
        const apiKey = 'PKW8W4L6a7m3FJOQSruIS7RJsyTEstuuW32tmYGD'
        const apiURL = 'https://api.nasa.gov/planetary/apod'
        setLoading(true)
        axios({
            url: apiURL,
            method: 'GET',
            responseType: 'json',
            params: {
                api_key: apiKey,
                count: 10
            }
        }).then(response => {
            setData(response.data)
            setLoading(false)
        })
    }

    if (loading) {
        return (
          <span className='loading'>Loading Wait Please...</span>
        )
    }

    return(
        <section>
            <DisplayResult nasaApi={data}/>           
        </section>
    )
}
export default NasaApi