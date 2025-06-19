
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-light tracking-wider">GOLDEN GRID STUDIO</Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wider">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of our finest photography work showcasing moments, emotions, and artistic vision
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={photo} 
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-light">View Photo</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6 tracking-wide">Ready to Create Your Story?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let us capture your special moments with the same care and artistry you see in our gallery
          </p>
          <Link to="/">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-light mb-4 tracking-wider">GOLDEN GRID STUDIO</div>
          <p className="text-gray-400">Capturing moments, creating memories</p>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            © 2024 Golden Grid Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
