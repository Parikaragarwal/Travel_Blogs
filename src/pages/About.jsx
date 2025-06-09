import Container from '../container/container';
import { Header } from '../components';

const About = () => {
    return (
        <div className="min-h-screen bg-orange-200 pt-2 px-4 sm:px-6 lg:px-102">
            <Header />
            <Container classname="pt-50">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-10 text-gray-800 dark:text-gray-100">
                    <h1 className="text-3xl font-bold mb-4 text-orange-600">About Us</h1>
                    <p className="text-lg mb-4 leading-relaxed">
                        Welcome to our travel blogging platform — a space built with love for wanderers, storytellers, and seekers.
                        This site is a reflection of the journeys we take and the stories we gather along the way.
                    </p>
                    <p className="text-lg mb-4 leading-relaxed">
                        Our goal is simple: to inspire, to document, and to create a cozy corner of the web where every traveler’s voice is heard.
                        Whether you’re chasing sunsets or coding under them, you belong here.
                    </p>
                    <p className="text-lg leading-relaxed">
                        This platform was handcrafted using React, Appwrite, and a strong brew of late-night ideas.
                        It's more than just posts — it’s a growing archive of lived experiences, yours and ours.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default About;
