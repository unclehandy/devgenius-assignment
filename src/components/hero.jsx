export default function Hero(){
    return(
        <div className="p-8">
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/image/hero.jpeg" alt="Header" className="max-w-sm rounded-lg shadow-2xl" />

            <div>
              <h1 className="text-3xl text-accent font-bold">"Experience the Magic of Event Maker!</h1>
              <p className="py-6">"Discover Event Maker: where creativity meets perfection. From corporate functions to intimate soirées, we craft unforgettable experiences tailored to your vision. With meticulous attention to detail, we ensure every moment shines, leaving lasting memories for all. Elevate your event with Event Maker and watch your dreams come to life."</p>
             
            </div>
          </div>
        </div>
      </div>
    )
}