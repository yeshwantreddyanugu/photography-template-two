
import { Link } from "react-router-dom";
import { Camera, Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wider">GOLDEN GRID STUDIO</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-black transition-colors">Services</a>
              <a href="#gallery" className="text-gray-600 hover:text-black transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wider">
            GOLDEN GRID
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8 tracking-wide">
            PHOTOGRAPHY STUDIO
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Capturing life's most precious moments with artistic vision and professional excellence. 
            Every frame tells a story, every shot preserves a memory.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
            <Camera className="mr-2 h-5 w-5" />
            View Our Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 tracking-wide">About Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Golden Grid Studio is a premier photography studio dedicated to capturing the essence of 
                every moment. With years of experience and a passion for visual storytelling, we specialize 
                in creating timeless images that speak to the heart.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our approach combines technical expertise with artistic vision, ensuring that every photograph 
                is not just a picture, but a piece of art that tells your unique story.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From intimate portraits to grand celebrations, we bring creativity and professionalism to 
                every shoot, delivering images that you'll treasure for a lifetime.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=700&fit=crop" 
                alt="Photographer at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 tracking-wide">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer a comprehensive range of photography services to capture your most important moments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4">Portrait Photography</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional portraits that capture personality and character, perfect for individuals, 
                families, and corporate needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4">Event Photography</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive coverage of weddings, corporate events, and special occasions with 
                attention to every detail.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4">Commercial Photography</h3>
              <p className="text-gray-600 leading-relaxed">
                High-quality commercial photography for businesses, products, and marketing materials 
                that make an impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 tracking-wide">Our Gallery</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A showcase of our finest work - click to explore our complete collection
            </p>
          </div>
          
          <div className="relative group cursor-pointer" onClick={() => window.location.href = '/gallery'}>
            <Link to="/gallery">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop" 
                  alt="Featured Photography Work"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-light mb-2">View Full Gallery</h3>
                    <p className="text-lg">Click to explore all our work</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 tracking-wide">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to capture your special moments? Let's discuss your photography needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-gray-600 mr-4" />
                  <span className="text-gray-600">info@goldengridstudio.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-gray-600 mr-4" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-6 w-6 text-gray-600 mr-4" />
                  <span className="text-gray-600">@goldengridstudio</span>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white py-4">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-light mb-4 tracking-wider">GOLDEN GRID STUDIO</div>
          <p className="text-gray-400 mb-6">Capturing moments, creating memories</p>
          <div className="flex justify-center space-x-6">
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Mail className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Phone className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            © 2024 Golden Grid Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
