import React from 'react';

const testimonials = [
  {
    quote: "Since implementing Lando, our business has seen significant growth.",
    name: "Jack Sibire",
    title: "Lead Manager, Growin",
    rating: 5,
  },
  {
    quote: "I can't imagine running our company without it.",
    name: "Adele Mouse",
    title: "Product Manager, Mousin",
    rating: 5,
  },
  {
    quote: "I highly recommend Lando to any business looking for improvement.",
    name: "Ben Clock",
    title: "CTO, Clockwork",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#ededed] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center gap-10">
          <h2 className=" font-medium text-black text-4xl tracking-wide uppercase ">Testimonials</h2>
          <br />
          <br />
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            People love what we do and we want to let you know.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-medium text-gray-900">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-2 text-base font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-base font-medium text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
