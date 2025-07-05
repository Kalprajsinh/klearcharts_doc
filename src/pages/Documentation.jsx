import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { CodeBlock, googlecode } from "react-code-blocks";
import { useLocation } from 'react-router-dom';

import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  ScatterPlot,
  Histogram,
  WaterfallChart,
} from "klearcharts";

const areaChartProps = [
  {
    name: "data",
    type: "{x: number; y: number;}",
    description: "Array of data points with x and y coordinates",
    required: true,
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Height of the chart in pixels",
  },
  {
    name: "width",
    type: "number",
    defaultValue: "600",
    description: "Width of the chart in pixels",
  },
  {
    name: "lineColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the line",
  },
  {
    name: "areaColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the area below the line",
  },
  {
    name: "areaOpacity",
    type: "number",
    defaultValue: "0.2",
    description: "Opacity of the area below the line (0-1)",
  },
  {
    name: "showPoints",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to show data points on the line",
  },
  {
    name: "pointColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the data points",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to animate the chart on load",
  },
  {
    name: "string",
    type: "boolean",
    defaultValue: "false",
    description: "If true, returns SVG as a string instead of rendering it",
  },
]

const barChartProps = [
  {
    name: "data",
    type: "number[]",
    description: "Array of numeric values for each bar",
    required: true,
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Height of the chart in pixels",
  },
  {
    name: "width",
    type: "number",
    defaultValue: "600",
    description: "Width of the chart in pixels",
  },
  {
    name: "barColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the bars",
  },
  {
    name: "hoverColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the bars on hover",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to animate the chart on load",
  },
  {
    name: "string",
    type: "boolean",
    defaultValue: "false",
    description: "If true, returns SVG as a string instead of rendering it",
  },
]

const scatterPlotProps = [
  {
    name: "data",
    type: "{x: number; y: number; label?: string;}",
    description: "Array of data points with x, y coordinates and optional labels",
    required: true,
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Height of the chart in pixels",
  },
  {
    name: "width",
    type: "number",
    defaultValue: "600",
    description: "Width of the chart in pixels",
  },
  {
    name: "xAxisLabel",
    type: "string",
    description: "Label for the x-axis",
  },
  {
    name: "yAxisLabel",
    type: "string",
    description: "Label for the y-axis",
  },
  {
    name: "pointColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the data points",
  },
  {
    name: "pointOpacity",
    type: "number",
    defaultValue: "1",
    description: "Opacity of the data points (0-1)",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to animate the chart on load",
  },
  {
    name: "string",
    type: "boolean",
    defaultValue: "false",
    description: "If true, returns SVG as a string instead of rendering it",
  },
]

const histogramProps = [
  {
    name: "data",
    type: "number[]",
    description: "Array of numeric values to be binned",
    required: true,
  },
  {
    name: "bins",
    type: "number",
    defaultValue: "10",
    description: "Number of bins to divide the data into",
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Height of the chart in pixels",
  },
  {
    name: "width",
    type: "number",
    defaultValue: "600",
    description: "Width of the chart in pixels",
  },
  {
    name: "barColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the bars",
  },
  {
    name: "barHoverColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the bars on hover",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to animate the chart on load",
  },
  {
    name: "string",
    type: "boolean",
    defaultValue: "false",
    description: "If true, returns SVG as a string instead of rendering it",
  },
]

const lineChartProps = [
  {
    name: "data",
    type: "{x: number; y: number;}",
    description: "Array of data points with x and y coordinates",
    required: true,
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Height of the chart in pixels",
  },
  {
    name: "width",
    type: "number",
    defaultValue: "600",
    description: "Width of the chart in pixels",
  },
  {
    name: "lineColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the line",
  },
  {
    name: "pointColor",
    type: "string",
    defaultValue: "#000",
    description: "Color of the data points",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to animate the chart on load",
  },
  {
    name: "string",
    type: "boolean",
    defaultValue: "false",
    description: "If true, returns SVG as a string instead of rendering it",
  },
]

