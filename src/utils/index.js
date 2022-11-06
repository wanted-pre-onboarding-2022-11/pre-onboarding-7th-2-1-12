import adList from "../data/adList.json";
// 비동기를 연출하는 함수
export const getData = (data) =>
  new Promise((resolve) => {
    return setTimeout(() => resolve(data), 200);
  });

export const getAds = async () => {
  return await getData(adList);
};

const filertOnGoing = (data) => {
  const today = new Date();

  return data.filter((ad) => {
    const startDate = new Date(ad.startDate);
    const endDate = new Date(ad.endDate);
    return startDate <= today && today < endDate;
  });
};

export const getOngoing = async () => {
  const data = adList;
  console.log(data);
  return await getData(filertOnGoing(data));
};
