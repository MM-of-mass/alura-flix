import { dataScience } from '@/@helpers/videos';
import { Banner } from '../Banner';

export default function DataScience() {
  return (
    <>
      <h2 className="bg-green-600 w-[204px] text-[35px]">Data Science</h2>
      <div className="flex gap-5 ">
        {dataScience.map(dataScience => (
          <Banner.VideoContainer videoImage="slide" key={dataScience.id} img={dataScience.img} />
        ))}
      </div>
    </>
  );
}
