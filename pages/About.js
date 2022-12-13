import ContentPage from "../components/ContentPage";

/**
 * 
 * @returns The about page.
 */
export default function About() {
    return (
        <ContentPage title='Your Name - About'
            pageComponent={
                <h1>About the Photographer</h1>
            } />
    );
}