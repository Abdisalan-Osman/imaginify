function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <>
      <h2 className="h2-bold text-dark-600 mb-3">{title}</h2>
      {subtitle && <span className=" p-16-regular mt-4">{subtitle}</span>}
    </>
  );
}

export default Header;
