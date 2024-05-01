useState는 컴포넌트에 state 변수를 추가할 수 있는 React Hook입니다.

```
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState('Taylor');
  // ...

  ```

useState는 정확히 두 개의 항목이 있는 배열을 반환합니다.

이 state 변수의 현재 state로, 처음에 제공한 초기 state로 설정됩니다.
상호작용에 반응하여 다른 값으로 변경할 수 있는 set 함수입니다.

화면의 내용을 업데이트하려면 다음 state로 set 함수를 호출합니다.

```
function handleClick() {
  setName('Robin');
}
```

React는 다음 state를 저장하고 새로운 값으로 컴포넌트를 다시 렌더링한 후 UI를 업데이트합니다.

이전 state를 기반으로 state 업데이트하기 
age가 42라고 가정합니다. 이 핸들러는 setAge(age + 1)를 세 번 호출합니다.

```
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}




```

하지만 클릭해보면 age는 45가 아니라 43이 됩니다! 이는 set 함수를 호출해도 이미 실행 중인 코드에서 age state 변수가 업데이트되지 않기 때문입니다. 
따라서 각 setAge(age + 1) 호출은 setAge(43)이 됩니다.

이 문제를 해결하려면 다음 state 대신 setAge에 업데이터 함수를 전달할 수 있습니다.

여기서 a => a + 1은 업데이터 함수입니다. 이 함수는 대기 중인 state를 가져와서 다음 state를 계산합니다.

React는 업데이터 함수를 큐에 넣습니다. 그러면 다음 렌더링 중에 동일한 순서로 호출합니다.

a => a + 1은 대기 중인 state로 42를 받고 다음 state로 43을 반환합니다.
a => a + 1은 대기 중인 state로 43을 받고 다음 state로 44를 반환합니다.
a => a + 1은 대기 중인 state로 44를 받고 다음 state로 45를 반환합니다.
대기 중인 다른 업데이트가 없으므로, React는 결국 45를 현재 state로 저장합니다.

규칙상 대기 중인 state 인수의 이름을 age의 a와 같이 state 변수 이름의 첫 글자로 지정하는 것이 일반적입니다. 그러나 prevAge 또는 더 명확하다고 생각하는 다른 이름으로 지정해도 됩니다.

React는 개발 환경에서 순수한지 확인하기 위해 업데이터를 두 번 호출할 수 있습니다.


참고 - 
https://ko.react.dev/reference/react/useState#adding-state-to-a-component