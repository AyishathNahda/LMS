import './globals.css';
import User from './models/User';
import connectToDatabase from '@/utils/mongodb';
import SessionProviderWrapper from './SessionProviderWrapper';
import { Toaster } from 'react-hot-toast';

export default async function RootLayout({ children }) {
  await connectToDatabase();

  console.log('User model loaded successfully:', !!User);

  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          {children}
              <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