const pieChartProps = [
  {
    name: "data",
    type: "{label: string; value: number;}",
    description: "Array of data points with labels and values",
    required: true,
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Height of the chart in pixels",
  },
  {
    name: "width",
    type: "number",
    defaultValue: "600",
    description: "Width of the chart in pixels",
  },
  {
    name: "donut",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to render as a donut chart",
  },
  {
    name: "colors",
    type: "string[]",
    description: "Array of colors for each slice",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to animate the chart on load",
  },
  {
    name: "string",
    type: "boolean",
    defaultValue: "false",
    description: "If true, returns SVG as a string instead of rendering it",
  },
]

const waterfallChartProps = [
  {
    name: "data",
    type: "{label: string; value: number;}",
    description: "Array of data points with labels and values",
    required: true,
  },
  {
    name: "height",
    type: "number",
    defaultValue: "300",
    description: "Height of the chart in pixels",
  },
  {
    name: "width",
    type: "number",
    defaultValue: "600",
    description: "Width of the chart in pixels",
  },
  {
    name: "positiveColor",
    type: "string",
    defaultValue: "#4CAF50",
    description: "Color for positive values",
  },
  {
    name: "negativeColor",
    type: "string",
    defaultValue: "#F44336",
    description: "Color for negative values",
  },
  {
    name: "totalColor",
    type: "string",
    defaultValue: "#2196F3",
    description: "Color for total values",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to animate the chart on load",
  },
  {
    name: "string",
    type: "boolean",
    defaultValue: "false",
    description: "If true, returns SVG as a string instead of rendering it",
  },
]

