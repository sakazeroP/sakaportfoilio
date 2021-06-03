import * as React from "react"
import '../styles/global.css';
import Layout from "../components/layout"
import mypic from '../images/mypic.png'
import customer1 from '../images/customer_1.png'
import customer2 from '../images/customer_2.png'
import customer3 from '../images/customer_3.png'
import customer4 from '../images/customer_4.png'

const IndexPage = () => {
  return (
    <Layout>
        <div className="p-20 bg-banner bg-cover bg-no-repeat bg-center">
          <div className="container mx-auto md:w-9/12">
            <div className="flex items-center">
              <div className="col-span-5">
                <h1 className="text-6xl leading-tight font-Poppins text-yellow-dark">Pakkapat Banditsingha</h1>
                <p className="text-base font-Poppins leading-8 text-gray-500 pt-5">Front-end developer and UX/UI Design with three years of experience. Plus skill of Graphic Design tools</p>
              </div>
              <div className="col-span-7 mx-auto">
                <img className="object-contain w-3/4 mx-auto rounded-2xl" src={mypic} alt="pakkapat Banditsingha"></img>
              </div>
            </div>
          </div>            
        </div>
        <div className="py-10 bg-cover bg-no-repeat bg-center">
          <div className="container mx-auto md:w-9/12">
            <h3 className="text-4xl font-semibold mb-6">My <span className="text-yellow-dark">Skills</span></h3>
            <div className="grid grid-cols-12">
              <div className="col-span-3">
                <div class="bg-white rounded shadow border p-6 w-64 m-3">
                  <svg className="text-yellow-dark h-10 w-10" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <h5 class="text-lg font-bold mb-4 mt-0">UX/UI Design</h5>
                  <div className="border-b-8 border-yellow-dark border-dashed w-full"></div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="bg-white rounded shadow border p-6 w-64 m-3">
                  <svg className="text-yellow-dark h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <h5 class="text-lg font-bold mb-4 mt-0">Adobe XD /Figmar</h5>
                  <div className="border-b-8 border-yellow-dark border-dashed w-full"></div>
                </div>
              </div>
              <div className="col-span-3">
                <div class="bg-white rounded shadow border p-6 w-64 m-3">
                  <svg className="text-yellow-dark h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                  <h5 class="text-lg font-bold mb-4 mt-0">Photoshop</h5>
                  <div className="border-b-8 border-yellow-dark border-dashed w-full"></div>
                </div>
              </div>
              
            </div>

            <div className="grid grid-cols-12 mt-4">
              <div className="col-span-3">
                <div class="bg-white rounded shadow border p-6 w-64 m-3">
                  <svg className="text-yellow-dark h-10 w-10" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <h5 class="text-lg font-bold mb-4 mt-0">HTML/CSS</h5>
                  <div className="border-b-8 border-yellow-dark border-dashed w-full"></div>
                </div>
              </div>
              <div className="col-span-3">
                <div class="bg-white rounded shadow border p-6 w-64 m-3">
                  <svg className="text-yellow-dark h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                  <h5 class="text-lg font-bold mb-4 mt-0">Bootstrap / Tailwind</h5>
                  <div className="border-b-8 border-yellow-dark border-dashed w-full"></div>
                </div>
              </div>
              <div className="col-span-3">
                <div class="bg-white rounded shadow border p-6 w-64 m-3">
                  <svg className="text-yellow-dark h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <h5 class="text-lg font-bold mb-4 mt-0">WordPress</h5>
                  <div className="border-b-8 border-yellow-dark border-dashed w-full"></div>
                </div>
              </div>
              <div className="col-span-3">
                <div class="bg-white rounded shadow border p-6 w-64 m-3">
                  <svg className="text-yellow-dark h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <h5 class="text-lg font-bold mb-4 mt-0">React</h5>
                  <div className="border-b-8 border-yellow-dark border-dashed w-1/2"></div>
                </div>
              </div>
            </div>
          </div>            
        </div>

        <div className="my-10 bg-cover bg-no-repeat bg-center bg-banner-work">
          <div className="container mx-auto md:w-9/12">
              <div className="grid grid-cols-1 mt-4">
                <h3 className="text-4xl font-semibold">My <span className="text-yellow-dark">Works</span></h3>
              </div>
              <div className="grid grid-cols-12 mt-4">
                <div className="col-span-4">
                  <div className="ml-0 m-4 hover:opacity-75 hover:text-yellow-dark">
                    <a href="https://www.plodpaiguard.co.th/">
                      <img src={customer1} alt="ppg"></img>
                    </a>
                    <h1 className="m-2 text-center">PlodPaiGruad</h1>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="m-4 hover:opacity-75 hover:text-yellow-dark">
                    <a href="https://www.potential-u.net/">
                      <img src={customer2} alt="ptt"></img>
                    </a>
                    <h1 className="m-2 text-center">Potential-U</h1>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="m-4 hover:opacity-75 hover:text-yellow-dark">
                    <a href="https://www.bigmonsteracademy.com/">
                      <img src={customer3} alt="bmt"></img>
                    </a>
                    <h1 className="m-2 text-center">Course Online</h1>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="ml-0 m-4 hover:opacity-75 hover:text-yellow-dark">
                    <a href="https://www.c-hot.coursesquare.co/">
                      <img src={customer4} alt="chot"></img>
                    </a>
                    <h1 className="m-2 text-center">Course Online</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage