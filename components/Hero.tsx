
'use client'; // Required because we are using onClick and window object

import Image from 'next/image';
import Script from 'next/script';
import { CTAButton } from './Button';
import { FeatureItem } from './FeatureItem';
import { paystackConfig } from '@/config/constants';
import { FoodIcon } from '@/icons/FoodIcon';
import { GuaranteeIcon } from '@/icons/GuaranteeIcon';
import { VetIcon } from '@/icons/VetIcon';
import { ShieldIcon } from '@/icons/ShieldIcon';
import { FreshIcon } from '@/icons/FreshIcon';

export const HeroSection = () => {
  
  // Paystack Payment Integration Handler with test public key to demonstrate a payment behaviour
  const handlePaystackPayment = () => {
    if (typeof window !== 'undefined' && (window as any).PaystackPop) {
      const handler = (window as any).PaystackPop.setup({
        key: "pk_test_e9667b1510cb348a4b69a28db9e99d4b92d2c245",//paystackConfig.PUBLIC_KEY, 
        email: 'testcustomer@example.com', // this can be made dynamic later
        amount: paystackConfig.DEFAULT_AMOUNT, // This is in kobo. 500000 = 5,000 NGN
        currency: paystackConfig.DEFAULT_CURRENCY,
        ref: 'TEST_' + Math.floor((Math.random() * 1000000000) + 1), // Unique transaction ref
        callback: (response: any) => {
          // some callback logic can be added here
        },
        onClose: () => {
          
          // some onClose logic can be added here
        }
      });
      handler.openIframe();
    } else {
      alert('Paystack script is still loading. Please wait a moment and try again.');
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      {/* Load the Paystack Inline Script lazily when the page is idle */}
      <Script 
        src="https://js.paystack.co/v1/inline.js" 
        strategy="lazyOnload" 
      />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#111827] text-center mb-16 leading-tight">
          What makes us different <br className="hidden md:block" /> makes them stronger
        </h1>

        {/* Complex Grid Layout for Features & Center Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 items-center">
          
          {/* Top Left */}
          <div className="md:col-start-1 md:row-start-1">
            <FeatureItem 
              title="Real Food" 
              subtitle="We create recipes for dogs with real meat and veggies." 
              icon={<FoodIcon />}
            />
          </div>

          {/* Top Right */}
          <div className="md:col-start-3 md:row-start-1">
            <FeatureItem 
              title="Made Fresh" 
              subtitle="We use a unique process maintaining the integrity of whole foods and nutrition." 
              icon={<FreshIcon />}
            />
          </div>

          {/* Center Image (Spans 2 rows) */}
          <div className="md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center py-6 md:py-0">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gray-100 shadow-xl overflow-hidden">
              <Image 
                src="/profruit.png" 
                alt="Half raw meat half dry dog food" 
                fill 
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </div>

          {/* Bottom Left */}
          <div className="md:col-start-1 md:row-start-2">
            <FeatureItem 
              title="Premium Ingredient" 
              subtitle="Elevating pet care with unmatched safety and quality." 
              icon={<GuaranteeIcon />}
            />
          </div>

          {/* Bottom Right */}
          <div className="md:col-start-3 md:row-start-2">
            <FeatureItem 
              title="Vet Developed" 
              subtitle="We raise the bar for dog nutrition, surpassing industry expectations." 
              icon={<VetIcon />}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col items-center gap-6">
          {/* ADDED THE onClick EVENT HERE */}
          <CTAButton className='px-19' onClick={handlePaystackPayment}>Get your dog's healthy meal today!</CTAButton>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#6b7280]">
            <div className="flex items-center gap-1.5">
              <ShieldIcon />
              <span>30-day money-back guarantee</span>
            </div>
            <div>
                <Image 
                    src="/payments.png" 
                    alt="Happy dog with dog food bag" 
                    width="180"
                    height="10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};