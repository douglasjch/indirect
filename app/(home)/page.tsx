import Link from 'next/link';
import Image from 'next/image';
import Pict01 from '../../public/oppressive-taxes.jpg'


<link rel="icon" type="image/svg" />

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center mt-4">
    <h1 className="mb-4 text-2xl font-bold">Indirect taxes vs Direct taxes</h1>
    <hr />
    
    <p className="text-fd-muted-foreground">
      Business and Corporate Income Taxes are {' '}
      <Link
        href="/docs"
        className="text-fd-foreground font-semibold underline"
      >
        Indirect Taxes
      </Link>{' '}
      and see the documentation.
    </p>

    <p className="text-fd-muted-foreground">
      Individual Income Taxes are collected as {' '}
      <Link
        href="/docs/directTaxes"
        className="text-fd-foreground font-semibold underline"
      >
        Direct Taxes
      </Link>{' '}
      and see the documentation.
    </p>

      <div className='flex flex-col mt-10'>
        <Link
            href="/plan"
            className="underline font-stretch-50% font-bold">
            A Plan & Constitutional Reasons to Collect Individual Income Taxes Indirectly
        </Link>
        <Image
          src={Pict01}
          alt="Oppressive Taxes"
          className="mx-auto bg-local bg-opacity-50 mb-4"
          width={500}
          height={500}
          blurDataURL="data:..." 
          placeholder="blur"
  />
      </div>
      <div>          
    </div>
  <footer className='mb-4'>
    
  </footer>
  </main>
);
}
