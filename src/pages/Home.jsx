import { Header, Footer, Button } from "../components";
import Container from "../container/container";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion} from "framer-motion";

const Home = () => {
const navigate = useNavigate();

const handleExploreClick = () => {
    navigate("/all-posts");
};
const testimonials = [
    {
    name: "Aarav Mehta",
    image: "https://www.shutterstock.com/image-photo/smiling-young-indian-business-man-260nw-2184781075.jpg",
    story: "“The Himalayas didn’t just challenge my stamina, they rewired my soul. Solitude finally felt like home.”"
    },
    {
    name: "Isha Kapoor",
    image: "https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=uKfBCoTeP54nA8KOzXDLIyoU31nZ4a4UreFE4p_x_3A=",
    story: "“Every step in Spiti felt like a conversation with the wind. I returned not with photos, but philosophies.”"
    },
    {
    name: "Dev Sharma",
    image: "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg?semt=ais_items_boosted&w=740",
    story: "“Traveling solo taught me what textbooks never did—how to be alone and not feel lonely.”"
    },
    {
    name: "Meera Joshi",
    image: "https://data1.ibtimes.co.in/en/full/645110/indian-woman-office.jpg",
    story: "“From Rajasthan’s sand to Sikkim’s snow—every texture of India added a new layer to me.”"
    }
];


return (
    <div className="bg-white min-h-screen flex flex-col justify-between pt-2">
        <Header className="absolute top-0 left-0 w-full z-20" />
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-blue-100 to-white">
        <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            src="https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/1540801500_box1_20200205140033.jpg"
            alt="Scenery Splash"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 rounded-b-[3rem]"
        />
        <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-3xl shadow-xl text-center max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            The Journey Begins Not with a Step—But a Thought.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
            Welcome to stories that walk, rest, and reflect.
            </p>
        </div>
        </section>

      {/* Quote Section */}
        <section className="py-16 bg-white">
        <Container>
        <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-black text-2xl italic max-w-4xl mx-auto"
        >
            “Travel not to escape life, but to find the parts of it too quiet to hear at home.”
        </motion.blockquote>
        </Container>
        </section>

      {/* Vision Statement */}
        <section className="py-16 bg-blue-50">
        <Container>
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-gray-700 text-lg"
        >
            <p>
            We aren’t explorers chasing places—we’re travelers chasing presence. These
            stories are reminders. Of laughter. Of silence. Of stillness.
            </p>
        </motion.div>
        </Container>
    </section>

      {/* CTA Button */}
    <section className="py-12 bg-orange-50 text-center">
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <Button onClick={handleExploreClick} className="text-xl px-10 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-orange-400 to-blue-400 text-white">
            Read The Stories
        </Button>
        </motion.div>
    </section>
    
    {/* Testimonial Section */}
<section className="py-20 bg-white">
    <Container className="px-4 sm:px-6 lg:px-12">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Voices from the Journey</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {testimonials.map((item, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
        className="bg-orange-100 rounded-3xl overflow-hidden shadow-xl p-4 flex flex-col justify-start aspect-[4/3]"
        >
            <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-300">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base">{item.story}</p>
        </motion.div>
    ))}
    </div>
</Container>
</section>




      {/* Footer */}
    <Footer />
    </div>
);
};
export default Home;
