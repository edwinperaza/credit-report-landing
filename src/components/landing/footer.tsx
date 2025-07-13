
'use client'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} CreditRise. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
