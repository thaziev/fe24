import { GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LoginPage from '@components/pages/LoginPage'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { locale = 'en' } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['all'])),
      seo: {
        title: 'Login',
        description: 'Login to your account',
      },
    },
  }
}

export default LoginPage