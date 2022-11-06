export class WeekImp {
  getDateStr(date) {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth();
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return [year, month, day].join("-");
  }
  calStrArr(weekFrom) {
    let dateArr = [];
    for (let i = 0; i < 7; i++) {
      let startData = new Date(weekFrom);
      const date = startData.setDate(startData.getDate() + i);
      const dateStr = this.getDateStr(new Date(date));
      dateArr.push(dateStr);
    }
    return dateArr;
  }
  weekCal(week) {
    if (!week.from || !week.to) {
      return;
    }
    return this.calStrArr(week.from);
  }
}
