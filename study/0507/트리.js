// 나무를 거꾸로 뒤집어 놓은 모양
// 탐색을 위한 자료구조

// 같은 level -> 형제
// 차수: 노드의 자식 노드의 개수

// 포화이진트리
// 모든 노드가 두 개의 자식 노드를 가지며
// 모든 잎 노드가 동일한 깊이 또는 레벨을 갖습니다.

// 완전이진트리
// 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있으며,
// 마지막 레벨에서는 왼쪽부터 노드가 순서대로 채워져 있습니다.


// 트리 순회 방법
// 전위순회
// 1. 자신 -> 왼쪽 -> 오른쪽

// 가 -> 나 -> 다 -> 라 -> 마 -> 사


// 중위순회
// 1. 왼쪽 -> 자신 -> 오른쪽

// 다 -> 나 -> 라 -> 가 -> 마 -> 사


// 후위순회
// 1. 왼쪽 -> 오른쪽 -> 자신

// 다 -> 라 -> 나 -> 마 -> 사 -> 가 X
// 다 -> 라 -> 나 -> 사 -> 마 -> 가


// 탐색을 위한 이진 트리
// 왼쪽 자식 노드는 나보다 작고, 오른쪽 자식은 나보다 크다는 특징

// 레드블랙트리

// 그래프 -> 순환할 수 있다.


// 트리 탐색 방법