import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';

// 임시 상품 데이터
const products = [
  {
    id: '1',
    name: 'Premium Planner',
    price: 29.99,
    image: '/images/planner1.jpg',
    description: 'High-quality planner with premium paper',
    category: 'planners'
  },
  {
    id: '2',
    name: 'Bullet Journal',
    price: 24.99,
    image: '/images/planner2.jpg',
    description: 'Perfect for bullet journaling enthusiasts',
    category: 'journals'
  },
  {
    id: '3',
    name: 'Weekly Notebook',
    price: 19.99,
    image: '/images/planner3.jpg',
    description: 'Compact weekly planner with notes section',
    category: 'notebooks'
  },
  {
    id: '4',
    name: 'Daily Planner',
    price: 15.99,
    image: '/images/planner4.jpg',
    description: 'Simple and effective daily planner',
    category: 'planners'
  },
  {
    id: '5',
    name: 'Monthly Calendar',
    price: 12.99,
    image: '/images/planner5.jpg',
    description: 'Monthly calendar with goal tracking',
    category: 'calendars'
  },
  {
    id: '6',
    name: 'Project Planner',
    price: 34.99,
    image: '/images/planner6.jpg',
    description: 'Comprehensive project planning notebook',
    category: 'notebooks'
  },
  {
    id: '7',
    name: 'Gratitude Journal',
    price: 22.99,
    image: '/images/planner7.jpg',
    description: 'Daily gratitude and reflection journal',
    category: 'journals'
  },
  {
    id: '8',
    name: 'Student Planner',
    price: 18.99,
    image: '/images/planner8.jpg',
    description: 'Perfect for students to track assignments',
    category: 'planners'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All Products</h1>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Browse our complete collection of planners and journals
              </p>
            </div>
            <ProductList products={products} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 