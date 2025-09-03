import Management from "./Subpages/Management"

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

            {/* Impact Numbers Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 rounded-xl transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                            <div>Youth Empowered</div>
                        </div>
                        <div className="p-6 rounded-xl transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <div>Projects Completed</div>
                        </div>
                        <div className="p-6 rounded-xl transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                            <div>Partner Organizations</div>
                        </div>
                        <div className="p-6 rounded-xl transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2">4</div>
                            <div>Years of Impact</div>
                        </div>
                    </div>
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

                         {/* Enhanced Timeline */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                                    <span className="text-sm font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">2020</h4>
                                    <p>Started with 3 passionate young volunteers</p>
                                </div>                            
                            </div>
                            <div className="flex items-start space-x-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                                    <span className="text-sm font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">2021</h4>
                                    <p>First major community project launched</p>
                                </div>                            
                            </div>
                            <div className="flex items-start space-x-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                                    <span className="text-sm font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">2022</h4>
                                    <p>Partnership with local schools established</p>
                                </div>                            
                            </div>
                            <div className="flex items-start space-x-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                                    <span className="text-sm font-bold">4</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">2024</h4>
                                    <p>Regional recognition and 500+ active members</p>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories/Testimonials */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Voices from Our Community</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-background/10 backdrop-blur-sm p-8 rounded-xl border border-background/20 hover:bg-background/20 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center font-bold text-lg">
                                    A
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-lg">Sarah M.</h4>
                                    <p>Community Volunteer</p>
                                </div>
                            </div>
                            <p className="italic leading-relaxed">
                                &ldquo;NYC helped me discover my leadership potential and connected me with opportunities I never knew existed. The mentorship program changed my life completely.&rdquo;
                            </p>
                        </div>
                        <div className="bg-background/10 backdrop-blur-sm p-8 rounded-xl border border-background/20 hover:bg-background/20 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-lg">
                                    J
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-lg">John K.</h4>
                                    <p>Community Member</p>
                                </div>
                            </div>
                            <p className="italic leading-relaxed">
                                &ldquo;Being part of NYC taught me that young people can make real change happen. Our community projects have impacted hundreds of families.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Programs */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Programs</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-3">Youth Leadership Guidance</h3>
                            <p className="mb-4">A program developing next-generation leaders</p>
                            <div className="text-sm text-blue-600 font-semibold">Every Sarturday, 08:00 PM</div>
                        </div>
                        <div className="p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-3">Community Action Projects</h3>
                            <p className="mb-4">Hands-on initiatives addressing local challenges</p>
                            <div className="text-sm text-green-600 font-semibold">Contact management</div>
                        </div>
                        <div className="p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-3">Peer Mentorship Network</h3>
                            <p className="mb-4">Connecting experienced members with newcomers</p>
                            <div className="text-sm text-purple-600 font-semibold">Always Open</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 px-6">
                <Management />
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