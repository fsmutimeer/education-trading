import './dashboard.css';
// set
export const metadata = {
  title: 'Dashboard',
  description: 'My Dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
