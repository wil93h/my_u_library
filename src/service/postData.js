import axios  from 'axios'

const postData = async(url,data) => {
    return await axios.post(url,data);
}
export default postData;