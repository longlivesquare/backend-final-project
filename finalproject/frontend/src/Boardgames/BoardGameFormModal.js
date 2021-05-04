import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import CategoryList from './CategoryList';

const BoardGameModal = (props) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [minPlayers, setMinPlayers] = useState(0);
    const [maxPlayers, setMaxPlayer] = useState(0);
    
    const cancelButtonRef = useRef();

    const handleSubmit = () => {
        let item = {
            "pk": 100,
            "name": "Brew Crafters",
            "year_published": 2015,
            "min_players": 2,
            "max_players": 5,
            "edition": null,
            "category": "Worker Placement",
            "designer": [
                {
                    "id": 1
                }
            ]
        };
        console.log(item);
        props.handleCreate(item);
        props.handleClose();
    }

    return (
        <Transition.Root show={props.open} as={Fragment}>
            <Dialog 
                as="div"
                static
                onClose={props.handleClose} 
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                open={props.open}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    > 
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Board Games
                                        </Dialog.Title>
                                            <div className="mt-2">
                                                <form className="flex flex-wrap space-y-2">
                                                    <div>
                                                        <label className="mr-2">Name:</label>
                                                        <input type="text" placeholder="Name of game" value={name} onChange={(e) => setName(e.target.value)} />
                                                    </div>

                                                    <div className="w-full">
                                                        <CategoryList categories={props.categories} />
                                                    </div>

                                                    <div>
                                                        <label className="mr-2">Year:</label>
                                                        <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
                                                    </div>

                                                    <div>
                                                        <label className="mr-2">Minimum number of players:</label>
                                                        <input type="number" value={minPlayers} onChange={(e) => setMinPlayers(e.target.value)} />
                                                    </div>

                                                    <div>
                                                        <label className="mr-2">Maximum number of players:</label>
                                                        <input type="number" value={maxPlayers} onChange={(e) => setMaxPlayer(e.target.value)} />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-300 text-base font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={props.handleClose}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default BoardGameModal

