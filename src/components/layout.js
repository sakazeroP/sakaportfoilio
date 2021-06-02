import * as React from "react"
import { Popover, Transition } from '@headlessui/react'

export default function Layout({ children }) {
  return (
    <main>
        <Popover  className="relative bg-white">
            {({open}) =>(
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                            </a>
                        </div>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-dark hover:bg-yellow-light"
                            >
                            Contact Me!
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </Popover>
        { children }
    </main>
  )
}