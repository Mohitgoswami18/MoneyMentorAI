import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 font-[Poppins] text-gray-300 py-10 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* About Section */}
                <div>
                    <h2 className="text-xl font-bold text-yellow-400 mb-4">Money Mentor AI</h2>
                    <p className="text-gray-400">
                        Your AI-driven partner in achieving financial freedom. 
                        Plan smart, track smarter, and master your financial goals with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#features" className="hover:text-yellow-500">Features</a></li>
                        <li><a href="#steps" className="hover:text-yellow-500">How It Works</a></li>
                        <li><a href="#faq" className="hover:text-yellow-500">FAQs</a></li>
                        <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h2>
                    <p>Email: <a href="mailto:support@moneymentorai.com" className="hover:text-yellow-500">support@moneymentorai.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="hover:text-yellow-500">+1 234 567 890</a></p>
                    <div className="flex space-x-4 mt-4">
                        {/* Add social media icons if you want */}
                        <a href="#" className="hover:text-yellow-500">LinkedIn</a>
                        <a href="#" className="hover:text-yellow-500">Twitter</a>
                    </div>
                </div>

            </div>

            <div>
              <div className='mt-12 font-bold text-gray-300 text-3xl mx-auto text-center'>Meet Our Team :)</div>
              <div className='flex mt-12 font-bold max-w-[1080px] mx-auto justify-around'>
                <p1> Mohit Goswami </p1>
                <p1> Arpit Bansal </p1>
                <p1> Akshansh Mittal </p1>
                <p1> Manish Pal </p1>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Money Mentor AI. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
