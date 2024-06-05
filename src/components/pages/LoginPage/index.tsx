import React from 'react';
import { useTranslation } from 'next-i18next';
import LoginForm from '@components/molecules/LoginForm';
import styles from './index.module.css';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="https://studio-next.jitera.app/no.png" alt="Quotation Marks Logo" />
        </div>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{t('loginPage.login')}</span>
        </div>
        <LoginForm />
        <a href="#" className={styles.registerLink}>
          {t('loginPage.dontHaveAnAccount')} <span>{t('loginPage.register')}</span>
        </a>
      </div>
      <div className={styles.imageSide}></div>
    </div>
  );
};

export default LoginPage;