import { motion } from 'framer-motion';
import PurposeSection from './PurposeSection';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div id='about' className="bg-white overflow-hidden">
            {/* Dynamic Hero Section */}
            <motion.section
                className="relative bg-green-600 text-white py-24 min-h-screen flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            About Our Youth Community
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl leading-relaxed mb-10 text-blue-100"
                            variants={itemVariants}
                        >
                            Empowering young leaders across all fields - from agriculture to technology - to innovate, collaborate, and create positive change in their communities
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Join Our Movement
                            </motion.button>
                            <motion.button
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Opportunities
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl"
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 0.9, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.section>

            {/* Impact Stats */}
            {/* <motion.section 
        className="py-20 bg-gradient-to-r from-blue-50 to-green-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "10", label: "Young Members", color: "text-blue-600" },
              { number: "1", label: "Countries Represented", color: "text-green-600" },
              { number: "5", label: "Projects Launched", color: "text-blue-600" },
              { number: "5", label: "Hours of Mentorship", color: "text-green-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                variants={itemVariants}
              >
                <motion.div 
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section> */}

            {/* Core Values - Alternating Layout */}
            <motion.section
                className="py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-blue-600 bg-clip-text text-transparent"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Core Values
                    </motion.h2>

                    <div className="space-y-20">
                        {[
                            {
                                title: "Interdisciplinary Innovation",
                                description: "We believe the most impactful solutions come from combining knowledge across fields. Whether you're into agriculture, business, health, or engineering, your perspective matters in our collaborative environment.",
                                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                reverse: false,
                                color: "blue"
                            },
                            {
                                title: "Learning Through Action",
                                description: "Traditional education often separates theory from practice. We create hands-on experiences where young people can apply their knowledge to real-world challenges in their communities.",
                                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                reverse: true,
                                color: "green"
                            },
                            {
                                title: "Diversity as Strength",
                                description: "Our community thrives on the diverse backgrounds, cultures, and perspectives of our members. We actively create inclusive spaces where everyone can contribute and grow.",
                                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                reverse: false,
                                color: "blue"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className={`grid md:grid-cols-2 gap-12 items-center ${value.reverse ? 'md:grid-flow-col-dense' : ''}`}
                                initial={{ x: value.reverse ? 100 : -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <motion.div
                                    className={value.reverse ? 'md:col-start-2' : ''}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={value.image}
                                        alt={value.title}
                                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                                    />
                                </motion.div>
                                <motion.div
                                    className={`${value.reverse ? 'md:col-start-1' : ''} space-y-6`}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <h3 className={`text-3xl md:text-4xl font-bold ${value.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`}>
                                        {value.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                    <motion.button
                                        className={`${value.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'} text-white px-6 py-3 rounded-full font-semibold transition-colors`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Interactive Approach Cards */}
            <motion.section
                className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-600"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Approach
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "Community-Driven",
                                description: "We start by listening to our members' needs and aspirations, creating programs that truly serve diverse youth across all fields of interest.",
                                color: "blue"
                            },
                            {
                                title: "Practical Learning",
                                description: "Our programs combine knowledge with hands-on application, whether it's launching a business, developing a health initiative, or creating sustainable agriculture solutions.",
                                color: "green"
                            },
                            {
                                number: "03",
                                title: "Holistic Development",
                                description: "We focus on developing both professional skills and personal growth, ensuring our members thrive in all aspects of their lives.",
                                color: "blue"
                            }
                        ].map((approach, index) => (
                            <motion.div
                                key={index}
                                className="group relative"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:bg-blue-600 hover:text-white">
                                    <h3 className="text-xl font-bold mb-4 text-gray-800 hover:text-white group-hover:text-white transition-colors">
                                        {approach.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-blue-50 hover:text-white transition-colors">
                                        {approach.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Dynamic CTA Section */}
            <motion.section
                className="py-24 bg-blue-600 text-white relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full opacity-10"
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 80%, #2563eb 0%, transparent 50%)",
                                "radial-gradient(circle at 80% 20%, #16a34a 0%, transparent 50%)",
                                "radial-gradient(circle at 40% 40%, #1e40af 0%, transparent 50%)"
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Ready to Make Your Mark?
                    </motion.h2>
                    <motion.p
                        className="text-xl mb-12 max-w-3xl mx-auto"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Join thousands of young innovators across all fields who are creating positive change in their communities. Whether you&apos;re just starting out or already making waves, we have a place for you.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.button
                            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Join Our Community
                        </motion.button>
                        <motion.button
                            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Programs
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Vision & Mission - Side by Side */}
            <motion.section
                className="py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div
                            className="space-y-8"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Our Vision</h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We envision a world where young people from all backgrounds have equal opportunities to develop their potential, regardless of their field of interest. Where youth leadership drives innovation across all sectors of society.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Youth-led solutions to global challenges in all sectors",
                                    "Equal access to development opportunities worldwide",
                                    "Intergenerational collaboration that values youth perspectives",
                                    "Sustainable development that considers future generations"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-8"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">Our Mission</h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To create the most inclusive, interdisciplinary platform for youth development across all fields. We connect young people with resources, mentors, and peers to turn their ideas into impactful realities.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Provide accessible learning across all disciplines",
                                    "Connect young innovators with mentors and resources",
                                    "Foster cross-sector collaboration among youth",
                                    "Amplify youth voices in all areas of society"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3"
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Background Story */}
            <motion.section
                className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-blue-600 bg-clip-text text-transparent">
                            Our Journey
                        </h2>
                        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Our story began when a group of young people from different fields realized they faced similar challenges - limited opportunities to apply their knowledge, few platforms to connect with like-minded peers, and little recognition for their potential to create change.
                            </p>
                            <p>
                                What started as small local meetups grew into a global movement. Today, we support young innovators across agriculture, business, health, technology, engineering, and sciences - because we believe impactful solutions often emerge at the intersection of different fields.
                            </p>
                            <p>
                                From sustainable farming initiatives led by young agripreneurs to health education programs created by teen advocates, our members are proving that age is no barrier to making a difference. We&apos;re building a future where every young person has the tools and community to turn their passion into purpose.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
            <PurposeSection />
        </div>
    );
};
export default About;