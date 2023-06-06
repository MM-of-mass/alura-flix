import Image from 'next/image';
import videoImage from '../../../assets/videoImage.svg';

export default function VideoDefault() {
  return (
    <div className="flex items-center justify-center flex-1">
      <Image src={videoImage} width={646} height={334} alt="" />
    </div>
  );
}
