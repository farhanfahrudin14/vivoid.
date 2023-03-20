import Footer from './Footer'
const products = [
    {
      id: 1,
      name1: 'X70 Pro',
      href3: '#',
      imageSrc1: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1633005742741/b4a5a95baa5d0053a23699757ba6b1e4.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price1: 'Rp 10.999.000',
  
      id: 2,
      name2: 'X60 Pro',
      href2: '#',
      imageSrc2: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1617853014870/b9e0c75c593bc52d202992d8dcab73fc.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price2: 'Rp 9.999.000',
  
      id: 3,
      name3: 'X60',
      href3: '#',
      imageSrc3: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1617852182762/fd844de7230886ada883fb3ecc10342c.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price3: 'Rp 7.999.000',
      
      id: 4,
      name4: 'X50 Pro',
      href4: '#',
      imageSrc4: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1594804199722/466d279fedefe80dc84f15340d73fdce.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price4: 'Rp 8.999.000',
  
      id: 5,
      name5: 'X50',
      href5: '#',
      imageSrc5: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1594802706016/68c7c7f71211cd11c4572e56054f26b3.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price5: 'Rp 6.499.000',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
        <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Vivo X Seri</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc1}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href1}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name1}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price1}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc2}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href2}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name2}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price2}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc3}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href3}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name3}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price3}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc4}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href4}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name4}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price4}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc5}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href5}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name5}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price5}</p>
                </div>
              </div>
            ))}

</div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
  