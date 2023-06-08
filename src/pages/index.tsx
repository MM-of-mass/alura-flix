import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Banner } from '@/components/home/Banner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header.Root>
        <Header.Logo />
        <Button.Home text="Front End" />
      </Header.Root>
      <Banner.Root>
        <Banner.Container>
          <Banner.Category />
          <Banner.Content>
            <Banner.Title title="SEO com React" />
            <Banner.TextContent
              text="Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se
                engajar na resolução de um problema para poder aplicar todo o conhecimento
                adquirido na Formação React."
            />
          </Banner.Content>
        </Banner.Container>
        <Banner.VideoContainer />
      </Banner.Root>
    </main>
  );
}
