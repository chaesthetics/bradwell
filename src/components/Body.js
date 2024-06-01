import React from "react";
import Image from 'next/image'

const Body = () => {
const content = [
    {
        category: "Products",
        items: [
            { 
                name: "Beverages",
                image: "https://w0.peakpx.com/wallpaper/370/746/HD-wallpaper-freshness-orange-fresh-berry-fruits-food-drinks-beverage-blur-background-black-dark-wood-healthy-juice-thumbnail.jpg"
            },
            {
                name: "Meat Processing",
                image: "https://images.unsplash.com/photo-1628543108325-1c27cd7246b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lYXR8ZW58MHx8MHx8fDA%3D"
            },
            {
                name: "Sauces",
                image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F1Y2VzfGVufDB8fDB8fHww"
            },
            {
                name: "Frozen Dairy and Desserts",
                image: "https://images.unsplash.com/photo-1472555794301-77353b152fb7?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                name: "Flavors and Oils",
                image: "https://images.unsplash.com/photo-1574785289548-b6604d39125d?q=80&w=1581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                name: "Nutraceuticals and Extracts",
                image: "https://nisargabiotech.com/wp-content/uploads/2024/01/New-Project-10.webp"
            }
        ]
    },
    {
        category: "Other products",
        items: [
            {
                name: "Household and Cleaning Ingredients",
                image: "https://plus.unsplash.com/premium_photo-1678718605794-e21935e9fda1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fEhvdXNlaG9sZCUyMGFuZCUyMENsZWFuaW5nJTIwSW5ncmVkaWVudHN8ZW58MHx8MHx8fDA%3D"
            },
            {
                name: "Personal Care",
                image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uYWwlMjBjYXJlfGVufDB8fDB8fHww"
            },
            {
                name: "Aromatics and Oils",
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJvbWF0aWNzJTIwYW5kJTIwT2lsc3xlbnwwfHwwfHx8MA%3D%3D"
            },
            {
                name: "Industrial Chemicals and Raw Materials",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0isbE5guxYLdGaML-uhPM3s2mCU-q9B0Q4A&s"
            }
        ]
    },
    {
        category: "Industries",
        items: [
            {
                name: "Food and Beverages Manufacturer",
                image: "https://assets.bizclikmedia.net/1800/fe81b6432b4a47693af8d856dc6c5b0b:a4c8586e8d1efd4b9218125b4b088dea/gettyimages-1292989487-jpg.webp"
            },
            {
                name: "Hotel",
                image: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
            },
            {
                name: "Restaurants",
                image: "https://6amcity.brightspotcdn.com/dims4/default/26f5f53/2147483647/strip/true/crop/1332x750+0+69/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.us-east-2.amazonaws.com%2Fbrightspot%2F0d%2F84%2F7c175b5e443092d969b6c19af3f5%2F393170483-18307701454185066-3288527068679201488-n.jpg"
            },
            {
                name: "Laundry and Cleaning Services / Households Manufacturer",
                image: "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGF1bmRyeSUyMGFuZCUyMENsZWFuaW5nJTIwU2VydmljZXMlMjAlMkYlMjBIb3VzZWhvbGRzJTIwTWFudWZhY3R1cmVyfGVufDB8fDB8fHww"
            },
            {
                name: "Industrial",
                image: "https://plus.unsplash.com/premium_photo-1674043991321-3d903220df7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D"
            }
        ]
    }
]

const sideContent = content.map((items)=>{
    return <div className="hidden md:flex pl-36 flex-col space-y-6 text-lg">
                <p className="font-semibold text-xl hover:cursor-pointer">{items.category}</p>
                <ul className="space-y-4 text-[16px] text-gray-700 pb-12">
                    {items.items.map((item1)=>{
                        return <li className="hover:cursor-pointer hover:font-semibold hover:text-yellow-700 animation-6hover:cursor-pointer duration-300">{item1.name}</li>
                    })}
                </ul>
            </div>
});

const mainContent = content.map((items)=>{
    return  <div className="w-full md:w-4/5 pt-4 md:pt-12 py-8">
                <span className="font-bold text-xl md:text-2xl">{items.category}</span>
                <hr className="mt-4 mb-4"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                    {items.items.map((item1)=>{
                        return <div className="flex space-x-6 items-center md:pb-2">
                            <img 
                                src={item1.image}
                                className="md:h-[120px] h-[90px]  min-w-[90px] md:min-w-[120px] w-[90px] md:w-[120px] min-h-[90px] md:min-h-[120px] object-cover rounded-full"
                            />
                            <p className="text-light md:font-light text-md md:text-xl">{item1.name}</p>
                        </div>
                    })}
                </div>
            </div>
});
return(
    <div className="flex w-full pt-14">
        <aside className="w-0 md:w-1/4">
            {sideContent}
        </aside>
        <div className="w-full md:w-3/4 px-0">
            <span className="font-bold text-2xl md:text-3xl">Menu</span>
            {mainContent}
        </div>
    </div>
);
}


export default Body;