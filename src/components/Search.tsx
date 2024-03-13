import type { Results, Headers } from '../types/baserow.ts'
import { useState, useRef, useEffect, useCallback } from 'react'


export default function Search({ headers }: { headers: Headers[] }) {
	/* const [search, setSearch] = useState(''); */
	const [data, setData] = useState<Results[]>([]);
	const searchInput = useRef<HTMLInputElement>(null);



	const getData = useCallback(async function loadData() {
		const response = await fetch(`${import.meta.env.PUBLIC_LOCATIONS_ROWS_URL}`, {
			headers: {
				Authorization: `Token ${import.meta.env.PUBLIC_API_KEY}`,
			},
		});
		const data = await response.json();
		console.log(data);
		setData(data.results);
	}, [data]);

	// async function loadHeaders() {
	// 	const response = await fetch(
	// 		`${import.meta.env.LOCATIONS_FIELDS_BASE_URL}`,
	// 		{
	// 			headers: {
	// 				Authorization: `Token ${import.meta.env.API_KEY}`,
	// 			},
	// 		},
	// 	);
	// 	const data = await response.json();
	// 	return data;
	// }

	function handleChange() {
		if (searchInput.current?.value === '') return getData();
		const value = searchInput.current?.value;
		const filteredData:Results[] = data.filter((city) =>
			city?.City?.toLowerCase().includes(value?.toLowerCase() as string)
		);
		setData(filteredData);
		console.log(value);
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div className="flex justify-center w-full mb-6">
				<input onChange={handleChange} className="py-2 px-3 rouded-md bg-slate-100" type="text" placeholder="Search by city name" ref={searchInput} />
			</div>

			<div className="overflow-x-auto pb-8">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							{headers?.map((header) => (
								<th key={header.id} className='px-8 w-[80px] m-auto text-yellow-500 text-2xl text-center'>{header.name}</th>
							)
							)}
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{data?.map((result, index) => (
							<tr key={index} className="mt-4 text-xl text-slate-600 hover:bg-slate-600 hover:text-slate-100">
								<td className='text-center w-[40px]'>{result.Name}</td>
								<td className='text-center max-w-10 overflow-x-auto hover:text-white font-bold'><a href={result.Location} target='_blank'>Map</a></td>
								<td className='text-center w-[40px]'>{result.Type}</td>
								<td className='text-center w-[40px]'>{result.Rating}</td>
								<td className='text-center w-[40px]'>{result.City}</td>
								<td className='text-center w-[40px]'>{result.Country}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div >
		</>
	)
}
