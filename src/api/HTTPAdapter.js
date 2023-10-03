import axios from 'axios';

const HTTPAdapter = async (method, url, data) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data
    });

    return response.data; // Devuelve el resultado de la promesa
  } catch (error) {
    throw error; // Maneja los errores de manera adecuada
  }
};

export default HTTPAdapter;