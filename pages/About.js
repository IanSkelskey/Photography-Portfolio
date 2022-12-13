import ContentCard from "../components/ContentCard";

import church from '../public/photos/iceland/church.png'

import Image from 'next/image';

export default function About() {
    return (
        <ContentCard
            title="Your Name"
            image={ <Image src={church} /> } />
    );
}