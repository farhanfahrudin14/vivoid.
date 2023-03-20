import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import Footer from './Footer'

const product = {
  name: 'Vivo Smartphone',
  price: 'Vivo.com',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Funtouch OS', href: '#' },
    { id: 2, name: 'Produk', href: '#' },
  ],
  images: [
    {
      src: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1623999410502/c16cd8e158210779e7b08a48c0e6fc49.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1652942930300/3cfa0c3f5a1a88012909b3403b53fdb5.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1644378095842/b2b179db0830b6301d5e9647d4a2fb2a.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1581912595204/ba89582df84e13983e2c458b32f584f6.png',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
  ],
  description:
    'Kami memanfaatkan kekuatan teknologi dan memimpin tren mode untuk menghadirkan kehebatan sesungguhnya bagi konsumen kami, Kehidupan di vivo Kami peduli tentang kesehatan dan membantu karyawan kami untuk menemukan keseimbangan antara kerja dan kehidupan, Memberdayakan Masa Depan Anda Bekerja dengan orang berbakat di seluruh dunia dan kami menyediakan pelatihan yang disesuaikan untuk pengembangan.',
  highlights: [
    'Memanfaatkan kekuatan teknologi ',
    'Memimpin tren mode ',
    'Kehebatan sesungguhnya bagi konsumen kami',
    'Nikmati Kehebatannya pada smartphone vivo',
  ],
  details:
    'Sebuah produk hp vivo indonesia merupkan smarpthone yang baik di indonesia dan sudah menggunakan funtouch os terbaru dengan versi funtouch os 12.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  export default function Example() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  return (
    <>
{/* Carousel */}
<div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark relative hidden sm:block"
  data-bs-ride="carousel"
>
  {/* <!-- Indicators --> */}
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 pt-40">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  {/* <!-- Inner --> */}
  <div class="carousel-inner relative w-full overflow-hidden">
    {/* <!-- Single item --> */}
    <div class="carousel-item active relative float-left w-full">
      <img
        src="vivo 1.jpg"
        class="block w-full bg-cover"
        alt="Motorbike Smoke"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Vivo Smartphone</h5>
        <p>T1 Series 5G</p>
        <p>Get.Set.Turbo</p>
        <p>Snapdragon 778G Dimensity 810 5G</p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item relative float-left w-full">
      <img
        src="vivo 2.jpg"
        class="block w-full"
        alt="Mountaintop"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Vivo Smartphone</h5>
        <p>T1 5G</p>
        <p>Dimensity 810 5G</p>
        <p>8GB+4GB* RAM</p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item relative float-left w-full">
      <img
        src="vivo 3.jpg"
        class="block w-full"
        alt="Woman Reading a Book"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Vivo Smartphone</h5>
        <p>V23e</p>
        <p>50MP AF Night Portrait</p>
        <p>8GB+4GB* RAM</p>
        <p>Cashback 400Rb</p>
      </div>
    </div>
  </div>
  {/* <!-- Inner --> */}

  {/* <!-- Controls --> */}
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* Vivo Smartphone */}
    <div className="relative bg-white overflow-hidden md:pt-40 pt-10">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Vivo Smartphone
            </h1>
            <p className="mt-4 text-xl text-gray-900">Nikmati Kehebatannya

Kami memanfaatkan kekuatan teknologi dan memimpin tren mode untuk menghadirkan kehebatan sesungguhnya bagi konsumen kami.
            
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://assets.jalantikus.com/assets/cache/500/333/userfiles/2021/04/12/harga-hp-vivo-terbaru-2021-e0488.jpg.webp"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.bisnis-cdn.com/posts/2022/02/09/1498411/vivo-y71t-1.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                     
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1652667411005/388095b53319947a45e0ab81b45b1129.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1633005742741/b4a5a95baa5d0053a23699757ba6b1e4.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://ceklist.id/wp-content/uploads/2021/08/Rekomendasi-HP-Vivo-Terbaik.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-40 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.tokopedia.net/img/KRMmCm/2022/1/17/1ea3318a-aa66-45fe-bf7b-8e06ede51d6c.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/Produk"
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Lihat Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Vivo Indonesia */}
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium"></h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Lihat Atas
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                              : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <a
                    href="/Login"
                    className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Daftar Disini
                  </a>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End */}
    <Footer/>
    </>
  )
}