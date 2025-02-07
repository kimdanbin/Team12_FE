# node 16 이미지를 기반으로 함
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16

ENV REACT_APP_REST_API_KEY=bd3e8c1b259f545078e29a64ccbb3828
ENV REACT_APP_BASE_URL=https://ka8d1b2b62898a.user-app.krampoline.com

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 필요한 React App 소스 코드를 이미지에 복사
COPY . ./

# 필요한 npm 패키지 설치
RUN npm ci
RUN npm install -g serve

# 프로젝트 npm build
RUN npm run build

# 서버 실행 시 사용하는 포트 지정
EXPOSE 3000

# 컨테이너를 시작할 때 빌드된 React App을 서빙
CMD ["serve", "-s", "build"]