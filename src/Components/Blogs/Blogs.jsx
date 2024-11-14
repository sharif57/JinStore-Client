const Blogs = () => {
    return (
        <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Main Blog Post Section */}
                <div className="lg:w-2/3 w-full">
                    <img src="/Link → blog-post-01.jpg.png" alt="Main Blog Post" className="w-full h-auto object-cover rounded-lg" />
                    <div className="space-y-4 mt-6">
                        <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
                            How grocers are approaching delivery as the market evolves
                        </h1>
                        <p className="text-gray-500">November 3, 2023</p>
                        <p className="text-gray-700">
                            Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,
                            och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis.
                        </p>
                        <button className="btn btn-accent">Read More</button>
                    </div>
                </div>

                {/* Blog Post List Section */}
                <div className="lg:w-1/3 w-full space-y-6">
                    <h1 className="text-2xl md:text-4xl font-semibold">Blog Post List</h1>

                    {/* Blog Post List Item */}
                    <div className="flex items-center gap-4 mt-4">
                        <img src="/Link → blog-post-01.jpg.png" alt="Blog Post Thumbnail" className="w-16 h-16 object-cover rounded-full" />
                        <div>
                            <h2 className="text-lg md:text-xl font-semibold">How grocers are approaching delivery as the market evolves</h2>
                            <p className="text-gray-500">November 3, 2023</p>
                        </div>
                    </div>

                    {/* Additional Blog List Items can be added here */}

                </div>
            </div>
        </div>
    );
};

export default Blogs;
