import { getData } from "../utils";
import adList from "../data/adList.json";

const END_STATUS = "ended";
const ACTIVE_STATUS = "active";
class adService {
  #advertisements;
  #filter;

  constructor() {
    this.#advertisements = adList.ads;
    this.#filter = null;
  }
  async filter() {
    if (this.#filter === "중단됨") return await this.fetchEnded();
    else if (this.#filter === "진행중") return await this.fetchOnGOing();
    else return await this.fetchAll();
  }

  setFilter(value) {
    this.#filter = value;
  }

  getFilter() {
    return this.#filter;
  }

  async fetchAll() {
    return await getData(this.#advertisements);
  }

  async fetchOnGOing() {
    return await getData(await this.getFilterOnGoing());
  }

  async fetchEnded() {
    return await getData(this.getFilterEnded());
  }

  getFilterEnded() {
    const filterd = this.#advertisements.filter((ad) => ad.status === END_STATUS);
    return filterd;
  }

  getFilterOnGoing() {
    const filterd = this.#advertisements.filter((ad) => ad.status === ACTIVE_STATUS);
    return filterd;
  }

  getAds() {
    return this.#advertisements;
  }
}

export default new adService();
