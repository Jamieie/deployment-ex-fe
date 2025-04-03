import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';

async function getProducts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const products = await response.json();
    return products.map((product: any) => {
      try {
        return {
          id: product.id.toString(),
          name: product.name || '',
          price: parseFloat(product.price) || 0,
          description: product.description || '',
          image: product.image || '/images/planner1.jpg', // 기본 이미지 설정
          category: product.category || 'planners', // 기본 카테고리 설정
        };
      } catch (error) {
        console.error('Error parsing product:', product, error);
        return null;
      }
    }).filter(Boolean); // null 값 제거
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await getProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Plan Your Life with Style
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Discover our collection of premium planners and journals designed to help you organize your thoughts and achieve your goals.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href="/products"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Shop Now
                    </Link>
                    <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 ring-gray-900/10 lg:-mr-36" aria-hidden="true" />
                <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
                  <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Discover our most popular planners and journals
              </p>
            </div>
            {featuredProducts.length > 0 ? (
              <ProductList products={featuredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No products available at the moment.</p>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to stay organized
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer a wide range of high-quality planners and journals to help you stay organized and achieve your goals.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <svg className="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 001.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                    </svg>
                    Premium Quality
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">Our products are made with the highest quality materials to ensure durability and longevity.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <svg className="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                    </svg>
                    Secure Shopping
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">Shop with confidence knowing your information is secure and protected.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <svg className="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Satisfaction Guaranteed
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">We offer a 100% satisfaction guarantee on all our products.</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
