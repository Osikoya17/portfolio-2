import type { Certification } from '../lib/types'

export const certifications: Certification[] = [
  {
    index: '01',
    title: 'CCNA',
    organization: 'Cisco',
    description:
      'Cisco Certified Network Associate, validating skills across network fundamentals, IP connectivity, routing and switching, security fundamentals, and automation.',
    tags: ['Networking', 'Routing & Switching', 'IP Connectivity', 'Network Security'],
    credly: 'https://www.credly.com/badges/e36a6f4c-ec55-4a16-9d5a-bcb7cd9c61b0/public_url',
  },
  {
    index: '02',
    title: 'CompTIA Network+',
    organization: 'CompTIA',
    description:
      'Validates the core skills to design, configure, manage, and troubleshoot wired and wireless networks across modern infrastructures.',
    tags: ['Network Architecture', 'Troubleshooting', 'Network Security', 'Operations'],
    credly: 'https://www.credly.com/badges/08d2c802-46cd-411e-b6d4-e7ae682b9f1c/public_url',
  },
]