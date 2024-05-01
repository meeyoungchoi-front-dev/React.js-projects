useEffect구성 요소를 외부 시스템과 동기화 할 수 있는 React Hook입니다 .

```
useEffect(setup, dependencies?)
```

setup: 
+ Effect의 로직이 포함된 기능입니다. 
+ 설정 함수는 선택적으로 정리 함수를 반환할 수도 있습니다. 
+ 컴포넌트가 DOM에 추가되면 React는 설정 기능을 실행합니다. 
+ 변경된 종속성을 사용하여 다시 렌더링할 때마다 React는 먼저 이전 값을 사용하여 정리 기능(제공한 경우)을 실행한 다음 새 값을 사용하여 설정 기능을 실행합니다. 
+ 구성 요소가 DOM에서 제거된 후 React는 정리 기능을 실행합니다.


 dependencies : 
+ 설정 코드 내부에서 참조되는 모든 반응 값 목록입니다. 
+ 반응 값에는 소품, 상태 및 구성 요소 본체 내부에 직접 선언된 모든 변수와 함수가 포함됩니다. 
+ 린터가 React용으로 구성되어 있으면 모든 반응 값이 종속성으로 올바르게 지정되었는지 확인합니다. 
+ 종속성 목록에는 일정한 수의 항목이 있어야 하며 [dep1, dep2, dep3]처럼 인라인으로 작성되어야 합니다.

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```
