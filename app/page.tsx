import { Monda } from 'next/font/google';

const monda = Monda({
  subsets: ['latin'],
  weight: '400',
});

const Home = () => {
  return (
    <main className={monda.className}>
      <h1>Home</h1>
    </main>
  );
};

export default Home;
