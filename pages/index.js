import rainbow from '../public/photos/iceland/rainbow.png'
import church from '../public/photos/iceland/church.png'

import Image from 'next/image';

import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

import ContentCard from '../components/ContentCard';
import ServicesCard from '../components/ServicesCard';
import ContentPage from '../components/ContentPage';

export default function Home() {
  return (
    <ContentPage title='Your Name - Portfolio'
      pageComponent={
        <div>
          <h1>Your Name Photography</h1>

          <ContentCard
            title='“Photography is the art of making memories tangible.”'
            text='- Destin Sparks'
            image={<Image src={rainbow} />}
            dark={false}
          />
          <ContentCard
            title='Title Text Card'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi vel nisl at velit ultricies ornare ac ac libero.
                        Sed ut diam non est egestas hendrerit sed ullamcorper nisl.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Nunc tempor blandit risus. Nunc lacus mi, tempus sit amet nisi non, rutrum imperdiet nunc.'
            image={<Image src={church} />}
            dark={true}
          />

          <div id='services'>
            <ServicesCard />
          </div>

          {/** Social Links */}
          <div className='text-5xl flex justify-center gap-16 text-neutral-600 py-5'>
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </div>
      } />

  );
}