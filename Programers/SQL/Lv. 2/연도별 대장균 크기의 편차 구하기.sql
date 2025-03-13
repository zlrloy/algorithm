/*
문제 설명
대장균들은 일정 주기로 분화하며, 분화를 시작한 개체를 부모 개체, 분화가 되어 나온 개체를 자식 개체라고 합니다.
다음은 실험실에서 배양한 대장균들의 정보를 담은 ECOLI_DATA 테이블입니다.
ECOLI_DATA 테이블의 구조는 다음과 같으며, ID, PARENT_ID, SIZE_OF_COLONY, DIFFERENTIATION_DATE, GENOTYPE 은 각각 대장균 개체의 ID, 부모 개체의 ID, 개체의 크기, 분화되어 나온 날짜, 개체의 형질을 나타냅니다.

Column name	Type	Nullable
ID	INTEGER	FALSE
PARENT_ID	INTEGER	TRUE
SIZE_OF_COLONY	INTEGER	FALSE
DIFFERENTIATION_DATE	DATE	FALSE
GENOTYPE	INTEGER	FALSE
최초의 대장균 개체의 PARENT_ID 는 NULL 값입니다.

문제
분화된 연도(YEAR), 분화된 연도별 대장균 크기의 편차(YEAR_DEV), 대장균 개체의 ID(ID) 를 출력하는 SQL 문을 작성해주세요.
분화된 연도별 대장균 크기의 편차는 분화된 연도별 가장 큰 대장균의 크기 - 각 대장균의 크기로 구하며 결과는 연도에 대해 오름차순으로 정렬하고 같은 연도에 대해서는 대장균 크기의 편차에 대해 오름차순으로 정렬해주세요.
*/

-- 풀이
-- 1. 분화된 연도별 가장 큰 대장균의 크기 확인
SELECT YEAR(DIFFERENTIATION_DATE) AS YEAR, MAX(SIZE_OF_COLONY) AS MAX_SIZE
FROM ECOLI_DATA
GROUP BY YEAR(DIFFERENTIATION_DATE);

-- 2. 각 대장균의 분화된 연도별 대장균 크기의 편차
SELECT YEAR(A.DIFFERENTIATION_DATE) AS YEAR, ABS(A.SIZE_OF_COLONY - B.MAX_SIZE) AS YEAR_DEV, A.ID
FROM ECOLI_DATA A
LEFT JOIN (SELECT YEAR(A.DIFFERENTIATION_DATE) AS YEAR, MAX(A.SIZE_OF_COLONY) AS MAX_SIZE
           FROM ECOLI_DATA A
           GROUP BY YEAR(A.DIFFERENTIATION_DATE)) B
       ON YEAR(A.DIFFERENTIATION_DATE) = B.YEAR
ORDER BY YEAR, YEAR_DEV;