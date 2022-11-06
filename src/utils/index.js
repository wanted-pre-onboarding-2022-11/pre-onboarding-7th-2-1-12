import _ from "lodash";

// 비동기를 연출하는 함수
export const getData = (data) =>
  new Promise((resolve) => {
    return setTimeout(() => resolve(_.cloneDeep(data)), 1000);
  });
