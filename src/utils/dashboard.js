/*
// 1. 날짜 선택
1. 날짜 sort
2. 각자 데이터 합친
3. 각자 데이터만 Array
*/

export class DashboardImp {
  #data;
  constructor(data) {
    this.#data = data;
  }
  weeksData(weeks) {
    if (!weeks) {
      return;
    }
    return this.#data.filter((item) => weeks.some((week) => week === item.date));
  }
  added(data, type) {
    if (!data) {
      return;
    }
    return data.reduce((prev, cur) => prev + cur[type], 0);
  }
  getList(data, type) {
    if (!data) {
      return;
    }
    return data.reduce((prev, cur) => {
      prev.push(cur[type]);
      return prev;
    }, []);
  }
}
