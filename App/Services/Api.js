// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import Env from 'react-native-config';

// default headers request
const headers = {
  'Content-Type': 'application/json',
};

const api_key = Env.API_KEY;

const create = (baseURL = Env.BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    headers,
    timeout: 15000,
  });

  // const getRoot = () => api.get('');
  // const getRate = () => api.get('rate_limit');
  // const getUser = (username) => api.get('search/users', {q: username});

  return {
    // getRoot,
    // getRate,
    // getUser,

    api,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
