/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";

export default function Courses() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Webpack 5 Fundamentals
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Learn the latest version of Webpack along with other modern
                  tools like Babel, Jest, ESLint, & Prettier.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.udemy.com/course/webpack-5-fundamentals/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Take Course
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Clear and concise! Everything is up to the point and
                    well explained. Its a dream that this course is free and yet
                    it covers not only everything one needs to get their webpack
                    up and running but also lots of answers about the hows and
                    whys!&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-base font-medium text-gray-700">
                      Arun Basnet
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/courses/webpack-5.png"
                alt="Webpack 5 Course Cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Learn Webpack 2 from scratch
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Learn how to build web applications using Javascript's most
                  popular build tool... Webpack 2
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.udemy.com/course/learn-webpack-2-from-scratch/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Take Course
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Highly recommend! You get updated with the new way of
                    doing js related programming with actual tools to speed up
                    the boring and repeating tasks. The instructor is good and
                    fluent. Free here doesn't mean cheap. High value
                    inside.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-base font-medium text-gray-700">
                      Octavian Rominu
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/courses/webpack.png"
                alt="Webpack 2 Course Cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
