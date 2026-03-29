'use client'

export default function ContactForm() {
	return (
		<section className="w-full bg-white">
			<div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14 lg:py-16 xl:py-20">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight tracking-tight">
						Connect with Dr Patrice
					</h2>
					<p className="mt-3 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
						Schedule your complimentary 20-minute Clarity Call.
					</p>
					<p className="mx-auto mt-2 max-w-3xl text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
						Contact me via email, Messages, WhatsApp, or the form below—whichever feels easiest for you.
					</p>
				</div>

				<div className="mt-10 rounded-xl bg-[#F6F6F6] p-4 md:p-6 lg:p-8 xl:p-10">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
						<aside className="rounded-xl bg-[#F6F6F6] px-4 py-6 lg:px-6 lg:py-8 flex flex-col justify-center">
							<h3 className="text-[#1A120E] text-2xl lg:text-3xl xl:text-[36px] font-semibold leading-snug">
								When you message me, please include:
							</h3>

							<ul className="mt-4 space-y-2 text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] leading-snug">
								<li className="flex items-start gap-2">
									<span className="mt-1 text-(--dark-orange)">✥</span>
									<span>Your Time zone</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 text-(--dark-orange)">✥</span>
									<span>A few days and times that work best for you</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 text-(--dark-orange)">✥</span>
									<span>Your preferred platform for our call (Zoom or WhatsApp)</span>
								</li>
							</ul>

							<p className="mt-5 text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] leading-snug">
								If you have any questions before scheduling, feel free to reach out—I’m happy to help.
								Once we confirm a time, I’ll send you the Zoom link (if applicable) and look forward to our conversation.
							</p>
						</aside>

						<div className="rounded-xl bg-[#FBFBFB] px-4 py-5 md:px-5 md:py-6 lg:px-6 lg:py-7">
							<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
								<div>
									<label className="block text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] font-semibold leading-none">
										Name<span className="text-(--dark-orange)">*</span>
									</label>
									<input
										type="text"
										placeholder="John Doe"
										className="mt-2 h-12 w-full rounded-md border border-black/10 bg-[#F2ECE9] px-4 text-[#1A120E] text-lg lg:text-xl xl:text-2xl placeholder:text-black/45 outline-none"
									/>
								</div>

								<div>
									<label className="block text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] font-semibold leading-none">
										Email<span className="text-(--dark-orange)">*</span>
									</label>
									<input
										type="email"
										placeholder="Johndoe@gmail.com"
										className="mt-2 h-12 w-full rounded-md border border-black/10 bg-[#F2ECE9] px-4 text-[#1A120E] text-lg lg:text-xl xl:text-2xl placeholder:text-black/45 outline-none"
									/>
								</div>

								<div>
									<label className="block text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] font-semibold leading-none">
										Phone Number<span className="text-(--dark-orange)">*</span>
									</label>
									<input
										type="tel"
										placeholder="+1 (406) 555-0120"
										className="mt-2 h-12 w-full rounded-md border border-black/10 bg-[#F2ECE9] px-4 text-[#1A120E] text-lg lg:text-xl xl:text-2xl placeholder:text-black/45 outline-none"
									/>
								</div>

								<div>
									<label className="block text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] font-semibold leading-none">
										Write your message<span className="text-(--dark-orange)">*</span>
									</label>
									<textarea
										placeholder="Write your message..."
										rows={5}
										className="mt-2 w-full rounded-md border border-black/10 bg-[#F2ECE9] px-4 py-3 text-[#1A120E] text-lg lg:text-xl xl:text-2xl placeholder:text-black/45 outline-none resize-none"
									/>
								</div>

								<div className="pt-2 flex justify-center lg:justify-end">
									<div className="relative inline-block">
										<div className="absolute z-20 top-2 -left-1.5 h-full w-full rounded-r-full border-2 border-black" />
										<button
											type="submit"
											className="relative z-10 py-3 px-16 rounded-r-full text-white font-medium text-sm lg:text-base xl:text-lg"
											style={{
												background: "linear-gradient(to right, var(--light-orange), var(--dark-orange))",
											}}
										>
											Send
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
