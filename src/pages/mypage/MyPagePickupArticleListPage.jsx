import React from 'react';
import OtherNav from '@components/atoms/nav/OtherNav';
import MyPagePickupArticleCards from '@components/molecules/MyPagePickupArticleCards';
// import { useQuery } from '@tanstack/react-query';
// import { getPickupArticles } from '@/apis/article';

const PickupArticlePage = () => {
  // 픽업한 공고글 목록 조회(마이페이지) 요청
  // 데이터를 받아와서 공고글 목록을 articles 변수에 담고
  // MyPagePickupArticleCards로 articles를 props로 넘겨주면 끝
  // const { data } = useQuery(['getPickerArticles'], () => getPickerArticles());
  // const articles = data?.response?.content;

  const articles = [
    {
      boardId: 9,
      shopName: '전남대 후문 더벤티',
      destination: '공과대학 7호관',
      finishedAt: 1696992289,
      tip: 1500,
      isMatch: true,
    },
    {
      boardId: 8,
      shopName: '전남대 후문 스타벅스',
      destination: '공과대학 7호관',
      finishedAt: 1696992289,
      tip: 1500,
      isMatch: true,
    },
    {
      boardId: 7,
      shopName: '전남대 후문 더벤티',
      destination: '공과대학 6호관',
      finishedAt: 1696040640,
      tip: 1000,
      isMatch: true,
    },
    {
      boardId: 6,
      shopName: '전남대 후문 이디야',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1500,
      isMatch: true,
    },
    {
      boardId: 5,
      shopName: '전남대 후문 공차',
      destination: '공과대학 7호관',
      finishedAt: 1696992289,
      tip: 1000,
      isMatch: true,
    },
    {
      boardId: 4,
      shopName: '전남대 후문 스타벅스',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      isMatch: true,
    },
    {
      boardId: 3,
      shopName: '전남대 후문 스타벅스',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      isMatch: true,
    },
    {
      boardId: 2,
      shopName: '전남대 후문 이디야',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      isMatch: true,
    },
    {
      boardId: 1,
      shopName: '전남대 후문 공차',
      destination: '공과대학 7호관',
      finishedAt: 1696040640,
      tip: 1000,
      isMatch: true,
    },
  ];

  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center text-xl text-blue my-6">수락한 공고글</div>
      <div className="h-[600px] overflow-y-auto overflow-x-hidden">
        <MyPagePickupArticleCards articles={articles} />
      </div>
    </div>
  );
};

export default PickupArticlePage;
