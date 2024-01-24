import React from 'react'

const AlertCompon = ({ text, type, show }) => {
  return (
		<div className=' absolute top-10 left-0 right-0 flex justify-center items-center'>
			<div
				className={`${
					type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
				} p-2  text-indigo-100 leading-none lg:rounded-full flex items-center lg:inline-flex`}
				role='alert'
			>
				<p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} flex rounded-full px-2 py-1 mr-3 font-semibold uppercase text-xs`}>{type === 'danger' ? 'Error' : 'Success'}</p>
				<p className=" mr-2 text-left">
					{text}
				</p>
			</div>
		</div>
	)
}

export default AlertCompon
