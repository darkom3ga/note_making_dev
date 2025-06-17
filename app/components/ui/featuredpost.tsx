export default function FeaturedPost({ title, subtitle, image ,tags } :{ title:string , subtitle:string, image?: string , tags?: string[] }) {
  return (
    <div className="bg-[#ffffff05] p-6 col-span-2 row-span-2 flex flex-col justify-between ">
      <div>
        <h1 className="text-[40px] font-black leading-tight">{title}</h1>
        <h2 className="text-[40px] font-black mt-2">{subtitle}</h2>
      </div>
      <div className= "gap-0 ">
      {tags && <p className="text-xs mt-1 line-clamp-2">{tags.join(" / ")}</p>}
      {image && <img src={image} alt="Featured" className=" w-full" />}
      </div>

    </div>
  );
}
