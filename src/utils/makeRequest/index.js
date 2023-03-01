import { BACKEND_URL } from "../../constants/apiEndPoints";
import { NavigateFunction } from "react-router-dom";
import axios from 'axios';

const makeRequest = async (
    apiEndPoint,
    dynamicConfig = {},
) => {
    try {
        const requestDetails = {
            method: apiEndPoint.method,
            url: `${BACKEND_URL}/${apiEndPoint.url}`,
            ...dynamicConfig,
        };
        const {data} = await axios(requestDetails);
        return data;
    } catch (e) {
        if(navigate)
            navigate('/error');
    }
};

export default makeRequest;