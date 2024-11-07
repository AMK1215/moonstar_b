import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import GamesPage from "../pages/GamesPage";
import PromotionPage from "../pages/PromotionPage";
import ContactPage from "../pages/ContactPage";
import AccountPage from "../pages/AccountPage";
import ProfilePage from "../pages/ProfilePage";
import WalletPage from "../pages/WalletPage";
import DepositPage from "../pages/DepositPage";
import WithDrawPage from "../pages/WithDrawPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import BankPage from "../pages/BankPage";
import AddBankPage from "../pages/AddBankPage";
import ChangeLanguagePage from "../pages/ChangeLanguagePage";
import GameLogsPage from "../pages/GameLogsPage";
import UnAuthLayout from "../components/UnAuthLayout";
import Browser from "../pages/Browser";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            index: true,
            element: <HomePage />
         },
         {
            path: '/games',
            element: <GamesPage />
         },
         {
            path: '/browser',
            element: <Browser />
         },
         {
            path: '/promotion',
            element: <PromotionPage />
         },
         {
            path: '/contact',
            element: <ContactPage />
         },
         {
            path: '/account',
            element: <AccountPage />
         },
         {
            path: '/profile',
            element: <ProfilePage />
         },
         {
            path: '/wallet',
            element: <WalletPage />
         },
         {
            path: '/change-language',
            element: <ChangeLanguagePage />
         },
         {
            path: '/bank',
            element: <BankPage />
         },
         {
            path: '/game-logs',
            element: <GameLogsPage />
         },
         {
            path: '/add-bank',
            element: <AddBankPage />
         }, ,
         {
            path: '/deposit',
            element: <DepositPage />
         },
         {
            path: '/with-draw',
            element: <WithDrawPage />
         },
         {
            path: '/reset-password',
            element: <ResetPasswordPage />
         }
      ]
   },
   {
      path: '/login',
      element: <UnAuthLayout />,
      children: [
         {
            index: true,
            element: <AuthPage />
         }
      ]
   },

])