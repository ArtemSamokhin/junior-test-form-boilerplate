export default class ApiPhoto {
  _apiBase = 'https://api.unsplash.com';
  _apiKey = 'Cy9eyPnVqjb0AesLGTT2HxNhpDzqtwwqY29X1p_D6_k';

  getResource = async (path, params) => {
    const queryParams = new URLSearchParams({
      client_id: this._apiKey,
      ...params,
    });

    const result = await fetch(`${this._apiBase}${path}?${queryParams}`);

    if (!result) {
      throw new Error(`Error ${result.status}`);
    }

    return await result.json();
  };

  getRandomPhoto = async (params) => {
    return await this.getResource('/photos/random', params);
  };
}
