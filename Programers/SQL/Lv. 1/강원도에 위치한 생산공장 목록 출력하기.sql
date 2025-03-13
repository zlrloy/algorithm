/*
문제 설명
다음은 식품공장의 정보를 담은 FOOD_FACTORY 테이블입니다.
FOOD_FACTORY 테이블은 다음과 같으며 FACTORY_ID, FACTORY_NAME, ADDRESS, TLNO는 각각 공장 ID, 공장 이름, 주소, 전화번호를 의미합니다.

Column name	Type	Nullable
FACTORY_ID	VARCHAR(10)	FALSE
FACTORY_NAME	VARCHAR(50)	FALSE
ADDRESS	VARCHAR(100)	FALSE
TLNO	VARCHAR(20)	TRUE

문제
FOOD_FACTORY 테이블에서 강원도에 위치한 식품공장의 공장 ID, 공장 이름, 주소를 조회하는 SQL문을 작성해주세요. 이때 결과는 공장 ID를 기준으로 오름차순 정렬해주세요.
*/

-- 풀이
-- 1. 식품공장의 공장 ID, 공장 이름, 주소 조회
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS
FROM FOOD_FACTORY;

-- 2. 공장 ID를 기준으로 오름차순 정렬
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS
FROM FOOD_FACTORY
ORDER BY FACTORY_ID ASC;

-- 3. 강원도에 위치한 식품공장 조회 (%는 와일드카드로, "강원도"가 주소의 어느 위치에 있든지 포함되는 값을 찾음)
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS
FROM FOOD_FACTORY
WHERE ADDRESS LIKE '%강원도%'
ORDER BY FACTORY_ID ASC;