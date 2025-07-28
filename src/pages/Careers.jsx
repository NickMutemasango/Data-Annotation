import { useState } from 'react';
import { Helmet } from 'react-helmet';

const CareersPage = () => {
  // Empty jobs array to simulate no available positions
  const [jobs, setJobs] = useState([]);
  
  const [isApplying, setIsApplying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Careers | DataLabel Pro</title>
        <meta name="description" content="Join our team of data labeling experts and AI professionals." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Join Our Team
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Help build the future of AI data labeling
          </p>
        </div>

        {jobs.length === 0 ? (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-center">
              <div className="max-w-md mx-auto">
                <div className="flex justify-center">
                  <svg
                    className="h-20 w-20 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
                  No positions available currently
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  We don't have any open positions right now, but check back soon!
                </p>
                <p className="mt-4 text-gray-500">
                  In the meantime, feel free to connect with us on LinkedIn or follow us for updates.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Follow on LinkedIn
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Job listings would go here when available */
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            {/* Job listings content */}
          </div>
        )}

        {/* Company Culture Section (still shows even with no jobs) */}
        <div className="bg-white shadow rounded-lg p-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Our team working together"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Even when we're not hiring, we're building an amazing workplace
              </h3>
              <p className="text-gray-600">
                At DataLabel Pro, we believe in creating an environment where people can do their best work. 
                When positions do become available, we look for team members who share our values of innovation, 
                collaboration, and continuous learning.
              </p>
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  What we value
                </h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-700">Commitment to quality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-700">Continuous learning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-700">Collaborative spirit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;