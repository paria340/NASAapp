import axios from 'axios'
import { useEffect, useState } from 'react'

function NasaApi() {
    const [data, setData] = useState([])
    const [like, setLike] = useState(false)

    useEffect(() => {
        handleQuery()
    }, [])

    const handleQuery = () => {
        const apiKey = 'PKW8W4L6a7m3FJOQSruIS7RJsyTEstuuW32tmYGD'
        const apiURL = 'https://api.nasa.gov/planetary/apod'
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
        })
    }

    const handleLike = () => {
        !like ? setLike(true) : setLike(false)
    }

    return(
        <section>
            {
                data.map(indivData => {
                    return(
                        <div className='dataDisplay' key={indivData.date}>
                            <img src={indivData.url} alt={indivData.explanation} />
                            <h2>{indivData.title}</h2>
                            <h3>{indivData.date}</h3>
                            <button onClick={() => handleLike()}>
                                {
                                    like ?
                                    <p>Liked</p>
                                    : <p>Like</p>
                                }                            
                            </button>
                        </div>
                    )
                })
            }
            
        </section>
    )
}
export default NasaApi