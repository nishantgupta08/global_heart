# Global Heart Hospital - Multi-Specialty Hospital Website

A modern, responsive Next.js boilerplate for a multi-specialty hospital website with a professional design and comprehensive features.

## Features

- 🏥 **Multi-Specialty Services**: Showcase various medical departments and specialties
- 👨‍⚕️ **Doctor Profiles**: Display expert medical professionals
- 📅 **Appointment Booking**: Online appointment scheduling system
- 📱 **Responsive Design**: Mobile-first, fully responsive layout
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js 14 and React 18
- 🔍 **SEO Optimized**: Proper metadata and semantic HTML

## Pages

- **Home**: Hero section, features, specialties overview
- **About**: Hospital mission, values, history, and statistics
- **Services**: Detailed information about all medical specialties
- **Doctors**: Profiles of medical professionals
- **Contact**: Contact form and hospital information
- **Appointments**: Online appointment booking system

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
GlobalHeart/
├── app/
│   ├── about/
│   ├── appointments/
│   ├── contact/
│   ├── doctors/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Header.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **React 18**: Latest React features

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The primary color is set to blue, but you can change it to match your brand.

### Content

- Update hospital information in components and pages
- Replace placeholder doctor profiles with real data
- Customize services and specialties
- Update contact information

### Styling

All styles use Tailwind CSS. Modify classes in components to adjust the design.

## Features to Add

- [ ] Patient portal/login system
- [ ] Online medical records access
- [ ] Live chat support
- [ ] Blog/news section
- [ ] Testimonials/reviews
- [ ] Integration with appointment management system
- [ ] Multi-language support
- [ ] Dark mode

## License

This project is open source and available for use.

## Support

For questions or issues, please contact the development team.

