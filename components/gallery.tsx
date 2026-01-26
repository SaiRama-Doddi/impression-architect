'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioImages = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Living Space',
    description: 'Luxurious living room with premium finishes and elegant furniture arrangement.',
    image: 'https://images.unsplash.com/photo-1565182999555-2142541902f1?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Contemporary Kitchen',
    category: 'Kitchen',
    description: 'State-of-the-art kitchen design with modern appliances and premium cabinetry.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Executive Office',
    category: 'Office Space',
    description: 'Professional office space designed for maximum productivity and comfort.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Luxury Bedroom',
    category: 'Living Space',
    description: 'Serene bedroom design with luxurious amenities and elegant aesthetics.',
    image: 'https://images.unsplash.com/photo-1540932239986-7af3bfae6e14?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Modular Storage',
    category: 'Modular Design',
    description: 'Custom modular solutions maximizing space and functionality.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Spa Bathroom',
    category: 'Living Space',
    description: 'Luxurious bathroom with premium fixtures and spa-like ambiance.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop'
  },
  {
    id: 7,
    title: 'Modern Workspace',
    category: 'Office Space',
    description: 'Contemporary workspace combining aesthetics with ergonomic design.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop'
  },
  {
    id: 8,
    title: 'Home Library',
    category: 'Living Space',
    description: 'Elegant home library with custom shelving and premium finishes.',
    image: 'https://images.unsplash.com/photo-1507842485943-583b6480e4d8?w=600&h=400&fit=crop'
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openImage = (image: typeof portfolioImages[0], index: number) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = imageIndex === 0 ? portfolioImages.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
    setSelectedImage(portfolioImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = imageIndex === portfolioImages.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
    setSelectedImage(portfolioImages[newIndex]);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer h-60"
            onClick={() => openImage(image, index)}
          >
            <Image
              src={image.image || "/placeholder.svg"}
              alt={image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-primary font-semibold uppercase">{image.category}</p>
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-primary transition-colors"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-primary transition-colors"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image Info */}
            <div className="mt-4 text-white">
              <p className="text-sm text-primary font-semibold uppercase mb-1">{selectedImage.category}</p>
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <p className="text-sm text-gray-400 mt-4">
                {imageIndex + 1} / {portfolioImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
