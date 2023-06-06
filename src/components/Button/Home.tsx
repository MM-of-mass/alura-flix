import Link from 'next/link';

export default function Home() {
  return (
    <Link href="/newvideo">
      <button className="border border-white px-10 py-2 font-semibold text-xl rounded-sm hover:opacity-80">
        Novo vídeo
      </button>
    </Link>
  );
}
