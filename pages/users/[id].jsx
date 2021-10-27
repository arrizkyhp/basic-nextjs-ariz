import React from 'react';
import propTypes from 'prop-types';
import Layout from '../../components/Layout';

export default function UserDetail({ user }) {
  return (
    <Layout pageTitle="NextJS Basic | User Detail">
      <h3>
        {user.name}
      </h3>
      <p>
        <b>Username: </b>
        {user.username}
      </p>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
    </Layout>
  );
}

UserDetail.propTypes = {
  user: propTypes.arrayOf(propTypes.object).isRequired,
};

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
