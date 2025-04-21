import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common['Authorization'] = "Client-ID UojvX79B9zFp5sv2u8D0SROSC-YAmcXnNGMP8TIHbQY";

export const searchPhotoByName = async (name: string, page: number) => {
  const response = await axios.get("search/photos", {
      params: {
        "per_page": 20,
        "page": page,
        "query": name,
      }
    }
  )

  return response.data;
}