function Propstable({ props }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="border text-center">
            <th className="px-2 py-1">Prop</th>
            <th className="px-2 py-1">Type</th>
            <th className="px-2 py-1">Default</th>
            <th className="px-2 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border text-center">
              <td className="px-2 py-1 font-medium">
                {prop.name}
                {prop.required && <span className="text-red-500 ml-1">*</span>}
              </td>
              <td className="px-2 py-1 font-mono text-sm">{prop.type}</td>
              <td className="px-2 py-1">{prop.defaultValue || "-"}</td>
              <td className="px-2 py-1">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


// Inline component for CodeSnippet
function CodeSnippet({ code, language = "jsx" }) {
  return (
    <div className="rounded-lg p-0.5 bg-gray-200">
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={false}
        theme={googlecode}
      />
    </div>
  )
}

// Inline component for ChartExample
function ChartExample({ type }) {
  const [view, setView] = useState("preview")

  // Sample data for each chart type
  const areaData = [
    { x: 10, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 15 },
  ]

  const barData = [10,20,30,25,40,35,50]

  const scatterData = [
    { x: 10, y: 20, label: "Item A" },
    { x: 25, y: 40, label: "Item B" },
    { x: 40, y: 30, label: "Item C" },
    { x: 60, y: 50, label: "Item D" },
    { x: 80, y: 15, label: "Item E" },
  ]

  const histogramData = [
    { x: 10, label: "0-5" },
    { x: 25, label: "5-10" },
    { x: 15, label: "10-15" },
    { x: 60, label: "15-20" },
    { x: 80, label: "20-25" },
  ]

  const lineData = [
    { x: 10, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 15 },
  ]

  const pieData = [
    { label: "A", value: 35 },
    { label: "B", value: 25 },
    { label: "C", value: 15 },
    { label: "D", value: 15 },
    { label: "E", value: 10 },
  ]

  const waterfallData = [
    { label: "Start", value: 100 },
    { label: "step 1", value: 23 },
    { label: "step 2", value: -38 },
    { label: "step 3", value: -24 },
    { label: "step 4", value: 12 },
    { label: "step 5", value: -48 },
    { label: "step 6", value: 15 },
    { label: "step 7", value: -32 },
    { label: "step 8", value: -128 },
    { label: "step 9", value: 12 },
    { label: "step 10", value: 42 },
    { label: "step 11", value: 134 },
    { label: "Total", value: 68 },
  ]
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="rounded-lg bg-card p-6 mx-auto px-4 sm:px-6 lg:px-8">
      <div defaultValue="preview" value={view} onValueChange={(v) => setView(v)}>
        <div className="flex justify-end mb-4">
        </div>
        <div value="preview" className="mt-0">
          <div className="h-[300px] flex items-center justify-center">
            {type === "area" && (
              <AreaChart
                data={areaData}
                height={300}
                width={600}
                
              />
            )}
            {type === "bar" && (
              <BarChart data={barData} height={300} width={600} />
            )}
            {type === "scatter" && <ScatterPlot data={scatterData} height={300} width={600}  />}
            {type === "histogram" && (
              <Histogram data={histogramData} bins={6} height={300} width={600} />
            )}
            {type === "line" && <LineChart data={lineData} height={300} width={600}/>}
            {type === "pie" && <PieChart data={pieData} height={300} width={600} /> }
            {type === "waterfall" && (
              <WaterfallChart
                data={waterfallData}
                height={300}
                width={600}
                
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("installation")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id) => {
    setActiveSection(id)
    setSidebarOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col pt-14">
      {/* Navigation */}
      <nav className="h-15 w-full fixed top-0 left-0 z-10 bg-white/30 backdrop-blur-xs">
            <div className="flex justify-between items-center h-15 px-10 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <img src="logo.png" alt="Klearcharts Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold text-gray-900">Klearcharts</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#features" className="text-black hover:text-gray-900 font-medium transition-colors">Features</Link>
              {/* <Link to="#examples" className="text-black hover:text-gray-900 font-medium transition-colors">Examples</Link> */}
              <Link to="/#installation" className="text-black hover:text-gray-900 font-medium transition-colors">Installation</Link>
              {/* <Link to="/documentation" className="text-black hover:text-gray-900 font-medium transition-colors">Documentation</Link> */}
              <a target="_blank" href="https://github.com/Kalprajsinh/klearcharts">
              <button className="bg-gray-900 flex justify-center items-center gap-2 text-white px-4 py-2 rounded-md font-medium hover:bg-black transition-colors">
                GitHub
                <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" className="w-5 h-5" />
              </button>
              </a>
            </div>
              <div className="md:hidden">
            <button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
            </div>
          </nav>

      <div className="flex flex-1">
        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 md:hidden">
            <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold">Documentation</h2>
                <button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("installation")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "installation"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  Installation
                </button>
                <button
                  onClick={() => scrollToSection("basic-usage")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "basic-usage"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  Basic Usage
                </button>
                <button
                  onClick={() => scrollToSection("bar-chart")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "bar-chart"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  BarChart
                </button>
                <button
                  onClick={() => scrollToSection("line-chart")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "line-chart"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  LineChart
                </button>
                <button
                  onClick={() => scrollToSection("area-chart")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "area-chart"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  AreaChart
                </button>
                <button
                  onClick={() => scrollToSection("scatter-plot")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "scatter-plot"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  ScatterPlot
                </button>
                <button
                  onClick={() => scrollToSection("histogram")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "histogram"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  Histogram
                </button>
                
                <button
                  onClick={() => scrollToSection("pie-chart")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "pie-chart"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  PieChart
                </button>
                <button
                  onClick={() => scrollToSection("waterfall-chart")}
                  className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                    activeSection === "waterfall-chart"
                      ? "bg-gray-100 font-semibold"
                      : ""
                  }`}
                >
                  WaterfallChart
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 border-r p-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Documentation</h2>
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("installation")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "installation"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              Installation
            </button>
            <button
              onClick={() => scrollToSection("basic-usage")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "basic-usage"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              Basic Usage
            </button>
            <button
              onClick={() => scrollToSection("bar-chart")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "bar-chart"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              BarChart
            </button>
            <button
              onClick={() => scrollToSection("line-chart")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "line-chart"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              LineChart
            </button>
            <button
              onClick={() => scrollToSection("area-chart")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "area-chart"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              AreaChart
            </button>
            
            <button
              onClick={() => scrollToSection("scatter-plot")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "scatter-plot"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              ScatterPlot
            </button>
            <button
              onClick={() => scrollToSection("histogram")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "histogram"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              Histogram
            </button>
            
            <button
              onClick={() => scrollToSection("pie-chart")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "pie-chart"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              PieChart
            </button>
            <button
              onClick={() => scrollToSection("waterfall-chart")}
              className={`text-left px-4 py-2 cursor-pointer rounded-md ${
                activeSection === "waterfall-chart"
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
            >
              WaterfallChart
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
          
            {/* Installation */}
            <section id="installation" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <p className="mb-4">
                KlearCharts can be installed via npm, yarn, or pnpm. Choose your preferred package manager:
              </p>
              <CodeSnippet
                code={`// Using npm
npm install klearcharts

// Using yarn
yarn add klearcharts

// Using pnpm
pnpm add klearcharts`}
                language="jsx"
              />
            </section>

            {/* Basic Usage */}
            <section id="basic-usage" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
              <p className="mb-4">
                After installation, you can import any chart component from the library and use it in your application.
                Here's a simple example:
              </p>
              <CodeSnippet
                code={`import { BarChart } from 'klearcharts';

function App() {
  return (
    <div>
      <h1>My First KlearChart</h1>
      <BarChart
        data={[45, 75, 35, 90, 60, 80, 25]}
        height={300}
        width={600}
      />
    </div>
  );
}`}
              />
              <p className="mb-4">
                All charts support the <code>string</code> prop, which when set to <code>true</code>, returns the SVG as
                a string instead of rendering it. This is useful for server-side rendering or when you need to
                manipulate the SVG before rendering.
              </p>
              <CodeSnippet
                code={`import { BarChart } from 'klearcharts';

// Server-side or Node.js environment
function generateChartSVG() {
  const svgString = BarChart({
    data: [45, 75, 35, 90, 60, 80, 25],
    height: 300,
    width: 600,
    string: true
  });
  
  return svgString; // Returns SVG as a string
}`}
              />
            </section>

            {/* BarChart */}
            <section id="bar-chart" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">BarChart</h2>
              <p className="mb-4">
                The BarChart component displays data as rectangular bars with heights proportional to the values they
                represent. It's useful for comparing different categories of data.
              </p>

              {mounted && <ChartExample type="bar" />}

              

              <h3 className="text-xl font-semibold mt-8 mb-4">Basic Example</h3>
              <CodeSnippet
                code={`<BarChart
  data={[10,20,30,25,40,35,50]}
  height={300}
  width={600}
/>`}
              />
              <h3 className="text-xl font-semibold mt-8 mb-4">Props</h3>
              <Propstable props={barChartProps} />
              <h3 className="text-xl font-semibold mt-8 mb-4">Customized Example</h3>
              <CodeSnippet
                code={`<BarChart
  data={[10,20,30,25,40,35,50]}
  height={300}
  width={600}
  barColor="#10b981"
  hoverColor="#059669"
  animate={true}
/>`}
              />
            </section>

            <section id="line-chart" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">LineChart</h2>
              <p className="mb-4">
                The LineChart component displays data as a series of points connected by straight line segments. It's
                useful for showing trends over time.
              </p>

              {mounted && <ChartExample type="line" />}

              

              <h3 className="text-xl font-semibold mt-8 mb-4">Basic Example</h3>
              <CodeSnippet
                code={`<LineChart
  data={[
    { x: 10, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 15 }
  ]}
  height={300}
  width={600}
/>`}
              />
<h3 className="text-xl font-semibold mt-8 mb-4">Props</h3>
<Propstable props={lineChartProps} />
              <h3 className="text-xl font-semibold mt-8 mb-4">Customized Example</h3>
              <CodeSnippet
                code={`<LineChart
  data={[
    { x: 10, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 15 }
  ]}
  height={300}
  width={600}
  lineColor="#10b981"
  pointColor="#059669"
  animate={true}
/>`}
              />
            </section>

            <section id="area-chart" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">AreaChart</h2>
              <p className="mb-4">
                The AreaChart component displays data as an area below a line connecting data points. It's useful for
                showing trends over time or cumulative data.
              </p>

              {mounted && <ChartExample type="area" />}

              

              <h3 className="text-xl font-semibold mt-8 mb-4">Basic Example</h3>
              <CodeSnippet
                code={`<AreaChart
  data={[
    { x: 10, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 15 }
  ]}
  height={300}
  width={600}
/>`}
              />
              <h3 className="text-xl font-semibold mt-8 mb-4">Props</h3>
              <Propstable props={areaChartProps} />
              <h3 className="text-xl font-semibold mt-8 mb-4">Customized Example</h3>
              <CodeSnippet
                code={`<AreaChart
  data={[
    { x: 10, y: 20 },
    { x: 25, y: 40 },
    { x: 40, y: 30 },
    { x: 60, y: 50 },
    { x: 80, y: 15 }
  ]}
  height={300}
  width={600}
  lineColor="#10b981"
  areaColor="#10b981"
  areaOpacity={0.2}
  showPoints={true}
  pointColor="#059669"
  animate={true}
/>`}
              />
            </section>

            {/* ScatterPlot */}
            <section id="scatter-plot" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">ScatterPlot</h2>
              <p className="mb-4">
                The ScatterPlot component displays data as individual points on a two-dimensional plane. It's useful for
                showing the relationship between two variables.
              </p>

              {mounted && <ChartExample type="scatter" />}

              

              <h3 className="text-xl font-semibold mt-8 mb-4">Basic Example</h3>
              <CodeSnippet
                code={`<ScatterPlot
  data={[
    { x: 10, y: 20, label: "Item A" },
    { x: 25, y: 40, label: "Item B" },
    { x: 40, y: 30, label: "Item C" },
    { x: 60, y: 50, label: "Item D" },
    { x: 80, y: 15, label: "Item E" }
  ]}
  height={300}
  width={600}
/>`}
              />
<h3 className="text-xl font-semibold mt-8 mb-4">Props</h3>
<Propstable props={scatterPlotProps} />
              <h3 className="text-xl font-semibold mt-8 mb-4">Customized Example</h3>
              <CodeSnippet
                code={`<ScatterPlot
  data={[
    { x: 10, y: 20, label: "Item A" },
    { x: 25, y: 40, label: "Item B" },
    { x: 40, y: 30, label: "Item C" },
    { x: 60, y: 50, label: "Item D" },
    { x: 80, y: 15, label: "Item E" }
  ]}
  height={300}
  width={600}
  xAxisLabel="X Axis"
  yAxisLabel="Y Axis"
  pointColor="#10b981"
  pointOpacity={0.8}
  animate={true}
/>`}
              />
            </section>

            {/* Histogram */}
            <section id="histogram" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">Histogram</h2>
              <p className="mb-4">
                The Histogram component displays the distribution of a dataset by grouping data into bins and showing
                the frequency of each bin as a bar.
              </p>

              {mounted && <ChartExample type="histogram" />}

              

              <h3 className="text-xl font-semibold mt-8 mb-4">Basic Example</h3>
              <CodeSnippet
                code={`<Histogram
    data={[
    { x: 10, label: "0-5" },
    { x: 25, label: "5-10" },
    { x: 15, label: "10-15" },
    { x: 60, label: "15-20" },
    { x: 80, label: "20-25" },
  ]}
  height={300}
  width={600}
/>`}
              />
<h3 className="text-xl font-semibold mt-8 mb-4">Props</h3>
<Propstable props={histogramProps} />
              <h3 className="text-xl font-semibold mt-8 mb-4">Customized Example</h3>
              <CodeSnippet
                code={`<Histogram
  data={[
    { x: 10, label: "0-5" },
    { x: 25, label: "5-10" },
    { x: 15, label: "10-15" },
    { x: 60, label: "15-20" },
    { x: 80, label: "20-25" },
    ]}
  bins={6}
  height={300}
  width={600}
  barColor="#10b981"
  barHoverColor="#059669"
  animate={true}
/>`}
              />
            </section>

            {/* LineChart */}
            

            {/* PieChart */}
            <section id="pie-chart" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">PieChart</h2>
              <p className="mb-4">
                The PieChart component displays data as slices of a circle, with each slice representing a proportion of
                the whole. It can also be rendered as a donut chart.
              </p>

              {mounted && <ChartExample type="pie" />}

              

              <h3 className="text-xl font-semibold mt-8 mb-4">Basic Example</h3>
              <CodeSnippet
                code={`<PieChart
  data={[
    { label: "A", value: 35 },
    { label: "B", value: 25 },
    { label: "C", value: 15 },
    { label: "D", value: 15 },
    { label: "E", value: 10 }
  ]}
  height={300}
  width={600}
/>`}
              />
<h3 className="text-xl font-semibold mt-8 mb-4">Props</h3>
<Propstable props={pieChartProps} />
              <h3 className="text-xl font-semibold mt-8 mb-4">Donut Chart Example</h3>
              <CodeSnippet
                code={`<PieChart
  data={[
    { label: "A", value: 35 },
    { label: "B", value: 25 },
    { label: "C", value: 15 },
    { label: "D", value: 15 },
    { label: "E", value: 10 }
  ]}
  height={300}
  width={600}
  donut={true}
  colors={["#10b981", "#059669", "#047857", "#065f46", "#064e3b"]}
  animate={true}
/>`}
              />
            </section>

            {/* WaterfallChart */}
            <section id="waterfall-chart" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">WaterfallChart</h2>
              <p className="mb-4">
                The WaterfallChart component displays how an initial value is affected by a series of intermediate
                positive or negative values. It's useful for showing how a value changes over time or through different
                stages.
              </p>

              {mounted && <ChartExample type="waterfall" />}

              

              <h3 className="text-xl font-semibold mt-8 mb-4">Basic Example</h3>
              <CodeSnippet
                code={`<WaterfallChart
  data={[
    { label: "Start", value: 100 },
    { label: "step 1", value: 23 },
    { label: "step 2", value: -38 },
    { label: "step 3", value: -24 },
    { label: "step 4", value: 12 },
    { label: "step 5", value: -48 },
    { label: "step 6", value: 15 },
    { label: "step 7", value: -32 },
    { label: "step 8", value: -128 },
    { label: "step 9", value: 12 },
    { label: "step 10", value: 42 },
    { label: "step 11", value: 134 },
    { label: "Total", value: 68 }
  ]}
  height={300}
  width={600}
/>`}
              />
<h3 className="text-xl font-semibold mt-8 mb-4">Props</h3>
<Propstable props={waterfallChartProps} />
              <h3 className="text-xl font-semibold mt-8 mb-4">Customized Example</h3>
              <CodeSnippet
                code={`<WaterfallChart
  data={[
   { label: "Start", value: 100 },
    { label: "step 1", value: 23 },
    { label: "step 2", value: -38 },
    { label: "step 3", value: -24 },
    { label: "step 4", value: 12 },
    { label: "step 5", value: -48 },
    { label: "step 6", value: 15 },
    { label: "step 7", value: -32 },
    { label: "step 8", value: -128 },
    { label: "step 9", value: 12 },
    { label: "step 10", value: 42 },
    { label: "step 11", value: 134 },
    { label: "Total", value: 68 }
  ]}
  height={300}
  width={600}
  positiveColor="#10b981"
  negativeColor="#ef4444"
  totalColor="#3b82f6"
  animate={true}
/>`}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
