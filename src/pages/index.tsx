import { videos } from '@/@helpers/videos';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Banner } from '@/components/home/Banner';

import videoImage from '../assets/videoImage.svg';

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
        <Banner.VideoContainer videoImage="banner" img={videoImage} />
      </Banner.Root>

      <div className="flex gap-5 px-10 -mt-44">
        {videos.map((video) => (
          <Banner.VideoContainer
            videoImage="slide"
            key={video.id}
            img={video.img}
          />
        ))}
      </div>
    </main>
  );
}
