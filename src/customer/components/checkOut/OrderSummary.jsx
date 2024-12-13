import React from "react";
import AddressCard from "../addressCard/AddressCard";
import CartItem from "../cart/CartItem";

export default function OrderSummary() {
    return (
        <div>
            <div className="p-5 shadow-lg rounded-s-md border">
                <AddressCard />
            </div>
            <div>
                <div className="lg:grid grid-cols-3 relative">
                    <div className="col-span-2">
                        {[1, 1, 1, 1, 1].map((item) => <CartItem />)}
                    </div>
                    <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                        <div className="border">
                            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                            <hr />
                            <div className="space-y-3 font-semibold mb-10">
                                <div className="flex justify-between pt-3 text-black">
                                    <span>Price</span>
                                    <span>$199</span>
                                </div>
                                <div className="flex justify-between pt-3 ">
                                    <span>Discount</span>
                                    <span className="text-green-600">-$199</span>
                                </div>
                                <div className="flex justify-between pt-3">
                                    <span>Delivery Charges</span>
                                    <span className="text-green-600">$199</span>
                                </div>
                                <div className="flex justify-between pt-3 ">
                                    <span>Total Amount</span>
                                    <span className="text-green-600 font-bold">$199</span>
                                </div>
                            </div>
                            <button type="submit"
                                className="w-full mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}