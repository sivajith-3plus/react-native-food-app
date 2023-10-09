import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer PRTw4yM3i0MYNDDBZFicdM3AA-YA6j2_k0KhcNgZGPXt9SypNJHz4nRxYYNI-ZC4I-s6jv5Oh5mksppmO8lD9dO_BRnQIKzVIf7HesQ8dIvpVBAJmsXVHgfbFKIfZXYx",
  },
});
