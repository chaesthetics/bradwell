import React from "react";

const Body = () => {
const content = [
    {
        category: "Products",
        items: [
            { 
                name: "Beverages",
                image: "https://brochure-sandy.vercel.app/_next/static/media/1.9bbffbb9.png"
            },
            {
                name: "Meat Processing",
                image: "https://brochure-sandy.vercel.app/_next/static/media/2.cfdbb810.png"
            },
            {
                name: "Sauces",
                image: "https://brochure-sandy.vercel.app/_next/static/media/3.e6dc604c.png"
            },
            {
                name: "Frozen Dairy and Desserts",
                image: "https://brochure-sandy.vercel.app/_next/static/media/4.f9deab91.png"
            },
            {
                name: "Flavors and Oils",
                image: "https://brochure-sandy.vercel.app/_next/static/media/5.b72b184a.png"
            },
            {
                name: "Nutraceuticals and Extracts",
                image: "https://brochure-sandy.vercel.app/_next/static/media/6.e297bf68.png"
            }
        ]
    },
    {
        category: "Other products",
        items: [
            {
                name: "Household and Cleaning Ingredients",
                image: "https://brochure-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fother1.8bf98743.png&w=256&q=75"
            },
            {
                name: "Personal Care",
                image: "https://brochure-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fother2.38b56e8e.png&w=256&q=75"
            },
            {
                name: "Aromatics and Oils",
                image: "https://brochure-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fother3.061e562f.png&w=256&q=75"
            },
            {
                name: "Industrial Chemicals and Raw Materials"
            }
        ]
    },
    {
        category: "Industries",
        items: [
            {
                name: "Food and Beverages Manufacturer",
                image: "https://brochure-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndustry5.e9c17cba.png&w=256&q=75"
            },
            {
                name: "Hotel",
                image: "https://brochure-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndustry1.baaa8242.png&w=256&q=75"
            },
            {
                name: "Restaurants",
                image: "https://brochure-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndustry2.912e564a.png&w=256&q=75"
            },
            {
                name: "Laundry and Cleaning Services / Households Manufacturer",
                image: "https://brochure-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndustry3.bd70e8c4.png&w=256&q=75"
            },
            {
                name: "Industrial",
                image: "https://brochure-sandy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndustry4.e7dd646d.png&w=256&q=75"
            }
        ]
    }
]

const contentUI = content.map((items)=>{
    return <div className="hidden md:block flex pl-24 pt-14 flex-col space-y-3 text-lg">
                <p className="font-semibold text-xl hover:cursor-pointer">{items.category}</p>
                <ul className="space-y-3 text-gray-700">
                    {items.items.map((item1)=>{
                        return <li className="hover:cursor-pointer hover:font-bold hover:text-yellow-700 animation-6hover:cursor-pointer00 duration-300 ">{item1.name}</li>
                    })}
                </ul>
            </div>
});

return(
    <div className="flex w-full">
        <aside className="w-0 md:w-1/4">
            {contentUI}
        </aside>
        <div className="w-full md:w-3/4">
            black
        </div>
    </div>
);
}


export default Body;