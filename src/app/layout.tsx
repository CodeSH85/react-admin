import '@/styles/globals.css';
import MainLayout from '@/components/layouts/main-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <main id='root'>
          <MainLayout>{children}</MainLayout>
        </main>
      </body>
    </html>
  );
}
