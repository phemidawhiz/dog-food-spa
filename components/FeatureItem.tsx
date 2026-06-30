
import React from 'react';

interface FeatureItemProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const FeatureItem = ({ title, subtitle, icon }: FeatureItemProps) => {
  return (
    <div className="flex items-start gap-4 text-left">
      <div className="p-0 rounded-full mt-0 flex items-center justify-center w-13 h-13 text-[#424153]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-[#1f2937] leading-snug">{title}</h3>
        <p className="text-[#424153] text-sm leading-relaxed mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
};