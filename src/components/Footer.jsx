import React from 'react'

const Footer = ({ setShowModal }) => {
    return (
        <footer className=" pt-8 ">
            <div className="  row justify-between items-center">
                <div className='w-full flex justify-around'>
                    <div className="flex justify-around w-2/3 mb-6">
                        <img src="images/cronn_green_black-white.svg" alt="Cronn Logo" className="h-12" />
                        <img src="images/ga-ffm_logo.svg" alt="GA-FFM Logo" className="h-12" />
                        <img src="images/funded_by_eu.svg" alt="Funded by EU Logo" className="h-12" />
                    </div>
                </div>
                <div style={{ backgroundColor: "#CBD9E7" }} className="h-20 pt-8 w-full  ">
                    <div className=' '>
                        <div className='flex justify-end'>
                            <button onClick={() => setShowModal(true)} className="text-primary-plain-Color hover:underline pr-4">Impressum</button>
                            <a href="https://www.frankfurt.de/sixcms/detail.php?id=2778&_ffmpar[_id_inhalt]=25250" target="_blank" rel="noopener noreferrer" className="text-primary-plain-Color hover:underline pr-8">Datenschutz</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer