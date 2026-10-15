import axios from 'axios';

class BookingService {

    BASE_URL = 'https://restful-booker.herokuapp.com';
    COMMON_HEADERS = {
        'Content-Type': 'application/json'
    };

    public async auth(requestBody: object){
        const url = `${this.BASE_URL}/auth`;

        const payload = requestBody;

        console.log(`\n----------- REQUEST ----------\nPOST ${url}\n\nHeaders: ${JSON.stringify(this.COMMON_HEADERS, null, 2)}\n\nBody: ${JSON.stringify(payload, null, 2)}\n-------------------------------------\n`);

        const response = await axios.post(url, payload, {headers: this.COMMON_HEADERS});

        console.log(`------------ RESPONSE -----------\nResponse Code: ${response.status} - ${response.statusText}\n\nResponse Body: ${JSON.stringify(response.data, null, 2)}\n-----------------------------`);

        return response;
    }

    public async createBooking(token: string, requestBody: object){

        const url = `${this.BASE_URL}/booking`;

        const headers = {
            ...this.COMMON_HEADERS,
            'Cookie': `token=${token}`,
            'Accept': 'application/json',
        }

        const payload  = requestBody;
        console.log(`\n----------- REQUEST ----------\nPOST ${url}\n\nHeaders: ${JSON.stringify(headers, null, 2)}\n\nBody: ${JSON.stringify(payload, null, 2)}\n-------------------------------------\n`);

        const response = await axios.post(url, payload, {headers: this.COMMON_HEADERS});

        console.log(`------------ RESPONSE -----------\nResponse Code: ${response.status} - ${response.statusText}\n\nResponse Body: ${JSON.stringify(response.data, null, 2)}\n-----------------------------`);

        return response;
    }

}

export default new BookingService();