import React from 'react'

const Small = () => {
  return (
    <div>
          {/* Bottom Section */}
      <div className="text-[13px] flex top-20 justify-between items-center p-6 h-12 w-full border-b border-gray-400">
        <div className="flex gap-3.5  pl-2">
          <img
            className="h-8 w-8"
            src="https://img.icons8.com/?size=100&id=2DKIvbRrRla6&format=png&color=40C057"
            alt=""
          />
          <img
            className="h-8 w-8"
            src="https://img.icons8.com/?size=100&id=2DKIvbRrRla6&format=png&color=40C057"
            alt=""
          />
          <button className="flex items-center gap-2 px-4 bg-orange-300 text-orange-500   font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
            Nurturing
          </button>
          <button className="flex items-center gap-2 px-4 bg-gray-400 text-gray-600  font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
            Convert
          </button>
        </div>

        <div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-950 text-white  font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
            <img
              className="h-5 w-5"
              src="https://img.icons8.com/?size=100&id=82769&format=png&color=FFFFFF"
              alt="tick"
            />
            Mark as Converted
          </button>
        </div>
      </div>
    </div>
  )
}

export default Small