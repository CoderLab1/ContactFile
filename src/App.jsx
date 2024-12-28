import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [number, setNumber] = useState('');
  const [user, setUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = [...user, { name, company, number }];
    setUser(newUser);
    setName('');
    setCompany('');
    setNumber('');
  };

  const deleteHandler = (i) => {
    const copyUser = [...user];
    copyUser.splice(i, 1);
    setUser(copyUser);
  };

  return (
    <div className="bg-zinc-100 flex flex-col md:flex-row gap-4 h-screen w-full p-4">
      <form
        className="flex flex-col w-full md:w-[45vw] p-4 rounded-md bg-white shadow-lg"
        onSubmit={submitHandler}
      >
        <h1 className="font-bold text-2xl mb-4">Add Contact</h1>

        <label className="text-[10px] font-semibold mb-1">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md py-2 px-3 border-2 border-zinc-300 text-sm mb-3"
          type="text"
          placeholder="Enter name"
          required
        />

        <label className="text-[10px] font-semibold mb-1">Company</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="rounded-md py-2 px-3 border-2 border-zinc-300 text-sm mb-3"
          type="text"
          placeholder="Enter company"
          required
        />

        <label className="text-[10px] font-semibold mb-1">Phone</label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="rounded-md py-2 px-3 border-2 border-zinc-300 text-sm mb-4"
          type="text"
          placeholder="Enter phone number"
          required
        />

        <button className="py-2 px-4 bg-blue-700 text-white rounded-md font-semibold">
          Add Contact
        </button>
      </form>

      <div className="w-full md:w-[52vw] p-4 bg-white rounded-md shadow-lg overflow-y-auto">
        <h1 className="font-bold text-2xl mb-4">Contact List</h1>
        {user.length === 0 ? (
          <p className="text-gray-500">No contacts added yet.</p>
        ) : (
          user.map((e, i) => (
            <div
              key={i}
              className="relative bg-white mb-3 p-4 rounded-md shadow-md border"
            >
              <h2 className="text-lg font-semibold">{e.name}</h2>
              <p className="text-[12px]">Company: {e.company}</p>
              <p className="text-[12px]">Phone: {e.number}</p>
              <button
                onClick={() => deleteHandler(i)}
                className="absolute text-[10px] font-semibold right-2 bottom-2 py-1 px-3 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
