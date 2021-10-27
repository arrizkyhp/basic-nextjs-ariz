import React from 'react';
import propTypes from 'prop-types';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

export default function Users({ dataUsers }) {
  const router = useRouter();

  return (
    <Layout pageTitle="NextJS Basic | Users">
      <div className={styles.users}>
        {dataUsers.map((user, index) => (
          <div className={styles.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)} onKeyPress={() => router.push(`/user/${user.id}`)} role="button" tabIndex={index}>
            <b>
              <p className={styles.name}>{user.name}</p>
            </b>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

Users.propTypes = {
  dataUsers: propTypes.arrayOf(propTypes.object).isRequired,
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
