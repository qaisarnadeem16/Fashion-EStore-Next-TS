"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import {BsCartPlusFill} from 'react-icons/bs'

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get<Product[]>('https://fakestoreapi.com/products');
                const data = res.data;
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className="flex justify-center items-center py-5">
                <h1 className="text-3xl font-extrabold sm:text-5xl text-center">
                    Top
                    <strong className="block font-extrabold text-rose-700">Products</strong>
                </h1>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-5 min-h-screen bg-gray-100 py-10">
                {products.map((product) => (
                    <div className="w-full md:w-[21%] flex flex-wrap gap-3 justify-center items-center p-3 rounded-lg bg-white hover:scale-105 transition-all duration-300" >
                        <div className="w-full h-[250px] overflow-hidden flex justify-center items-center">
                            <Image src={product.image} alt='Product' width={200} height={150} />
                        </div>
                        <div className="flex justify-between">
                            <div className="w-1/2 overflow-hidden h-[45px]">
                                <h1 className="text-blue-700">{product.title}</h1>
                            </div>
                            <div className="w-1/2 overflow-hidden h-[40px]">
                                <h4 className="text-green-700 text-right">{product.price} $</h4>
                            </div>
                        </div>

                        <div className=" overflow-hidden h-[50px]">
                            <h5 className="text-gray-600 text-left">{product.description}</h5>
                        </div>

                        <div className="bg-blue-400 rounded-md w-full mx-2 py-2 text-white text-center flex justify-center items-center gap-2 hover:scale-105 hover:bg-blue-600"><BsCartPlusFill/> Add to Cart</div>
                    </div>

                ))}
            </div>
        </>
    );
};

export default Products;
