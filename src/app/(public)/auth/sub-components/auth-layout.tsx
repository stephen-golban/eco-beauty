interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <div className="min-h-content flex flex-col gap-16">
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="text-muted-foreground text-xl">{description}</p>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </section>
    </div>
  );
}
