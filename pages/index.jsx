import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="NextJS Basic | Homepage">
      <Image src="/profile.jpg" width={200} height={180} alt="profile" />
      <img src="/profile.jpg" alt="" />
      <h1>Hello Arrizky</h1>
    </Layout>
  );
}
