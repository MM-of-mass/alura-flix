import { dataScience, frontEnd, mobile } from '@/@helpers/videos';
import { Button } from '@/components/Button';
import { Header } from '@/components/header';
import { Banner } from '@/components/home/Banner';

import videoImage from '../assets/videoImage.svg';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header.Root>
        <Header.Logo />
        <Button.Home text="Novo vídeo" />
      </Header.Root>
      <Banner.Root>
        <Banner.Container>
          <Banner.Category title="Front End" />
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
      <div className="px-10  -mt-44">
        <div className="flex gap-5">
          {frontEnd.map(frontEnd => (
            <Banner.VideoContainer videoImage="slide" key={frontEnd.id} img={frontEnd.img} />
          ))}
        </div>

        <h2 className="bg-green-600 w-[204px] text-[35px]">Data Science</h2>
        <div className="flex gap-5 ">
          {dataScience.map(dataScience => (
            <Banner.VideoContainer videoImage="slide" key={dataScience.id} img={dataScience.img} />
          ))}
        </div>

        <h2 className="bg-yellow-500 text-[35px] w-[204px] text-center ">Mobile</h2>
        <div className="flex gap-5">
          {mobile.map(mobile => (
            <Banner.VideoContainer videoImage="slide" key={mobile.id} img={mobile.img} />
          ))}
        </div>
      </div>
    </main>
  );
}
