import { Button } from '@/components/Button';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header.Root>
        <Header.Logo />
        <Button.Home />
      </Header.Root>
    </main>
  );
}
