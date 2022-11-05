/*
interface :
전체광고
진행 중
중단 됨

input : undefined(whole), active, ended => data

*/

export class ListImp {
  #data;
  constructor(data) {
    this.#data = data;
  }
  sorted(filterType, type) {
    if (!type) {
      return this.#data;
    }
    return this.#data.filter((item) => item[filterType] === type);
  }
}
