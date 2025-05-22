export default function TOC({ headings }: { headings: { id: string; text: string }[] }) {
      console.log("Received headings:", headings);

    return (
        <div className="sticky top-0 z-10 w-[90%]  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Table of Contents</h2>
        <ul className="space-y-2">
            {headings.map((heading) => (
            <li key={heading.id}>
                <a
                href={`#${heading.id}`}
                className="text-blue-600 hover:underline dark:text-blue-500"
                >
                {heading.text}
                </a>
            </li>
            ))}
        </ul>
        </div>
    );
}