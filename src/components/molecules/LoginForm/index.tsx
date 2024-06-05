import React from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { useTranslation } from 'next-i18next';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Input label={t('loginPage.emailAddress')} id="email" type="email" placeholder={t('loginPage.enterYourEmailAddress')} />
      <Input label={t('loginPage.password')} id="password" type="password" placeholder={t('loginPage.enterYourPassword')} />
      <Button type="submit">{t('loginPage.login')}</Button>
    </form>
  );
};

export default LoginForm;