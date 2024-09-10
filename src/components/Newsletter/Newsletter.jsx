const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <h1 className="text-3xl font-bold font-poppins text-center">
        Subscribe to our Newsletter
      </h1>
      <p className="max-w-[400px] md:max-w-[500px] mx-auto text-gray-500 text-sm text-center">
        Stay updated with the latest news, articles, and resources, sent
        straight to your inbox every month. Join our community and never miss
        out!
      </p>
      <div className="!mt-10 flex justify-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        <button className="bg-black text-white px-6 py-4">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
