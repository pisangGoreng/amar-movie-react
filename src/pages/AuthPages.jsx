import React from 'react';
import { useLocation } from 'react-router-dom';

import Image from '../components/Image';

import movieLogoWebp from '../assets/images/Home-cinema.webp';
import movieLogoPng from '../assets/images/Home-cinema.png';

export default function AuthPages() {
	const location = useLocation();
	console.log('🚀 ~ file: AuthPages.jsx:10 ~ AuthPages ~ location', location);

	return (
		<div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
			<div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden ">
				<div className="md:flex w-full">
					<div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
						<Image
							src={movieLogoWebp}
							fallback={movieLogoPng}
							alt="Home cinema"
						/>
					</div>

					<div className="w-full md:w-1/2 py-10 px-5 md:px-10">
						<div className="text-center mb-10">
							<h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
							<p>Enter your information to register</p>
						</div>

						<div>
							<div className="flex -mx-3">
								<div className="w-1/2 px-3 mb-5">
									<label
										htmlFor="first-name"
										className="text-xs font-semibold px-1"
									>
										First name
									</label>
									<div className="flex">
										<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
											<i className="mdi mdi-account-outline text-gray-400 text-lg" />
										</div>
										<input
											type="text"
											className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
											placeholder="John"
										/>
									</div>
								</div>

								<div className="w-1/2 px-3 mb-5">
									<label
										htmlFor="last-name"
										className="text-xs font-semibold px-1"
									>
										Last name
									</label>
									<div className="flex">
										<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
											<i className="mdi mdi-account-outline text-gray-400 text-lg" />
										</div>
										<input
											type="text"
											className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
											placeholder="Smith"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
