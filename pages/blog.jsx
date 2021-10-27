import propTypes from 'prop-types';
import Layout from '../components/Layout';

export default function Blog({ dataBlog }) {
  return (
    <Layout pageTitle="NextJS Basic | Blog">
      {dataBlog.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
}

Blog.propTypes = {
  dataBlog: propTypes.arrayOf(propTypes.object).isRequired,
};

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
