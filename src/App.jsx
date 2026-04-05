/** @format */
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyMe from "./components/Why_me";
import MarqueeStrip from "./components/MarqueeStrip";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
	return (
		<div className='w-full min-h-screen bg-black relative overflow-hidden'>
			<Navbar />
			<div className='fixed inset-0 z-0 pointer-events-auto'>
				<Particles
					particleColors={["#ffffff"]}
					particleCount={16000}
					particleSpread={100}
					speed={0.1}
					particleBaseSize={150}
					moveParticlesOnHover
					alphaParticles={false}
					disableRotation={false}
					pixelRatio={6}
				/>
			</div>
			<Hero />
			<About />
			<WhyMe />
			<MarqueeStrip />
			<Services />
			<Contact />
		</div>
	);
}

export default App;
