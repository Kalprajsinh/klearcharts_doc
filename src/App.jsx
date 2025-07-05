import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
} from "klearcharts";
import { CodeBlock } from "react-code-blocks";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Documentation from './pages/Documentation';

function App() {

  const barData = [45, 75, 35, 90, 60, 80, 25,65];

  const lineData = [
    { x: 0, y: 20 },
    { x: 1, y: 45 },
    { x: 2, y: 30 },
    { x: 3, y: 60 },
    { x: 5, y: 25 },
    { x: 6, y: 55 },
    { x: 7, y: 35 },
    { x: 8, y: 65 },
  ];

  const pieData = [
    { label: "A", value: 35 },
    { label: "B", value: 25 },
    { label: "C", value: 20 },
    { label: "D", value: 15 },
    { label: "E", value: 5 },
  ];

  const installCode = `// Using npm
npm install klearcharts

// Using yarn
yarn add klearcharts

// Using pnpm
pnpm add klearcharts`

const usageCode = `import { BarChart } from 'klearcharts';

function App() {
  return (
    <div>
      <h1>My First KlearChart</h1>
      <BarChart
        data={[45, 75, 35, 90, 60, 80, 25]}
        height={300} width={600}
        barColor="#10b981"
        animate={true}
      />
    </div>
  );
}

export default App;`

  return (
    <Router>
          
      <div>
        <div className="">

          <Routes>
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/" element={
              <>
              <div className="bg-gradient-to-br from-white via-blue-100 via-30% to-white">
              <nav className="h-15 w-full fixed top-0 left-0 z-10 bg-white/30 backdrop-blur-xs">
            <div className="flex justify-between items-center h-15 px-10 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <img src="logo.png" alt="Klearcharts Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold text-gray-900">Klearcharts</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-black hover:text-gray-900 font-medium transition-colors">Features</a>
              <Link to="/documentation" className="text-black hover:text-gray-900 font-medium transition-colors">Examples</Link>
              <a href="#installation" className="text-black hover:text-gray-900 font-medium transition-colors">Installation</a>
              <Link to="/documentation" className="text-black hover:text-gray-900 font-medium transition-colors">Documentation</Link>
              <a target="_blank" href="https://github.com/Kalprajsinh/klearcharts">
              <button className="bg-gray-900 flex justify-center items-center gap-2 text-white px-4 py-2 rounded-md font-medium hover:bg-black transition-colors">
                GitHub
                <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" className="w-5 h-5" />
              </button>
              </a>
            </div>
            </div>
          </nav>
                <main className="flex flex-col items-center text-center justify-center space-y-6 pt-52">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Klearcharts - SVG Chart Library
                  </h1>
                  <p className="text-xl text-gray-500 max-w-2xl">
                    A lightweight, pure SVG charting library for creating dynamic and 
                    interactive charts with easy to use.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <a href="https://www.npmjs.com/package/klearcharts">
                    <button className="inline-flex items-center px-6 py-3 cursor-pointer bg-gray-900 text-white font-medium rounded-md hover:bg-black transition-colors">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M8 12l-4-4h3V3h2v5h3L8 12z"/>
                        <path fill="currentColor" d="M14 13v1H2v-1h12z"/>
                      </svg>
                      npm install klearcharts
                    </button>
                    </a>
                    <Link to="/documentation">
                    <button className="inline-flex items-center cursor-pointer px-6 py-3 border border-gray-200 text-gray-900 font-medium rounded-md hover:border-gray-900 transition-colors">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M4 1h8v2H4V1zm0 3h8v1H4V4zm0 2h8v1H4V6zm0 2h4v1H4V8z"/>
                        <path fill="currentColor" d="M2 0v16h12V0H2zm11 15H3V1h10v14z"/>
                      </svg>
                      View Documentation
                    </button>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 mt-10">
                  <BarChart
                  data={barData}
                  width={400}
                  height={250}
                  animate={true}
                />

                <PieChart data={pieData} width={400}
                  height={250}/>
                <AreaChart data={lineData} width={400}
                  height={250}/>

                  </div>
                </main>

                <section id="features" className="pt-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</h2>
                      <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-2">
                        Powerful features that make data visualization simple and efficient
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* SVG-based */}
                      <div className="bg-white border border-gray-200 shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-blue-900">SVG-based</h3>
                        </div>
                        <p className="text-gray-600">
                          Pure SVG implementation for crisp, scalable charts that look great at any size
                        </p>
                      </div>

                      {/* Lightweight */}
                      <div className="bg-white border border-gray-200 shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-blue-900">Lightweight</h3>
                        </div>
                        <p className="text-gray-600">
                          Minimal footprint with no external dependencies for fast loading and rendering
                        </p>
                      </div>

                      {/* Easy Learning Curve */}
                      <div className="bg-white border border-gray-200 shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-blue-900">Easy Learning Curve</h3>
                        </div>
                        <p className="text-gray-600">
                          Simple API design that makes it easy to get started and master advanced features
                        </p>
                      </div>

                      {/* Server-Side Rendering */}
                      <div className="bg-white border border-gray-200 shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-blue-900">Server-Side Rendering</h3>
                        </div>
                        <p className="text-gray-600">
                          Full support for server-side rendering and static site generation
                        </p>
                      </div>

                      {/* Multiple Chart Types */}
                      <div className="bg-white border border-gray-200 shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-blue-900">Multiple Chart Types</h3>
                        </div>
                        <p className="text-gray-600">
                          Comprehensive set of chart types to visualize your data effectively
                        </p>
                      </div>

                      {/* Minimal Dependencies */}
                      <div className="bg-white border border-gray-200 shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-blue-900">Minimal Dependencies</h3>
                        </div>
                        <p className="text-gray-600">
                          Zero external dependencies for maximum performance and reliability
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="installation" className="py-20">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                       <div className="text-center mb-16">
                         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Installation & Usage</h2>
                         <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                           Get started with Klearcharts in just a few simple steps
                         </p>
                       </div>

                       <div className="">
                         <div className="bg-white border border-gray-200 shadow-md rounded-lg p-8">
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>   
                           <div className="flex items-center mb-6">
                             <h3 className="text-2xl font-semibold text-blue-900">Installation</h3>
                           </div>
                           <div className="bg-gray-50 rounded-lg p-3 mb-6">
                             <pre className="text-sm overflow-x-auto font-mono">
                               <CodeBlock text={installCode} language="javascript" showLineNumbers={false} className="text-gray-800" />
                             </pre>
                           </div>
                           <p className="text-gray-600 mb-6">
                             Choose your preferred package manager and run the installation command. After installation, you can import and use any of the chart components in your application.
                           </p>
                           <Link to="/documentation">
                           <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                             </svg>
                             View Full Documentation
                           </button>
                           </Link>
                            </div>
                           <div className="">
                           <div className="flex items-center mb-6">
                             <h3 className="text-2xl font-semibold text-blue-900">Basic Usage</h3>
                           </div>
                           <div className="bg-gray-50 rounded-lg p-3">
                             <pre className="text-sm overflow-x-auto font-mono">
                               <CodeBlock text={usageCode} language="javascript" showLineNumbers={false} className="text-gray-800" />
                             </pre>
                           </div>
                         
                         </div>
                           </div>
                           
                          
                         </div>

                       </div>
                     </div>
                   </section>
                   </div>
              </>
            } />
            
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App


