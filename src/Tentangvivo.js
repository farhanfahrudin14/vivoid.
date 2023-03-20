import Footer from './Footer'
export default function Example() {
    return (
        <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Tentang
              <br className="hidden md:block" />
              Vivo{' '}
              <span className="inline-block text-deep-purple-accent-400">
                
              </span>
            </h5>
            <p className="mb-6 text-gray-900">
            vivo adalah perusahaan teknologi yang membuat produk
            <br className="hidden md:block" />
            hebat berdasarkan nilai yang didorong oleh desain, dengan {' '} 
            <br className="hidden md:block" />
            perangkat pintar dan layanan cerdas sebagai intinya. vivo mengembangkan produk yang dinamis dan bergaya untuk kaum muda yang penuh semangat dan energik. Kami fokus untuk menciptakan smartphone yang memberikan pengalaman terbaik bagi konsumen di fotografi dan audio Hi-Fi. Selain smartphone, vivo juga mengembangkan berbagai aplikasi dan alat internet yang terintegrasi ke dalam produk kami. Ke depan tujuan vivo adalah menciptakan ekosistem internet mobile yang lengkap, memuaskan semua kebutuhan pengguna secara komprehensif.vivo adalah perusahaan teknologi yang menciptakan produk hebat berdasarkan nilai yang didorong oleh desain, dengan perangkat pintar dan layanan cerdas sebagai intinya.{' '}
            
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/vivo_Indonesia"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vivo_indonesia/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="https://web.facebook.com/vivoIndonesia?_rdc=1&_rdr"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCKONryt63ztbYmCZzxen7tA"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                  <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="Tvivo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>


      {/* 2 */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
        <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
          <div>
            
            <h5 className="max-w-md mb-6 text-3xl font-semibold leading-none sm:text-4xl">
             Visi
            </h5>
            <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
            <p>Membuat produk yang hebat untuk pengguna</p>
            <p>Menciptakan lingkungan yang menyenangkan dan progresif bagi karyawan</p>
            <p>Membuat platform win-win untuk mitra berdasarkan rasa saling percaya</p>
            <p>Memberikan pengembalian investasi jangka panjang yang stabil untuk pemegang saham</p>
            </p>
          </div>
          
        </div>
        <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
          <div>
            
            <h5 className="max-w-md mb-6 text-3xl font-semibold leading-none sm:text-4xl">
              Misi
            </h5>
            <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
            Berkembang menjadi perusahaan kelas dunia yang lebih sehat dan berkelanjutan.

            <h5 className="max-w-md mb-6 text-3xl font-semibold leading-none sm:text-4xl text-black pt-8">
              Nilai-nilai inti
            </h5>
            <p>Benfen, nilai yang didorong oleh desain, orientasi pada pengguna, pembelajaran tanpa henti, dan semangat tim</p>
            </p>
          </div>
          
        </div>
      </div>
    </div>

    {/* Karir Di Vivo */}
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="font-extrabold leading-5">Karir di vivo</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
             Mulai menemukan pekerjaan
            </p>
            <a
              href="https://www.vivo.com/id/about-vivo/career/jobs?from=1"
              aria-label=""
              className="inline-flex items-center text-sm font-bold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Pelajari lebih lanjut 
            </a>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="font-extrabold leading-5">kehidupan di vivo</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
            Kami peduli tentang kesehatan dan membantu karyawan kami untuk menemukan keseimbangan antara kerja dan kehidupan.
            </p>
            <a
              href="https://www.vivo.com/id/about-vivo/career/life-at-vivo"
              aria-label=""
              className="inline-flex items-center text-sm font-bold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Pelajari lebih lanjut
            </a>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="font-extrabold leading-5">Memberdayakan Masa Depan Anda</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
            Bekerja dengan orang berbakat di seluruh dunia dan kami menyediakan pelatihan yang disesuaikan untuk pengembangan
            </p>
            <a
              href="https://www.vivo.com/id/about-vivo/empower-your-future"
              aria-label=""
              className="inline-flex items-center text-sm font-bold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Pelajari lebih lanjut
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
      </> 
    )
  }
  