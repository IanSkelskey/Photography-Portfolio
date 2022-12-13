import ContentPage from "../components/ContentPage";
import ContentCard from '../components/ContentCard'
import ImageGrid from "../components/ImageGrid";

export default function Gallery() {
    return (
        <ContentPage title='Your Name - Gallery'
            pageComponent={
                <div>
                    <h1>Gallery</h1>
                    <ImageGrid />
                </div>

            } />
    );
}