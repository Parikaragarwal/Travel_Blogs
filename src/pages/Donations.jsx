import Container from '../container/container';
import { Header } from '../components';

const Donation = () => {
    return (
        <div className="min-h-screen bg-orange-100 pt-2 px-4 sm:px-6 lg:px-12">
            <Header />

            <Container classname="pt-20">
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 text-gray-800 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-orange-600 mb-4">Support the Journey</h1>

                    <p className="text-lg mb-6 leading-relaxed">
                        This blog is powered by stories, stumbles, sunrises — and sometimes, your support. ❤️
                    </p>
                    
                    <p className="text-md text-gray-600 mb-10">
                        If you feel like buying us a coffee, or fueling our next travel story, scan the QR code below. Every bit counts and means the world.
                    </p>

                    <div className="flex justify-center">
                        <div className="p-4 bg-orange-50 rounded-2xl border-4 border-orange-300 shadow-lg">
                            <img 
                                src="Gpay.jpeg" 
                                alt="Donate via GPay QR" 
                                className="max-h-[420px] w-auto object-contain rounded-xl"
                            />
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-8">
                        UPI donations are safe & secure. Thank you for being part of this ride. 🌍
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Donation;
