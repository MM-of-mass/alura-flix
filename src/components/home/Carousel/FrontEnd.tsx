import { frontEnd } from '@/@helpers/videos';
import { Banner } from '../Banner';

export default function FrontEnd() {
  return (
    <div className="flex gap-5">
      {frontEnd.map(frontEnd => (
        <Banner.VideoContainer videoImage="slide" key={frontEnd.id} img={frontEnd.img} />
      ))}
    </div>
  );
}
