const axios = require('axios');

export const runCode = async (source: string, langCode: number) => {
  let body = JSON.stringify({
    language_id: langCode,
    source_code: source,
    stdin: '',
  });

  const options1 = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    params: {
      base64_encoded: 'false',
      fields: '*',
    },
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '060ee3c24amshb6778dec4f5244dp1a0aeejsn848bcf191367',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    data: body,
  };

  try {
    const response = await axios.request(options1);
    console.log(response.data);
    let token = response.data.token;

    const options = {
      method: 'GET',
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      params: {
        base64_encoded: 'false',
        fields: '*',
      },
      headers: {
        'X-RapidAPI-Key': '060ee3c24amshb6778dec4f5244dp1a0aeejsn848bcf191367',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
};
