import axios from 'axios'
import { useEffect, useState } from 'react'

function NasaApi() {
    const [data, setData] = useState([])
    const [like, setLike] = useState([false, false, false, false, false, false, false, false, false, false])
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        handleQuery()
        const data = window.localStorage.getItem('likes')
        if(data) {
            setLike(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        // handleQuery()
        window.localStorage.setItem('likes', JSON.stringify(like))
    }, [like])


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

    const handleLike = (index) => {
        setLike(prevState => prevState.map((item, idx) => idx === index ? !item : item))
    }

    return(
        <section>
            {
                data.map((indivData, index) => {
                    
                    return(
                        <div className='dataDisplay' key={indivData.date}>
                            <img src={indivData.url} alt={indivData.explanation} />
                            <h2>{indivData.title}</h2>
                            <h3>{indivData.date}</h3>
                            <button onClick={() => handleLike(index)}> 
                                {
                                    like[index] ?
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