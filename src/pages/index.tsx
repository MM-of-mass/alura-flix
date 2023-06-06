import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Banner } from '@/components/home/Banner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header.Root>
        <Header.Logo />
        <Button.Home />
      </Header.Root>
      <Banner.Root>
        <Banner.Container>
          <Banner.Category />
          <Banner.Content>
            <Banner.Title />
            <Banner.TextContent />
          </Banner.Content>
        </Banner.Container>
        <Banner.VideoContainer />
      </Banner.Root>
    </main>
  );
}
