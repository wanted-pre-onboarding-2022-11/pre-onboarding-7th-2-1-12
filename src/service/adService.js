import { getData } from "../utils";
import adList from "../data/ad-list-data-set";
import { FILTER_STATUS } from "../utils/constant";

const END_STATUS = "ended";
const ACTIVE_STATUS = "active";
class adService {
  #advertisements;
  #filter;

  constructor() {
    this.#advertisements = adList.ads;
    this.#filter = null;
  }

  setFilter(value) {
    this.#filter = value;
  }

  getFilter() {
    return this.#filter;
  }

  async filter() {
    if (this.#filter === FILTER_STATUS.ended) return await this.fetchEnded();
    else if (this.#filter === FILTER_STATUS.active) return await this.fetchOnGOing();
    else return await this.fetchAll();
  }

  async fetchAll() {
    return await getData(this.#advertisements);
  }

  async fetchOnGOing() {
    return await getData(this.getFilterOnGoing());
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
