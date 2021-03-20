import axios from 'axios';


const axiosInstance = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'localhost:8000'
    }
});

class SmsService {

    sendSMS = (phoneNumber, smsContent) => {
        return axiosInstance.post(`${process.env.REACT_APP_API_URL}/send-sms`, { phoneNumber, smsContent })
    }


} export default new SmsService();