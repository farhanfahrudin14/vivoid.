import { LockClosedIcon } from '@heroicons/react/solid'
import Footer from './Footer'

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="pipo (2).png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Daftar Disini</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Atau{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Buat Akun Baru
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Nama depan
                </label>
                <input
                  id="nama-depan"
                  name="namadepan"
                  type="namadepan"
                  autoComplete="current-nama-depan"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nama depan"
                />
              </div>
              <div>
                <label htmlFor="Nama belakang" className="sr-only">
                  Nama belakang
                </label>
                <input
                  id="Nama belakang"
                  name="Nama belakang"
                  type="Nama belakang"
                  autoComplete="current-Nama-belakang"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nama belakang"
                />
              </div>
              <div>
                <label htmlFor="Nomor telepon" className="sr-only">
                  Nomor telepon
                </label>
                <input
                  id="Nomor telepon"
                  name="Nomor telepon"
                  type="Nomor telepon"
                  autoComplete="current-Nomor-telepon"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nomor telepon"
                />
              </div>
              <div>
                <label htmlFor="Email" className="sr-only">
                  Email
                </label>
                <input
                  id="Email"
                  name="Email"
                  type="Email"
                  autoComplete="current-Email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="Kata sandi" className="sr-only">
                  Kata sandi
                </label>
                <input
                  id="Kata sandi"
                  name="Kata sandi"
                  type="Kata sandi"
                  autoComplete="current-Kata-sandi"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Kata sandi"
                />
              </div>
              <div>
                <label htmlFor="Konfirmasi kata sandi" className="sr-only">
                  Konfirmasi kata sandi
                </label>
                <input
                  id="Konfirmasi kata sandi"
                  name="Konfirmasi kata sandi"
                  type="Konfirmasi kata sandi"
                  autoComplete="current-Konfirmasi-kata-sandi"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Konfrimasi kata sandi"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="ingat saya"
                  name="ingat saya"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="ingat saya" className="ml-2 block text-sm text-gray-900">
                  Ingat saya
                </label>
              </div>

              <div className="text-sm">
                <a href="/Login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Kembali?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}