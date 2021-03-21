import axios from 'axios';

class SmsService {

    sendSMS = (phoneNumber, smsContent) => new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_API_URL}/send-sms`, { phoneNumber, smsContent })
            .then((response) => {
                console.error(response.data);
                response.data.code === 0 ? resolve(response.data) : reject(response.data.message);
            }, error => {
                reject(error.message);
            });
    });



} export default new SmsService();