// import { useState } from 'react';
// import { CodeBlock } from 'react-code-blocks';
// import {
//   AreaChart,
//   BarChart,
//   LineChart,
//   PieChart,
//   ScatterPlot,
//   Histogram,
//   WaterfallChart,
// } from 'klearcharts';

// const Documentation = () => {
//   const [activeSection, setActiveSection] = useState('installation');

//   const sidebarItems = [
//     { id: 'installation', label: 'Installation' },
//     { id: 'setup', label: 'Setup' },
//     { id: 'frameworks', label: 'Support Frameworks' },
//     { id: 'areachart', label: 'AreaChart' },
//     { id: 'barchart', label: 'BarChart' },
//     { id: 'linechart', label: 'LineChart' },
//     { id: 'piechart', label: 'PieChart' },
//     { id: 'histogram', label: 'Histogram' },
//     { id: 'scatterplot', label: 'ScatterPlot' },
//     { id: 'waterfallchart', label: 'WaterfallChart' },
//   ];

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'installation':
//         return (
          
//         );
//       case 'setup':
//         return (
          
//         );
//       case 'frameworks':
//         return (
          
//         );
//       case 'areachart':
//         return (
          
//         );
     
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className="w-64 border-r-2">
//         <div className="p-4">
//           <h1 className="text-xl font-bold mb-6">Documentation</h1>
//           <nav>
//             <ul className="space-y-2">
//               {sidebarItems.map((item) => (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => setActiveSection(item.id)}
//                     className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
//                       activeSection === item.id
//                         ? 'bg-blue-50 text-blue-600'
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     {item.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="max-w-6xl mx-auto">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Documentation; 