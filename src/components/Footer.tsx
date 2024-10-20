import Logo from "../assets/logo.webp";
import {
	BadgeCheck,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-[#0f0f0f] text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Container for responsive layout */}
				<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
					{/* Logo for PC screens */}
					<div className="lg:mr-8 mb-8 lg:mb-0 flex justify-center lg:justify-start">
						<img
							src={Logo}
							alt="Logo"
							className="h-12 sm:h-16 lg:h-24 w-auto transition-all duration-300"
						/>
					</div>

					{/* Footer Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-center lg:text-left w-full">
						{/* Phone */}
						<div>
							<h2 className="text-lg font-semibold flex items-center justify-center lg:justify-start mb-2">
								Phone <Phone className="ml-2" />
							</h2>
							<a
								href="tel:+919007790454"
								className="text-gray-400 hover:text-white transition duration-200"
							>
								+91 9007790454
							</a>
						</div>

						{/* Email */}
						<div>
							<h2 className="text-lg font-semibold flex items-center justify-center lg:justify-start mb-2">
								Email <Mail className="ml-2" />
							</h2>
							<a
								href="mailto:contact@globaladimpact.com"
								className="text-gray-400 hover:text-white transition duration-200"
							>
								contact@globaladimpact.com
							</a>
						</div>

						{/* Address */}
						<div>
							<h2 className="text-lg font-semibold flex items-center justify-center lg:justify-start mb-2">
								Address <MapPin className="ml-2" />
							</h2>
							<p className="text-gray-400">
								46, Moti Sil Street, Opp. Regal Cinema,
								Kol-700013.
							</p>
						</div>

						{/* Socials */}
						<div>
							<h2 className="text-lg font-semibold flex items-center justify-center lg:justify-start mb-2">
								Socials <BadgeCheck className="ml-2" />
							</h2>
							<div className="flex justify-center lg:justify-start space-x-4 mt-2">
								<a
									href="#"
									aria-label="Facebook"
									className="text-gray-400 hover:text-blue-500 transition duration-200"
								>
									<Facebook size={20} />
								</a>
								<a
									href="#"
									aria-label="LinkedIn"
									className="text-gray-400 hover:text-blue-700 transition duration-200"
								>
									<Linkedin size={20} />
								</a>
								<a
									href="#"
									aria-label="Twitter"
									className="text-gray-400 hover:text-blue-400 transition duration-200"
								>
									<Twitter size={20} />
								</a>
								<a
									href="#"
									aria-label="Instagram"
									className="text-gray-400 hover:text-pink-600 transition duration-200"
								>
									<Instagram size={20} />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="mt-8 border-t border-gray-700 pt-4">
					<p className="text-center text-gray-500 text-sm">
						&copy; {new Date().getFullYear()} Global Ad Impact. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;