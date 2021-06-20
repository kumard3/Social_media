import axios from 'axios'

console.log(process.env.REACT_APP_YT_KEY)

const request = axios.create ({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params: {
        key:process.env.REACT_APP_YT_KEY, 

    },
})

export default request