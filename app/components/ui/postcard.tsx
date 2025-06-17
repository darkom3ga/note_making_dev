export default function PostCard({ title, category, image, tags } : { title: string, category: string, image?: string, tags?: string[] }) {
  return (
    <div className="bg-[#ffffff05] p-4 relative overflow-hidden flex flex-col justify-between">
      <p className="text-xs tracking-wide uppercase line-clamp-2">{category}</p>
      <h2 className="text-xl font-black leading-tight line-clamp-2">{title}</h2>
      {tags && <p className="text-xs mt-1 line-clamp-2">{tags.join(" / ")}</p>}
      {image && (
        <div className="mt-2 overflow-hidden h-48"> 
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>

  );
}
195.637