import React from 'react';
import { Section } from '../components/Section';
import { Scroll, Users, Brain, LineChart, Target, UserCheck, Store, BarChart3 } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="space-y-12">
      <Section
        icon={<Brain className="w-6 h-6 text-blue-600" />}
        title="Problem"
        content="Due to declines in memory and comprehensive abilities among seniors, they often have difficulties recalling medical advice during consultations and may forget how to follow prescriptions and dietary instructions afterwards, resulting in ineffective treatment."
      />

      <Section
        icon={<Users className="w-6 h-6 text-blue-600" />}
        title="Existing Alternatives"
        content="Most individuals rely on doctors' or caregivers' in-person guidance for medication instructions and record prescriptions on paper or voice memos. Dietary adjustments are similarly based on in-person guidance; adjusting meals to adapt to changing health conditions can be challenging."
      />

      <Section
        icon={<Scroll className="w-6 h-6 text-blue-600" />}
        title="Solution"
        content="Our AI-driven app records prescriptions through photos, generates smart medication and dietary reminders, and tracks health changes. By using checkboxes to track medication intake, seniors can confirm timely medication intakes to their caregivers through a shared family account."
      />

      <Section
        icon={<Target className="w-6 h-6 text-blue-600" />}
        title="Unique Value Proposition"
        content="Our app improves communication efficiency between seniors, doctors, and caregivers. It also generates smart dietary and medication reminders for users. Such advice improves medication management and enhances the quality of life for seniors."
      />

      <Section
        icon={<LineChart className="w-6 h-6 text-blue-600" />}
        title="Sustainable Advantage"
        content="With medical advancements supporting aging populations, medical demand is experiencing rapid growth. Many caregivers are unable to provide everyday care for seniors, creating sustained demand for our AI medicine app, which cares for seniors without the need of in-person support."
      />

      <Section
        icon={<UserCheck className="w-6 h-6 text-blue-600" />}
        title="Customer Segments"
        content="Our target consumers are the elderly who require regular medication. Customers may include the elderly themselves, and caregivers and doctors to confirm medication intakes with the elderly. Potential customers include all people who are on long term medication."
      />

      <Section
        icon={<Users className="w-6 h-6 text-blue-600" />}
        title="Early Adopters"
        content="Our initial customers will be seniors. Older individuals usually require regular medicine intakes, thus, the demand for health-keeping services. Busy family members of elderly people will also be our first customers, as they need to ensure their parents' well-being."
      />

      <Section
        icon={<Store className="w-6 h-6 text-blue-600" />}
        title="Channels"
        content="We plan to sell our product to potential customers through E-commerce. Additionally, through online and offline advertising via community, hospital, personal doctors and senior living facilities, we will deliver our product to customers in need of our services."
      />

      <Section
        icon={<BarChart3 className="w-6 h-6 text-blue-600" />}
        title="Key Metrics"
        content="Coming soon..."
      />
    </div>
  );
}