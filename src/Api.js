import {create} from 'apisauce';
import Toast from 'react-native-toast-message';

export function Alert(message) {
    Toast.show({
      type: {message},
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  // http://18.141.225.81:8000/api/customer/logincustomer
const baseURL = 'http://18.141.225.81:8000/api';

export const FormDataApi = create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  }
});

const Api = create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const baseURL2 = "http://18.141.225.81:8000/api"
export const Api2 = create({
  baseURL2,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


export default Api;
