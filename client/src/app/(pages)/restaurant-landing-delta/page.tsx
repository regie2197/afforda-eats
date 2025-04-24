import Image from "next/image"
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
    weight: '800',
    subsets: ['latin'],
})

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export default function Landing() {
    return (
        <div className="bg-gray-100">
            <div className="relative w-full h-64">
                <Image
                    src="https://d86ddjz7lz2d4.cloudfront.net/blog/wp-content/uploads/2018/03/hoppler-jollijeeps.jpg"
                    alt="Picture of the Webpage"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
                <div className="flex flex-col md:flex-row w-full max-w-6xl gap-4">
                    <div className="bg-white p-8 rounded shadow-md h-96 w-full mb-4 md:mb-0 md:mr-4">
                        <p className={`${poppinsBold.className} text-red-500 text-4xl`}>Restaurant Name</p>
                        <p className={`${poppins.className} text-gray-950 text-s pt-1 pb-1`}>Location of Restaurant</p>
                        <p className={`${poppins.className} text-gray-400 text-s pt-1 pb-1`}>Placeholder 1</p>
                        <p className={`${poppins.className} text-gray-400 text-s pt-1 pb-1`}>Placeholder 2</p>
                        <p className={`${poppins.className} text-gray-400 text-s pt-1 pb-1`}>Placeholder 3</p>
                        <hr className='text-blue-950 p-10' />


                    </div>
                    <div className="flex flex-col w-xl gap-4">
                        <div className="bg-white p-8 rounded shadow-md w-full h-auto mb-4">


                            <div className="max-w-xs overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md pb-2">
                                <div className="p-6 relative z-10">
                                    <p className="text-xl font-semibold text-gray-800">Classic Blue Jeans</p>
                                    <p className="mt-2 text-gray-600">
                                        Our classic blue jeans are a timeless addition to your wardrobe. Crafted
                                        from premium denim, they offer both style and comfort. Perfect for any
                                        casual occasion.
                                    </p>
                                    <div className="flex items-center mt-4 text-gray-600">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <span className="ml-2">4.8 (24 reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-xs overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md">
                                <div className="p-6 relative z-10">
                                    <p className="text-xl font-semibold text-gray-800">Classic Blue Jeans</p>
                                    <p className="mt-2 text-gray-600">
                                        Our classic blue jeans are a timeless addition to your wardrobe. Crafted
                                        from premium denim, they offer both style and comfort. Perfect for any
                                        casual occasion.
                                    </p>
                                    <div className="flex items-center mt-4 text-gray-600">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        <span className="ml-2">4.8 (24 reviews)</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="bg-white p-8 rounded shadow-md h-48 w-full">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
