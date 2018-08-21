import axios from 'axios';
import { sessionService } from 'redux-react-session';
import config from '../apiConfig';

const BACKEND_URL = process.env.API_URL

export default class SessionAPI {
  static logout() {
    sessionService.deleteSession();
    sessionService.deleteUser();
    return true;
  }

}

  

  
