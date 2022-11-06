// 비동기를 연출하는 함수
export const getData = (data) => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(data), 200);
  });
};

export const formatDateToNumber = (date) => {
  const regExp = /[^0-9]/g;
  return date.replace(regExp, "");
};

export const activeStatusMap = {
  active: "진행중",
  ended: "종료",
};

export const formatDateTime = (date) => {
  const [time] = date.split("T");
  return time;
};

export const formatMoney = (budget) => {
  return `${Math.floor(budget / 10000).toLocaleString("ko-KR")}만원`;
};
