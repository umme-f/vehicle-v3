import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUserPlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import data from './data.json';

const VehicleManagerTableView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const loggedInUser = {
    name: 'A- san' // user name
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(row => 
    row.carName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="absolute top-0 right-0 p-4 flex items-center">
        <Link to="#">
          <FontAwesomeIcon icon={faCircleUser} className="text-4xl text-gray-700" />
        </Link>
        <span className="ml-2 mt-2">{loggedInUser.name}</span>
      </div>
      <div className="w-full md:max-w-4xl">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-l flex-grow mb-2 md:mb-0"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-blue-500 text-white mb-2 md:mb-0 md:ml-2 mr-2 pr-2"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-2" />
            Search
          </button>
          <button className="p-2 bg-orange-500 text-white rounded-r">
            <FontAwesomeIcon icon={faUserPlus} className="pr-2" />
            Add People
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full md:max-w-4xl mt-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-300 text-center">ID</th>
              <th className="py-2 px-4 border border-gray-300 text-center">Car name</th>
              <th className="py-2 px-4 border border-gray-300 text-center">Year</th>
              <th className="py-2 px-4 border border-gray-300 text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 px-4 border-r border-gray-300 text-center">
                  {row.carID}
                </td>
                <td className="py-2 px-4 border-r border-gray-300 text-center">
                  {row.carName}
                </td>
                <td className="py-2 px-4 border-r border-gray-300 text-center">
                  {row.year}
                </td>
                <td className="py-2 px-4 border-r border-gray-300 text-center">
                  {row.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleManagerTableView;
