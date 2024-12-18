import React from 'react';
import { Bot, Shield, Clock } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to MediCare AI</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering seniors with smart medication management through AI technology
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Bot className="w-8 h-8 text-blue-600" />}
          title="AI-Powered Assistant"
          description="Smart medication reminders and health tracking powered by artificial intelligence"
        />
        <FeatureCard
          icon={<Shield className="w-8 h-8 text-blue-600" />}
          title="Secure & Private"
          description="Your health data is encrypted and protected with industry-leading security"
        />
        <FeatureCard
          icon={<Clock className="w-8 h-8 text-blue-600" />}
          title="24/7 Support"
          description="Round-the-clock assistance for both seniors and caregivers"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}