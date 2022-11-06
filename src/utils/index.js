// 비동기를 연출하는 함수
export const getData = (data) =>
  new Promise((resolve) => {
    return setTimeout(() => resolve(data), 200);
  });
