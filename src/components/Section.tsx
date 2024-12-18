import React from 'react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export function Section({ icon, title, content }: SectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}