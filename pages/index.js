import Head from 'next/head';
import Image from 'next/image';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineHeart } from 'react-icons/ai';
import rainbow from '../public/photos/iceland/rainbow.png'
import church from '../public/photos/iceland/church.png'

//  Custom Tailwind Components
import TopNav from '../components/TopNav';
import ContentCard from '../components/ContentCard';
import ServicesCard from '../components/ServicesCard';

/**
 * 
 * @returns A portfolio web application.
 */
export default function Portfolio() {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <TopNav
            title={'Your Name'}
            subcomponents={
              [
                <a key={1} className='font-medium' href='#'>Resume</a>,
                <a key={2} className='font-medium' href='#'>Contact</a>,
                <AiOutlineHeart key={3} className='text-2xl' />
              ]
            } />

          {/** Main Content */}
          <div>

            <h1 className='text-5xl text-center pt-10 pb-5 font-bold'>Your Name Photography</h1>

            <ContentCard
              title='“Photography is the art of making memories tangible.”'
              text='- Destin Sparks'
              image={<Image className='lg:px-5 lg:w-1/2' src={rainbow} />}
              dark={false}
            />

            <ContentCard
              title='Title Text Card'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi vel nisl at velit ultricies ornare ac ac libero.
              Sed ut diam non est egestas hendrerit sed ullamcorper nisl.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nunc tempor blandit risus. Nunc lacus mi, tempus sit amet nisi non, rutrum imperdiet nunc.'
              image={<Image className='m-auto lg:w-1/2' src={church} />}
              dark={true}
            />

            <ServicesCard />

            {/** Social Links */}
            <div className='text-5xl flex justify-center gap-16 text-neutral-600 py-5'>
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
          </div>

        </section>
      </main>

    </div>
  )
}
