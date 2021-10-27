import propTypes from 'prop-types';
import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
import styles from '../../styles/Layout.module.css';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

Layout.defaultProps = {
  pageTitle: 'NextJS Basic',
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
  pageTitle: propTypes.string,
};
