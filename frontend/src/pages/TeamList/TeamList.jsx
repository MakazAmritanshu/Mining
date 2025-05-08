import React ,{useContext} from 'react'
import Pagination from '@mui/material/Pagination';
import { UserDataContext } from '../../Context/UserContext'
import { useState,useEffect } from 'react'
function TeamList() {
    // const { user } = useContext(UserDataContext);
    
    //   if (!user) {
    //     return <div>Loading...</div>;
    //   }
    //   console.log("from teamlist",user)
    const userdata=[
        {
          "userId": "USR001",
          "mobileNumber": "9876543100",
          "joiningDate": "2025-03-12",
          "level": 5
        },
        {
          "userId": "USR002",
          "mobileNumber": "9876543101",
          "joiningDate": "2025-03-07",
          "level": 2
        },
        {
          "userId": "USR003",
          "mobileNumber": "9876543102",
          "joiningDate": "2025-05-04",
          "level": 4
        },
        {
          "userId": "USR004",
          "mobileNumber": "9876543103",
          "joiningDate": "2025-04-20",
          "level": 5
        },
        {
          "userId": "USR005",
          "mobileNumber": "9876543104",
          "joiningDate": "2025-03-24",
          "level": 3
        },
        {
          "userId": "USR006",
          "mobileNumber": "9876543105",
          "joiningDate": "2025-03-24",
          "level": 2
        },
        {
          "userId": "USR007",
          "mobileNumber": "9876543106",
          "joiningDate": "2025-04-17",
          "level": 1
        },
        {
          "userId": "USR008",
          "mobileNumber": "9876543107",
          "joiningDate": "2025-03-09",
          "level": 2
        },
        {
          "userId": "USR009",
          "mobileNumber": "9876543108",
          "joiningDate": "2025-03-11",
          "level": 3
        },
        {
          "userId": "USR010",
          "mobileNumber": "9876543109",
          "joiningDate": "2025-03-07",
          "level": 1
        },
        {
          "userId": "USR011",
          "mobileNumber": "9876543110",
          "joiningDate": "2025-04-29",
          "level": 1
        },
        {
          "userId": "USR012",
          "mobileNumber": "9876543111",
          "joiningDate": "2025-04-15",
          "level": 3
        },
        {
          "userId": "USR013",
          "mobileNumber": "9876543112",
          "joiningDate": "2025-03-07",
          "level": 4
        },
        {
          "userId": "USR014",
          "mobileNumber": "9876543113",
          "joiningDate": "2025-03-26",
          "level": 2
        },
        {
          "userId": "USR015",
          "mobileNumber": "9876543114",
          "joiningDate": "2025-04-18",
          "level": 3
        },
        {
          "userId": "USR016",
          "mobileNumber": "9876543115",
          "joiningDate": "2025-03-17",
          "level": 1
        },
        {
          "userId": "USR017",
          "mobileNumber": "9876543116",
          "joiningDate": "2025-04-23",
          "level": 1
        },
        {
          "userId": "USR018",
          "mobileNumber": "9876543117",
          "joiningDate": "2025-03-16",
          "level": 2
        },
        {
          "userId": "USR019",
          "mobileNumber": "9876543118",
          "joiningDate": "2025-03-25",
          "level": 1
        },
        {
          "userId": "USR020",
          "mobileNumber": "9876543119",
          "joiningDate": "2025-03-06",
          "level": 4
        },
        {
          "userId": "USR021",
          "mobileNumber": "9876543120",
          "joiningDate": "2025-04-26",
          "level": 2
        },
        {
          "userId": "USR022",
          "mobileNumber": "9876543121",
          "joiningDate": "2025-04-16",
          "level": 2
        },
        {
          "userId": "USR023",
          "mobileNumber": "9876543122",
          "joiningDate": "2025-04-07",
          "level": 3
        },
        {
          "userId": "USR024",
          "mobileNumber": "9876543123",
          "joiningDate": "2025-04-27",
          "level": 3
        },
        {
          "userId": "USR025",
          "mobileNumber": "9876543124",
          "joiningDate": "2025-04-01",
          "level": 2
        },
        {
          "userId": "USR026",
          "mobileNumber": "9876543125",
          "joiningDate": "2025-03-16",
          "level": 3
        },
        {
          "userId": "USR027",
          "mobileNumber": "9876543126",
          "joiningDate": "2025-04-28",
          "level": 2
        },
        {
          "userId": "USR028",
          "mobileNumber": "9876543127",
          "joiningDate": "2025-03-11",
          "level": 4
        },
        {
          "userId": "USR029",
          "mobileNumber": "9876543128",
          "joiningDate": "2025-04-27",
          "level": 5
        },
        {
          "userId": "USR030",
          "mobileNumber": "9876543129",
          "joiningDate": "2025-03-22",
          "level": 3
        },
        {
          "userId": "USR031",
          "mobileNumber": "9876543130",
          "joiningDate": "2025-04-05",
          "level": 1
        },
        {
          "userId": "USR032",
          "mobileNumber": "9876543131",
          "joiningDate": "2025-03-20",
          "level": 1
        },
        {
          "userId": "USR033",
          "mobileNumber": "9876543132",
          "joiningDate": "2025-04-14",
          "level": 3
        },
        {
          "userId": "USR034",
          "mobileNumber": "9876543133",
          "joiningDate": "2025-04-17",
          "level": 5
        },
        {
          "userId": "USR035",
          "mobileNumber": "9876543134",
          "joiningDate": "2025-04-10",
          "level": 4
        },
        {
          "userId": "USR036",
          "mobileNumber": "9876543135",
          "joiningDate": "2025-05-02",
          "level": 5
        },
        {
          "userId": "USR037",
          "mobileNumber": "9876543136",
          "joiningDate": "2025-03-17",
          "level": 3
        },
        {
          "userId": "USR038",
          "mobileNumber": "9876543137",
          "joiningDate": "2025-03-27",
          "level": 5
        },
        {
          "userId": "USR039",
          "mobileNumber": "9876543138",
          "joiningDate": "2025-03-15",
          "level": 2
        },
        {
          "userId": "USR040",
          "mobileNumber": "9876543139",
          "joiningDate": "2025-03-14",
          "level": 4
        },
        {
          "userId": "USR041",
          "mobileNumber": "9876543140",
          "joiningDate": "2025-04-17",
          "level": 5
        },
        {
          "userId": "USR042",
          "mobileNumber": "9876543141",
          "joiningDate": "2025-03-10",
          "level": 1
        },
        {
          "userId": "USR043",
          "mobileNumber": "9876543142",
          "joiningDate": "2025-03-22",
          "level": 2
        },
        {
          "userId": "USR044",
          "mobileNumber": "9876543143",
          "joiningDate": "2025-04-26",
          "level": 2
        },
        {
          "userId": "USR045",
          "mobileNumber": "9876543144",
          "joiningDate": "2025-03-31",
          "level": 3
        },
        {
          "userId": "USR046",
          "mobileNumber": "9876543145",
          "joiningDate": "2025-04-22",
          "level": 4
        },
        {
          "userId": "USR047",
          "mobileNumber": "9876543146",
          "joiningDate": "2025-04-18",
          "level": 4
        },
        {
          "userId": "USR048",
          "mobileNumber": "9876543147",
          "joiningDate": "2025-05-03",
          "level": 3
        },
        {
          "userId": "USR049",
          "mobileNumber": "9876543148",
          "joiningDate": "2025-03-18",
          "level": 3
        },
        {
          "userId": "USR050",
          "mobileNumber": "9876543149",
          "joiningDate": "2025-04-09",
          "level": 4
        },
        {
          "userId": "USR051",
          "mobileNumber": "9876543150",
          "joiningDate": "2025-04-27",
          "level": 1
        },
        {
          "userId": "USR052",
          "mobileNumber": "9876543151",
          "joiningDate": "2025-04-17",
          "level": 3
        },
        {
          "userId": "USR053",
          "mobileNumber": "9876543152",
          "joiningDate": "2025-03-15",
          "level": 3
        },
        {
          "userId": "USR054",
          "mobileNumber": "9876543153",
          "joiningDate": "2025-04-19",
          "level": 5
        },
        {
          "userId": "USR055",
          "mobileNumber": "9876543154",
          "joiningDate": "2025-03-23",
          "level": 4
        },
        {
          "userId": "USR056",
          "mobileNumber": "9876543155",
          "joiningDate": "2025-03-17",
          "level": 3
        },
        {
          "userId": "USR057",
          "mobileNumber": "9876543156",
          "joiningDate": "2025-05-02",
          "level": 3
        },
        {
          "userId": "USR058",
          "mobileNumber": "9876543157",
          "joiningDate": "2025-03-25",
          "level": 2
        },
        {
          "userId": "USR059",
          "mobileNumber": "9876543158",
          "joiningDate": "2025-03-06",
          "level": 4
        },
        {
          "userId": "USR060",
          "mobileNumber": "9876543159",
          "joiningDate": "2025-05-04",
          "level": 3
        }
      ]
    const [label,setLabel]=useState("1")
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const filteredData = userdata.filter(user => user.level === parseInt(label));
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // const handlePageChange = (newPage) => {
    //   if (newPage >= 1 && newPage <= totalPages) {
    //     setCurrentPage(newPage);
    //  }
    // };
    const handlePageChange = (event, newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };
    useEffect(() => {
      setCurrentPage(1);
    }, [label]);
    
  return (
    <div>
        <div className='flex justify-center items-center bg-[#13B8A7] p-4 text-[15px] text-gray-700 font-semibold'> My Team</div>
        <div className=" bg-white flex flex-col items-center justify-center p-4 rounded-3xl  mt-4 shadow-lg ">
            <select name="level" id="level"
             onChange={(e) => setLabel(e.target.value)}
             className='w-full p-2 rounded-3xl bg-[#13B8A7] text-white font-semibold'>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
                <option value="6">Level 6</option>
                <option value="7">Level 7</option>
                <option value="8">Level 8</option>
                <option value="9">Level 9</option>
                <option value="10">Level 10</option>
            </select>
            <div className=' w-full mt-4'>
                <table className='w-full'>
                    <thead className='bg-[#13B8A7] text-white'>
                        <tr className='text-[15px] font-semibold'>
                            <th className='p-2'>Joining Date</th>
                            <th className='p-2'>User ID</th>
                            <th className='p-2'>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                       {currentItems.map((data, idx) => (
                          <tr key={idx} className='text-center '>
                          <td className='p-2'>{data.joiningDate}</td>
                          <td className='p-2'>{data.userId}</td>
                          <td className='p-2'>{data.mobileNumber}</td>
                          </tr>
                       ))}
                     {currentItems.length === 0 && (
                       <tr>
                         <td colSpan="3" className='p-4 text-center text-gray-500'>No users in this level.</td>
                     </tr>
                      )}
                   </tbody>
                </table>
            </div>
            {/* Pagination Controls */}
        {/* <div className='flex justify-center mt-4 gap-4'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-300 rounded-full disabled:opacity-50'
          >
            Prev
          </button>
          <span className='px-4 py-2 font-semibold'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-gray-300 rounded-full disabled:opacity-50'
          >
            Next
          </button>
        </div> */}
        <div><Pagination count={totalPages} size="small" page={currentPage} onChange={handlePageChange}/></div>
        </div>
    </div>
  )
}

export default TeamList