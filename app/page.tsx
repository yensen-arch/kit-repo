import Image from 'next/image';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  )
}
