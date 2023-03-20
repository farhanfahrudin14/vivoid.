import Footer from './Footer'
const products = [
    {
      id: 1,
      name1: 'T1 5G',
      href1: '#',
      imageSrc1: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1652667411005/388095b53319947a45e0ab81b45b1129.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price1: 'Rp 3.399.000',

      id: 2,
      name2: 'T1 Pro 5G',
      href2: '#',
      imageSrc2: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1652667330663/d5221ca482ba0f33652f704ce09748e9.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price2: 'Rp 4.499.000',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
        <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Vivo T Seri</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:aspect-none">
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
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price1}</p>
                </div>
              </div>
            ))}

{products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:aspect-none">
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
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price2}</p>
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