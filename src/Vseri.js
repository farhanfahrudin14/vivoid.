import Footer from './Footer'
const products = [
    {
      id: 1,
      name1: 'V23 5G',
      href3: '#',
      imageSrc1: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1641894713286/4b2fa2bffb07fd939d49fa57ddea3781.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price1: 'Rp 5.999.000',
  
      id: 2,
      name2: 'V23e ',
      href2: '#',
      imageSrc2: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1637636385239/543329659036370939180da942c5a365.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price2: 'Rp 3.999.000',
  
      id: 3,
      name3: 'Y75 5G',
      href3: '#',
      imageSrc3: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1643369471556/ec8685eb5738285eb8c354b505ede87f.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price3: 'Rp 3.999.000',
      
      id: 4,
      name4: 'V23 5G',
      href4: '#',
      imageSrc4: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1641894713286/4b2fa2bffb07fd939d49fa57ddea3781.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price4: 'Rp 5.999.000',
  
      id: 5,
      name5: 'T1 Pro 5G',
      href5: '#',
      imageSrc5: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1652667330663/d5221ca482ba0f33652f704ce09748e9.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price5: 'Rp 4.499.000',
      
      id: 6,
      name6: 'T1 5G',
      href6: '#',
      imageSrc6: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1652667411005/388095b53319947a45e0ab81b45b1129.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price6: 'Rp 3.399.000',
  
      id: 7,
      name7: 'X70 Pro',
      href7: '#',
      imageSrc7: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1633005742741/b4a5a95baa5d0053a23699757ba6b1e4.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price7: 'Rp 10.999.000',
  
      id: 8,
      name8: 'V23e',
      href8: '#',
      imageSrc8: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1637636376758/2c3fa8992502771d829c6473a7ac2d0c.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price8: 'Rp 3.999.000',
  
      id: 9,
      name9: 'Y21T',
      href9: '#',
      imageSrc9: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1641264880465/ba8a87280029a6996bb88f402ff22b25.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price9: 'Rp 3.099.000',
  
      id: 10,
      name10: 'Y21s',
      href10: '#',
      imageSrc10: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1630381849606/5653f25b6cbf8669b8e22748eaf40980.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price10: 'Rp 2.699.000',
  
      id: 11,
      name11: 'Y21',
      href11: '#',
      imageSrc11: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1631621862416/3440aad9d9fedc9984a6f779c299576a.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price11: 'Rp 2.399.000',
  
      id: 12,
      name12: 'Y15s',
      href12: '#',
      imageSrc12: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1637290332846/7c335d609ff1fd051e0db0e58ad8a585.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price12: 'Rp 1.799.000',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
        <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Vivo V Seri</h2>
  
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
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc6}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href6}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name6}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price6}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc7}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href7}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name7}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price7}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc8}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href8}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name8}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price8}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc9}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href9}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name9}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price9}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc10}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href10}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name10}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price10}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc11}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href11}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name11}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price11}</p>
                </div>
              </div>
            ))}
  
  {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc12}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href12}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name12}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price12}</p>
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