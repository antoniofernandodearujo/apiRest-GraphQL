import axios from "axios";

export default class ApiService {
  private url: string = "http://192.168.0.3:4000/rest";

  async get() {
    try {
      const res = await axios.get(`${this.url}/todos`);

      if(res.status !== 200) {
        throw new Error("Erro ao buscar dados");
      }

      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
}
