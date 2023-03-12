interface FurnitureConfig {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  material: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
}

const Furniture:FurnitureConfig[] = [
  {
    id: 1,
    name: 'Sofa',
    category: 'Living Room',
    price: 999.99,
    color: 'Gray',
    material: 'Leather',
    dimensions: {
      length: 72,
      width: 32,
      height: 36
    }
  },
  {
    id: 2,
    name: 'Dining Table',
    category: 'Dining Room',
    price: 699.99,
    color: 'Brown',
    material: 'Wood',
    dimensions: {
      length: 84,
      width: 40,
      height: 30
    }
  },
  {
    id: 3,
    name: 'Bed',
    category: 'Bedroom',
    price: 1499.99,
    color: 'White',
    material: 'Fabric',
    dimensions: {
      length: 80,
      width: 60,
      height: 48
    }
  }
]

export default defineEventHandler(() =>
// 一般來說通常api會，直接連接數據庫，目前這裡為暫時寫死的資料
  Furniture)
