## 다시 풀 문제

- 섹션1
-       문제8
- 섹션2
-       문제5
-       문제7
- 섹션3
-       문제2
-       문제4
- 섹션4
-       문제2
-       문제3
-       문제4
-       문제5
- 섹션5
-       문제2
-       문제3
-       문제5
-       문제8
- 섹션6
-       문제1
-       문제3
-       문제4
-       문제5
- 섹션7
-       문제3
-       문제4
-       문제6
-       문제8
-       문제9
-       문제10
-       문제11
-       문제12
- 섹션8
-       문제1
-       문제2
-       문제3
-       문제4
-       문제5
-       문제6
-       문제8
-       문제12
-       문제13
-       문제14
- 섹션9
-       문제1
-       문제2
-       문제4
-       문제5
-       문제6
-       문제7
- 섹션10
-       문제1
-       문제3
-       문제4
-       문제5
- 섹션11 (Programmers)
-       문제1
-       문제2
-       문제5
-       문제7
-       문제8
-       문제12
-       문제14
-       문제16
-       문제17
-       문제18
- 섹션12 (LeetCode)
-       문제5
-       문제6
-       문제8
-       문제15
-       문제17

## 못 푼 문제

- 섹션11
-       문제2
-       문제12
-       문제17
- 섹션12
-       문제5
-       문제15

## 고찰

- 이중 반복문을 사용할 생각을 안하는 것 같다.
- 확산 연산자도 익숙치 않다. 고려하자.
- 등수 구하기는 쉽지만 모르고 있었다. 계속 확인하자.
- 정규식 사용도 고려하자.
- 유니크한 값들을 다루는 것도 고려하자.
- Map을 사용하는 것도 고려하자.
- Stack을 사용하는 것도 고려하자.
- Binary Search를 사용하는 것을 고려하자.
- Two Pointer Algorithm을 사용하는 것을 고려하자.
- Sliding Window을 사용하는 것을 고려하자.
- Greedy Algorithm을 사용하는 것을 고려하자.
- Tail Recursive Function을 사용하는 것을 고려하자.
- Memoization의 구현을 알아두자.
- Selection Sort의 구현을 알아두자.
- Bubble Sort의 구현을 알아두자.
- Insertion Sort의 구현을 알아두자.
- Adjacency List를 사용한 Graph의 구현을 알아두자.
- 조건이 정해져 있다면 그 조건을 제약으로 해서 구현하자. 포괄적인 구현을 하다가 시간 초과 에러가 발생하게 된다.

## 새로 알게 된 지식

- 영소문자 a 표현: String.fromCharCode(97).
- 영대문자 A 표현: String.fromCharCode(65).
- 기본 최소 숫자 설정 값: Number.MIN_SAFE_INTEGER.
- 배열 생성: Array.from({length: LENGTH}, (_, i)=> i) or Array.of({length: LENGTH}, (_, i)=> i));
- 숫자의 각 자리수로 이루어진 배열: number.toString().split('').
- 배열의 두 요소를 서로 바꾸는 식: [arr[i], arr[j]] = [arr[j], arr[i]].
- 소수 판별 함수: 제곱근 이용.
- 유니크한 값들을 다루는 경우의 데이터타입: SET.
- 괄호에 대한 문제: 대부분 Stack 사용.
- 한 배열의 순환 탐색 문제: Queue 사용.
- 2진수 값 구하기 문제: 지정 숫자를 2로 계속 나누고 그 나머지 값들을 자리수에 맞게 더하기.
- 최대/최소값 구하기 문제: Math.max(...arr), Math.min(...arr).
- Math.max(), Math.min()함수의 최대 변수 수가 한정되어 있다.
- 배열의 잘못된 순서 요소를 찾는 문제: 정렬한 배열과 졍렬 안 된 배열 비교.
- 두 집합 비교 문제: 투포인터 알고리즘 사용 고려.
- 구간 비교 문제: 투포인터 알고리즘, 슬라이딩 윈도우 알고리즘 사용 고려.
- 소문자 알파벳이 아닌 것만 판별하는 정규식: /[^a-z]/g.
- 숫자가 아닌 것만 판별하는 정규식: /[^0-9]/g.
- Two Pointer Algorithm: 배열에서 두 개의 포인터를 사용한 알고리즘. 완전탐색보다 시간복잡도가 줄어든다.
- Sliding Window: 배열의 일정 범위 값 비교 목적의, 인덱스를 이동하면서 일정 범위의 윈도우로 들어간 값과 함께 범위 밖으로 밀려난 값을 처리하는 알고리즘.
- Greedy Algorithm: 지금 당장의 상황에서 최적을 선택하는 알고리즘.
- Greedy Algorithm 장점: 빠른 결과 도출.
- Greedy Algorithm의 사용 조건: 탐욕스런 선택 조건(Greedy Choice Property) + 최적 부분 구조 조건(Optimal Substructure).
- 탐욕스런 선택 조건(Greedy Choice Property): 앞의 선택이 이후의 선택에 영향을 주지 않는 것.
- 최적 부분 구조 조건(Optimal Substructure): 부분 문제의 최적의 답으로 합쳐진 문제의 답을 구할 수 있는 것.
- Selection Sort: 처음 인덱스부터 시작해서, 그 다음 인덱스부터 차례대로 처음 인덱스에 적합한 값을 찾아서 결정하고,
  그 이후에 다음 인덱스부터 같은 동작을 반복하는 정렬 방법.
