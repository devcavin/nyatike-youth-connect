import leader1 from "../../assets/images/about/leaders/leader1.jpeg"
import leader2 from "../../assets/images/about/leaders/leader2.jpeg"

export const About = () => {
    return (
        <div>
            {/* Hero Section - Brief Community Description */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">About US</h1>
                    <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
                        NYC is more than a youth group it&apos;s a vision to unite, inspire, and elevate every young person across our sub-county. We&apos;re building a space where ideas grow, voices matter, and opportunities are within reach. This is our time to rise together.
                    </p>

                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">What Drives Us</h2>
                        <p className="text-xl max-w-3xl mx-auto leading-relaxed">Our foundation is built on empowering youth and creating lasting impact</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Mission */}
                        <div className="rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-600">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
                            <p className="text-center leading-relaxed">
                                To create a supportive platform where young people can connect, learn, grow, and develop the skills needed to become tomorrow&apos;s leaders and changemakers.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-green-600">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">

                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
                            <p className="text-center leading-relaxed">
                                A world where every young person has the opportunity, resources, and community support to reach their full potential and contribute meaningfully to society.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-600">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-center">Our Values</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full mr-3"></span>
                                    <span className="font-medium">Inclusivity</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full mr-3"></span>
                                    <span className="font-medium">Innovation</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full mr-3"></span>
                                    <span className="font-medium">Collaboration</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full mr-3"></span>
                                    <span className="font-medium">Empowerment</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full mr-3"></span>
                                    <span className="font-medium">Authenticity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Story & Impact */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
                        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                            From a small group of passionate individuals to a thriving community
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-xl p-8">
                            <h3 className="text-3xl font-bold mb-6">How We Started</h3>
                            <p className="text-lg leading-relaxed mb-6">
                                What began as informal meetups among friends who shared a passion for community service has grown into a vibrant network of young changemakers. We recognized the need for a platform where youth could connect, collaborate, and create meaningful impact together.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Today, we&apos;re proud to be a community where young people from diverse backgrounds come together to learn, grow, and make a difference in their communities through innovative projects and collaborative initiatives.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 p-6 rounded-lg shadow-md">
                                <div className="w-6 h-6 rounded-full mt-2 flex-shrink-0">
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">2020</h4>
                                    <p>Started with 3 passionate young volunteers</p>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">                       
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
                        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                            Passionate young leaders driving positive change in our communities
                        </p>
                    </div>                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="rounded-full mx-auto mb-6 flex items-center justify-center">
                                <img src={leader2} alt="Image of the director" className="rounded-xl w-45 h-50" />    
                            </div>
                            <h3 className="text-xl font-bold mb-2">Mr Maurice</h3>
                            <h4 className="font-medium mb-4">Leadership & Strategy</h4>
                            <p className="text-sm leading-relaxed">                                
                                Leading our community&apos;s vision and ensuring we stay true to our mission of empowering youth.
                            </p>
                        </div>
                        <div className="rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="rounded-full mx-auto mb-6 flex items-center justify-center">
                                <img src={leader1} alt="Image of the programs coordinator" className="rounded-xl w-45 h-50" />    
                            </div>
                            <h3 className="text-xl font-bold mb-2">Mr Ambrosse</h3>
                            <h4 className="font-medium mb-4">Events & Projects</h4>
                            <p className="text-sm leading-relaxed">                                
                                Organizing impactful programs, workshops, and community service projects that make a difference.
                            </p>
                        </div>
                        <div className="rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="rounded-full mx-auto mb-6 flex items-center justify-center">
                                <img src={""} alt="Image of the community outricher" className="rounded-xl w-45 h-50" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Mr Ibrahim</h3>
                            <h4 className="font-medium mb-4">Community Engagement</h4>
                            <p className="text-sm leading-relaxed">                                
                                Building connections with new members and partner organizations to expand our impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 px-6">                
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">                            
                        Creating opportunities for growth, connection, and positive impact
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Skill Development</h3>
                        <p className="leading-relaxed">                                
                            Workshops, training sessions, and mentorship programs designed to help young people develop personal and professional skills for future success.
                        </p>
                    </div>                        
                    <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Community Service</h3>
                        <p className="leading-relaxed">                                
                            Organizing volunteer opportunities and service projects that address local community needs and create positive social impact.
                        </p>
                    </div>
                    <div className="rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Networking & Events</h3>
                        <p className="leading-relaxed">                                
                            Creating spaces for young people to connect, share ideas, and build lasting relationships through social events and professional networking opportunities.
                        </p>
                    </div>
                </div>
            </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">                        
                        Join our community of passionate young changemakers and be part of something bigger. Together, we can create positive impact and build a better future.
                    </p>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <a href="/community">
                            <button className="px-8 py-4 border-t border-b rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[200px] shadow-lg">                                
                                Join the Community
                            </button>
                        </a>
                        <a href="/services">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[200px] shadow-lg">                           
                                See our Services
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}