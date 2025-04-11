import CardSection from "./core/components/CardSection";

export default function App() {
    let bgImage = "https://images.pexels.com/photos/5477848/pexels-photo-5477848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-cover bg-center opacity-90" style={{backgroundImage : `url(${bgImage})`}}>
            <h1 className="font-bold text-3xl bg-gradient-to-r from-amber-900 to-stone-800 bg-clip-text text-transparent mb-2">
                Random Idea Picker!
            </h1>
            <section className="flex justify-center items-center">
                <CardSection />
            </section>
        </div>
    );
}