- Bubble Sort: 처음 인덱스와 두 번째 인덱스, 두 번째 인덱스와 세 번째, ... n-1과 n번째 인덱스를 비교하고 적합한 값을 찾아 결정하는 동작을,
  배열의 길이-1번만큼 반복하는 정렬 방법.
- Insertion Sort: 두 번째 인덱스부터 시작해서, 해당 값을 저장해두고, 그 앞의 인덱스부터 첫 번째 인덱스까지 해당 값과 비교하면서,
  적합하면 그 인덱스의 값을 그 뒤의 인덱스로 미루는 동작을 하고, 해당 값의 위치를 찾는다면,
  그 다음인 세 번째 인덱스, ... 마지막 인덱스까지 같은 동작을 반복하는 정렬 방법.
- Binary Search: 정렬되어 있는 배열에서 탐색 범위를 절반 씩 줄여가며 탐색하는 방법.
- Recursive Function: 내부에서 자기 자신을 다시 호출하는 함수.
- Recursive Function의 필수 조건: 종료 조건.
- Tail Recursive Function: 재귀 호출이 끝난 후에 현재 함수에서 추가 연산을 요구하지 않도록 구현하는 재귀함수.
- Memoization: 동일 계산 반복의 경우, 이전 계산 값을 메모리에 저장해서 사용하는 기술.
- Graph: 정점(Vertex)과 간선(Edge)으로 이루어진 자료구조.
- Directed Graph: 정점과 방향이 있는 간선으로 이루어진 자료구조.
- Weighted Graph: 정점과 방향 & 가중치가 있는 간선으로 이루어진 자료구조.
- Adjacency Matrix: 1번 인덱스부터 사용하는 2차원 배열[fromVertex][tovertex]과 가중치값을 사용해서 그래프를 구현하는 방법.
  두 번째 인덱스의 길이는 정점의 개수에 비례해서 늘어난다.
- Adjacency List: 1번 인덱스부터 사용하는 2차원 배열[fromVertex][idx]과 [toVertex, 가중치] 값을 사용해서 그래프를 구현하는 방법.
  두 번째 인덱스의 길이는 fromVertex와 연결된 정점의 개수이다.
- DFS: Deep First Search. 깊게 탐색. 모든 경로를 방문할 경우 사용. 재귀적으로 동작.
- BFS: Breadth First Search. 넓게 탐색. 최단 경로를 찾을 경우 사용. 재귀적으로 동작 X.
- Dynamic Programming: 큰 문제 해결 목적으로, 작은 복수의 문제로 나누어서 해결한 결과들을 저장해두고 결과를 토대로 큰 문제를 해결하는 기법.
- Dynamic Programming 조건: 작은 문제의 반복 + 같은 입력에 대한 같은 결과.
- Dynamic Programming 종류: Bottom-Up. Top-Down.
- Dynamic Programming 대표 예: 피보나치 수열.
- LIS: Longest Increasing Subsequence. 최장 증가 부분 수열.
  각 원소가 이전 원소보다 크고, 그 길이가 최대인 부분 수열.
- Knapsack Problem: 배낭 문제.
  배낭에 담을 수 있는 무게의 최대값이 정해져 있고, 일정한 가치와 무게가 정해져 있는 배낭에 담을 때,
  가치의 합이 최대가 되도록 짐을 고르는 방법을 찾는 문제.
- Knapsack Problem 종류: Fraction Knapsack + 0-1 Knapsack.
- Fraction Knapsack: 물건을 쪼갤 수 있는 배낭 문제. 그리디 알고리즘으로 해결 가능.
- 0-1 Knapsack: 물건을 쪼갤 수 없는 배낭 문제. Dynamic Programming으로 해결 가능.
