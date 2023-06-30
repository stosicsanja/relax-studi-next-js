

export default function Hero() {
  return (
    <div className="flex justify-center items-center h-screen mb-12 bg-fixed bg-center custom-img">
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 y-[2]"/>
    <div className="p-5 text-white z-[2]">
    <h1 className="text-5xl font-bold">Naslov</h1>
      <p className="py-5 text-xl">Poruka</p>
      <button className="px-8 py-2 border">Rezervisi</button>
    </div>
    
    </div>
  )
}
