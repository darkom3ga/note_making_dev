import Link from "next/link";

export default function Pagination({ currentPage }: { currentPage: number }) {
  const prev = currentPage > 1 ? currentPage - 1 : null;
  const next = currentPage + 1; // Adjust based on total count in real impl

  return (
    <div className="flex justify-center gap-4 mb-6">
      {prev && (
        <Link href={`?page=${prev}`} className="btn">
          ← Prev
        </Link>
      )}
      <span className="px-4 py-2 text-muted-foreground">
        Page {currentPage}
      </span>
      {/* Add logic to disable "Next" if there are no more posts */}
      <Link href={`?page=${next}`} className="btn">
        Next →
      </Link>
    </div>
  );
}
