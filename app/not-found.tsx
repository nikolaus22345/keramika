import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Stranica nije pronađena</h1>
      <p className="mt-4 text-lg text-ink/70">Tražena stranica ne postoji ili je premještena.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-brand px-6 py-3 font-semibold text-white">Naslovna</Link>
        <Link href="/lokacije" className="rounded-full border border-black/15 px-6 py-3 font-semibold">Lokacije</Link>
      </div>
    </div>
  );
}
