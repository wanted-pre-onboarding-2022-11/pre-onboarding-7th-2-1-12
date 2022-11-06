# 원티드 프리온보딩 프론트엔드 11조

### [배포 사이트 바로가기](https://pre-onboarding-7th-2-2-11.vercel.app/) 👈🏻 click!

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

</br>

### 실행방법

- 해당 레포지 clone

```
 npm install // 설치
 npm run start // 실행
```

### 프로젝트 소개

## 리덕스

- 광고관리의 광고들을 관리하는 `adverTisementsReducer`
- 광고관리의 필터링을 관리하는 `filterStateReducer`
- 대시보드의 데이터를 관리하는 `trendDataReducer`

  총 3개의 리듀서들을 이용합니다.
  각 리듀서들을 사용하기 위한 useSelector를 hook으로 커스텀하여 외부에서 편리하게 값을 불러올 수 있습니다.

```javascript
export const useAdSelector = () => useSelector((state) => state.adverTisementsReducer);

export const useAdIdSelector = (id) =>
  useSelector((state) => state.adverTisementsReducer.data.filter((ad) => ad.id === id))[0];

export const useTrendDataSelector = () => useSelector((state) => state.trendDataReducer);
```

- 비동기 함수는 thunk와 builder를 이용하여 비동기 시 일어나는 행동을 일괄되게 처리 하였습니다.

```javascript

export const filter = createAsyncThunk("advertisements/filter/", async () => {
  try {
    const data = await adService.filter();
    return data;
  } catch (e) {
    console.error(e);
  }
});

...
  extraReducers: (builder) => {
    builder.addCase(filter.pending, (state) => {
      if (state.loading === IDLE) {
        state.loading = PENDING;
      }
    });
    builder.addCase(filter.fulfilled, (state, { payload }) => {
      if (state.loading === PENDING) {
        state.loading = IDLE;
        state.data = payload;
      }
    });
    builder.addCase(filter.rejected, (state, action) => {
      if (state.loading === PENDING) state.loading = IDLE;
      state.error = action.error;
    });
  },
  ...
```

## 대시보드

- 초기값을 가져오는 함수를 hook으로 빼 로직을 분리 하였습니다.

```javascript
const useInitailData = () => {
  const dispatch = useDispatch();
  const trendData = useTrendDataSelector();

  const handleInitailData = useCallback(() => {
    if (!trendData.data) dispatch(getList());
  }, [dispatch, trendData.data]);

  useEffect(() => {
    handleInitailData();
  }, [handleInitailData]);
};
```

## 광고관리

- `adService` class 를 구현하여 해당 class 의 멤버변수에 filter 상태를 저장해 외부에서 필터를 실행할때 `adService` 의 필터함수만 호출하면 내부의 filter변수에 의해 필터링을 실행할 수 있습니다.

```javascript
class adService {
  #advertisements;
  #filter;
	...
  setFilter(value) {
    this.#filter = value;
  }
	...
  async filter() {
    if (this.#filter === FILTER_STATUS.ended) return await this.fetchEnded();
    else if (this.#filter === FILTER_STATUS.active) return await this.fetchOnGOing();
    else return await this.fetchAll();
  }
  ...
}

//외부에서 필터 사용 시
export const filter = createAsyncThunk("advertisements/filter/", async () => {
  try {
    const data = await adService.filter();
    return data;
  } catch (e) {
    console.error(e);
  }
});

```

- 필터 상태를 전역적으로 관리해 다른 페이지로 이동 후에 돌아와도 해당 값이 유지되어 필터링된 데이터를 화면에서 확인할 수 있습니다.

```
const SubHeader = () => {
  const { value: filterState } = useFilterStateSelector();

  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(setState(e.target.value));
  };

  return (
    <S.SubHeader>
      <S.Select value={filterState ?? ""} onChange={handleSelect}>
      ...options
      </S.Select>
    </S.SubHeader>
  );
};
```

## 사이드 바

- useLocation의 pathname과 현재 route의 path를 비교하여 라우팅된 상태를 화면에서 확인할 수 있습니다.

```javascript
const SideBar = () => {
  const { pathname: curPathName } = useLocation();
  const isMath = (path) => {
    return curPathName === path;
  };

  return (
    <S.SideBar>
      <S.LogoContainer>
        <img src={LeverLogo} alt="LEVER_logo" />
      </S.LogoContainer>
      ...
      <div>
        <p>광고 센터</p>
        {routes.map(({ name, path }) => (
          <Tab key={name} isActive={isMath(path)}>
            <Link to={path}>{name}</Link>
          </Tab>
        ))}
      </div>
    </S.SideBar>
  );
};
```
