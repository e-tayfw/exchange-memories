// src/components/Footer.tsx
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Madrid
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://t.me/yourTelegramUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <FaTelegramPlane className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/yourInstagramUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
