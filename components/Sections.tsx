
import Image from 'next/image';
import { CTAButton } from './Button';
import React from 'react';

export const SectionTwo = () => {
  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6 leading-tight">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h2>
          <p className="text-[#4b5563] leading-relaxed mb-8">
            Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
          </p>
          <h4 className="font-semibold text-[#1f2937] mb-4">Key Points:</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-[#ea6b42] font-semibold text-2xl shrink-0 mt-1">97%</span>
              <p className="text-[#4b5563] text-sm">Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#ea6b42] font-semibold text-2xl shrink-0 mt-1">84%</span>
              <p className="text-[#4b5563] text-sm">Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#ea6b42] font-semibold text-2xl shrink-0 mt-1">92%</span>
              <p className="text-[#4b5563] text-sm">Our dog food's high protein and fat digestibility contribute to ideal stool quality.</p>
            </div>
          </div>
          <div className="mt-8">
            <CTAButton className="text-sm w-full">Give your furry friend the gift of wholesome nutrition</CTAButton>
          </div>
        </div>
        <div className="flex-1 w-full relative h-[300px] md:h-[450px]">
          <Image 
            src="/dog.png" 
            alt="Happy dog with dog food bag" 
            fill 
            className="object-cover rounded-xl shadow-sm"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export const SectionThree = () => {
  return (
    // Pure white background alternating section
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="flex-1 w-full relative h-[300px] md:h-[450px] order-2 md:order-1">
          <Image 
            src="/dog_eating.png" 
            alt="Dogs eating from silver bowls" 
            fill 
            className="object-cover rounded-xl shadow-sm"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6 leading-tight">
            Improve overall gastrointestinal health for better nutrient absorption
          </h2>
          <p className="text-[#4b5563] leading-relaxed">
            Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula specifically tailored to combat the health challenges prevalent in dogs. A staggering 89% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
          </p>
        </div>
      </div>
    </section>
  );
};

export const SectionFour = () => {
  return (
    // Light gray background alternating section
    <section className="bg-[#f8f9fa] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6 leading-tight">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive health
          </h2>
          <p className="text-[#4b5563] leading-relaxed">
            Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiome, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
          </p>
        </div>
        <div className="flex-1 w-full relative h-[300px] md:h-[400px]">
          <Image 
            src="/probiotic.png" 
            alt="Close up texture of dog food kibble" 
            fill 
            className="object-cover rounded-xl shadow-sm"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};