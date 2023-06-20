import { mobile } from '@/@helpers/videos';
import { Banner } from '../Banner';

export default function Mobile() {
  return (
    <>
      <h2 className="bg-yellow-500 text-[35px] w-[204px] text-center ">Mobile</h2>
      <div className="flex gap-5">
        {mobile.map(mobile => (
          <Banner.VideoContainer videoImage="slide" key={mobile.id} img={mobile.img} />
        ))}
      </div>
    </>
  );
}
