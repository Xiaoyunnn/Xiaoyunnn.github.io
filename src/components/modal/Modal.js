import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({
    isOpen = false,
    onClose,
    title,
    message,
    isFailure = false,
}) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="bg-opacity-25 fixed inset-0 bg-black" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg leading-6 font-medium text-slate-700"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p
                                            className={`text-sm ${
                                                isFailure
                                                    ? "text-danger-600"
                                                    : "text-primary-600"
                                            }`}
                                        >
                                            {message}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-all ease-in-out focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 ${
                                                isFailure
                                                    ? "bg-danger-300 text-danger-700 hover:bg-danger-400 focus-visible:ring-danger-500"
                                                    : "bg-primary-300 text-primary-700 hover:bg-primary-400 focus-visible:ring-primary-500"
                                            }`}
                                            onClick={onClose}
                                        >
                                            {isFailure ? "Try again" : "Great!"}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
