# 원티드 프리온보딩 프론트엔드 11조

### [배포 사이트 바로가기](https://funny-entremet-14723c.netlify.app/) 👈🏻 click!

1. [팀 소개](#팀-소개)
   - 팀원 소개
   - 소통 방식과 과제 진행 방식
2. [프로젝트 소개](#프로젝트-소개)
   - 프로젝트 구조
   - 폴더 구조
3. [우리 팀의 Best Practice](#우리-팀의-best-practice)

---

## 팀 소개

👋 안녕하세요, 원티드 프리온보딩 프론트엔드 11조입니다!

### 팀원 소개

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/97172050?v=4" width="100px;" alt="김영진"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/111304551?v=4" width="100px;" alt="심유선"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/34249911?v=4" width="100px;" alt="김수민"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/64957267?v=4" width="100px;" alt="용상윤"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/80934175?v=4" width="100px;" alt="박채연"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/61973070?v=4" width="100px;" alt="박민주"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/104333720?v=4" width="100px;" alt="정연우"/>
    </td>
  </tr>
  <tr>    
    <td align="center">
      <a href="https://github.com/devyouth94">
        <div>김영진</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SimYuseon">
        <div>심유선</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hemudi">
        <div>김수민</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ryong9rrr">
        <div>용상윤(팀장)</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/chaechae66">
        <div>박채연</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/6mn12j">
        <div>박민주</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/0SCAR0421">
        <div>정연우</div>
      </a>
    </td>
  </tr>
</table>

### 소통 방식과 과제 진행 방식

저희 팀은 소통 방식으로 디스코드와 노션을 활용했습니다. 디스코드에서 어떤 방식이 더 나을지 투표를 하거나 어떤 코드가 좋은 코드일지 토론을 하였습니다.

토론 후 전체적인 과제 진행은 팀장이 진행하였습니다. 그리고 1명이 대표로 라이브코딩을 하고 1명이 회의록을 작성하였습니다. 나머지 팀원들은 라이브코딩에 모두 참여하여 네이밍 컨벤션이나 코드 구조 등에 대해 피드백을 주고 받으며 Best Practice를 찾기 위해 노력했습니다.

---

## 프로젝트 소개

![11_assignment3](https://user-images.githubusercontent.com/80934175/199720604-8971c24f-21b9-45f7-bbf5-a90d5b9f0e97.gif)

- 차량 대여 관리 서비스이고, 차량 리스트가 있는 메인페이지, 차량 디테일 페이지가 존재하는 SPA 입니다.

- 메인페이지에는 태그들이 존재하며 태그를 클릭하면 그에 맞는 차량 리스트를 업데이트 해줍니다.

- 디테일페이지는 메인페이지에서 클릭한 차량의 디테일을 보여줍니다.

### 프로젝트 구조

- 총 2개의 페이지를 가지고 있습니다.

- 메인 페이지에서는 차량 리스트를 보여줍니다.

  - 로딩 중, 차량 없음 등의 상태를 보여줍니다.
  - 태그에 따라 차량 리스트가 정렬됩니다.
  - 해당 리스트 클릭 시 차량 디테일 페이지로 라우팅됩니다.
  - 차량 업로드가 1일 미만일 시 "신규"가 붙게 됩니다.

- 디테일 페이지에서는 차량에 맞는 디테일 페이지가 보입니다.
  - 뒤로가기 시 사용자가 보고 있던 위치로 되돌아 갑니다.

### 폴더 구조

<details>
<summary>폴더 구조</summary>
<div markdown="1">

```
src
├─api
├─components
│  ├─CarItem
│  ├─DetailDes
│  ├─DetailTitle
│  ├─Header
│  ├─Layout
│  ├─TagItem
│  └─TagList
├─context
├─pages
│  ├─Detail
│  └─Home
├─routers
├─styled
└─utils
```

</div>
</details>

---

## 우리 팀의 Best-Practice

### 1. 네트워크 통신을 최소한으로 할 수는 없을까요?

🧐**최소한의 데이터 패치?! Context 활용**

이번 과제의 요구사항을 보면, 어떤 차량의 상세정보만을 불러오는 api는 존재하지 않습니다. 따라서 한 차량에 대한 정보를 알고 싶다면 **어쩔수 없이** 모든 차량에 대한 정보를 받은 뒤 데이터를 순회해야만 합니다. 저희 팀에서는 대부분 차량의 종류에 대한 태그를 클릭하면 쿼리를 통해 해당 차량들만 렌더링을 했습니다.

하지만 이 과제의 전체적인 아키텍처를 생각해보면, 모든 차량에 대한 데이터를 한번만 불러와도 됩니다. 그래서 저희는 모든 차량에 대한 정보를 전역으로 가지고 있기를 결정했습니다. 그리고 누른 태그에 대해서 네트워크 패칭 없이 필터링을 하였고, 상세 차량에 대한 정보 또한 이미 가지고 있는 데이터를 활용하였습니다.

### 2. 태그를 컴포넌트의 상태 또는 전역 상태로 관리해야 할까?

📚 **url의 쿼리를 활용하기!! 새로 고침해도 유지가 되어있네?!?!**

현재 어떤 태그가 눌렸는지, 태그가 눌린 상태인지 등을 알고 있기 위해서는 필연적으로 상태관리가 필요합니다. 하지만 웹페이지는 url을 가지고 있고, 쿼리 스트링이라는 시스템도 사용할 수 있습니다. 따라서 저희는 url을 일종의 스토리지로 삼기로 결정했습니다. 이 방법을 채택한다면 몇 가지 장점이 있습니다.

1. 태그 리스트 컴포넌트는 태그가 눌렸을 때 단순히 url을 바꾸는 역할만 담당합니다.
2. 차량 리스트는 url의 쿼리에 따라서 렌더링을 하기만 하면 됩니다.

   → 차량 리스트는 쿼리로만 차량 데이터를 불러오는 네트워크 요청을 하면 되지만, api의 특성 상 그럴 필요가 없다고 판단하여 네트워크 요청도 하지 않고 렌더링 할 수 있습니다.

3. url이 계속 바뀝니다. 즉 유저의 태그 필터링 정보가 history에 남아있습니다. 따라서 사용자는 뒤로가기를 눌렀을 때 혹은 상세 페이지에 진입했다가 다시 홈으로 진입했을 때 필터링된 데이터를 다시 볼 수 있습니다.

분명 태그를 전역상태나 컴포넌트의 상태로 가지고 있어도 되지만, 컴포넌트 상태로 가질 경우 코드의 양이 많아지고 데이터 추적이 힘들 수 있습니다. 또한 전역 상태로 구현하는 것 보다도 더 간편하고 직관적인 방식이라고 생각하여 이 방식을 팀원 모두와 함께 구현했습니다.

### 3. 반복되는 스타일링, 굳이 일일히 적어야 할까?!!

🧐 **반복되는 스타일링은 Context로 관리해요!!**

styledComponent에서 제공하는 theme를 활용하면 됩니다! 반복적으로 쓰이는 컬러, 폰트 사이즈 등 전역으로 관리해서 편리하게 쓸 수 있습니다!!

```
//theme.js
const color = {
  white: "#fff",
  black: "#000",
  gray: "#d9d9d9",
  blue: "#0094ff",
};

const theme = {
  color,
};

export { theme };
```

### 4. 그 외

- 팀의 코딩 스타일을 통일하기 위해 ESLint, prettier, git husky를 적극 활용하였습니다.

- 원시형 값(url 경로 등)들을 그대로 사용하는 것을 최대한 지양하고, 상수화 시켰습니다.

### 5. 실행 방법

- git clone 해줍니다.
- root 폴더에 .env 폴더를 다음과 같이 추가해줍니다.

```
REACT_APP_BASE_URL = 베이스 경로
```

- npm install 해줍니다.
