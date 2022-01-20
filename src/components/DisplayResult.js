import { useEffect, useState } from 'react'

function DisplayResult({nasaApi}) {

    const [like, setLike] = useState([false, false, false, false, false, false, false, false, false, false])

    useEffect(() => {
        const data = window.localStorage.getItem('likes')
        if(data) {
            setLike(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('likes', JSON.stringify(like))
    }, [like])

    const handleLike = (index) => {
        setLike(prevState => prevState.map((item, idx) => idx === index ? !item : item))
    }

    return(
        <section>
            {
                nasaApi.map((indivData, index) => {
                    
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
export default DisplayResult