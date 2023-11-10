import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import KakaoOuathPage from './pages/KakaoOuathPage';
import RegisterBankPage from './pages/RegisterBankPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleWriteIntroPage from './pages/ArticleWriteIntroPage';
import ArticleWritePage from './pages/ArticleWritePage';
import ProtectedRoute from './components/layout/ProtectedRoute';
import MyPage from './pages/mypage/MyPage';
import AdminPage from './pages/mypage/AdminPage';
import AdminAuthPage from './pages/mypage/AdminAuthPage';
import MyPageWrittenArticleListPage from './pages/mypage/MyPageWrittenArticleListPage';
import MyPagePickupArticleListPage from './pages/mypage/MyPagePickupArticleListPage';
import MyPageWrittenArticleDetailPage from './pages/mypage/MyPageWrittenArticleDetailPage';
import MyPagePickupArticleDetailPage from './pages/mypage/MyPagePickupArticleDetailPage';
import UploadStudentCardPage from './pages/mypage/UploadStudentCardPage';
import ErrorPage from './pages/ErrorPage';
import routes from './constant/routes';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.loginKakao} element={<KakaoOuathPage />} />
        <Route path={routes.registerBank} element={<RegisterBankPage />} />
        <Route path={routes.article} element={<ArticleListPage />} />
        <Route path={routes.detailArticle} element={<ArticleDetailPage />} />
        {/* 아래 각 페이지들에 대해 requiedAuth 추가 필요 */}
        <Route path={routes.articleWriteIntro} element={<ArticleWriteIntroPage />} />
        <Route path={routes.articleWrite} element={<ArticleWritePage />} />
        <Route
          path={routes.mypage}
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
        <Route path={routes.admin} element={<AdminPage />} />
        <Route path={routes.adminAuth} element={<AdminAuthPage />} />
        <Route path={routes.writtenArticle} element={<MyPageWrittenArticleListPage />} />
        <Route path={routes.pickupArticle} element={<MyPagePickupArticleListPage />} />
        <Route path={routes.writtenArticleDetail} element={<MyPageWrittenArticleDetailPage />} />
        <Route path={routes.pickupArticleDetail} element={<MyPagePickupArticleDetailPage />} />
        <Route path={routes.uploadStudentCard} element={<UploadStudentCardPage />} />
        <Route path={routes.error} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
