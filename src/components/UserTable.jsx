import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { fetchUsers } from "../services/api";
import { FaChevronUp, FaChevronDown, FaFilter, FaSearch } from "react-icons/fa";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [city, setCity] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCityFilter, setShowCityFilter] = useState(false);
  const [showEmailSearch, setShowEmailSearch] = useState(false);
  const [rowsToShow, setRowsToShow] = useState(4);
  const filterRef = useRef(null);
  const searchRef = useRef(null);
  const searchEmailRef = useRef(null);
  const tableBodyRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load users");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowCityFilter(false);
      }
    };

    if (showCityFilter) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showCityFilter]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchEmailRef.current && !searchEmailRef.current.contains(event.target)) {
        setShowEmailSearch(false);
      }
    };

    if (showEmailSearch) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showEmailSearch]);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    
    const element = scrollContainerRef.current;
    // Load more when within 100px of bottom
    if (element.scrollHeight - element.scrollTop <= element.clientHeight + 100) {
      setRowsToShow((prev) => prev + 4);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Reset rows to show when filters change
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRowsToShow(4);
  }, [search, city, sortOrder]);

  const tableKey = `${search}-${city}-${sortOrder}`;

  const cityOptions = useMemo(() => {
    const cities = Array.from(new Set(users.map((user) => user.address.city)));
    return ["All", ...cities].sort();
  }, [users]);

  const filteredUsers = useMemo(() => {
    return users
      .filter((user) => {
        const query = search.toLowerCase().trim();
        const matchesSearch =
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query);

        const matchesCity = city === "All" || user.address.city === city;

        return matchesSearch && matchesCity;
      })
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        }
        return b.name.localeCompare(a.name);
      });
  }, [users, search, city, sortOrder]);

  return (
    <div className="bg-white p-2 rounded-2xl shadow h-full flex flex-col">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-bold text-lg pl-2 pt-2">Top Products</h3>
        </div>
      </div>

      <div className=" flex-1 overflow-hidden">
        {loading ? (
          <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500">
            Loading users...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
            <p>Unable to load users.</p>
            <p>{error}</p>
          </div>
        ) : (
          <div ref={scrollContainerRef} key={tableKey} className="overflow-y-auto overflow-x-visible" style={{ maxHeight: 220 }}>
            <table className="w-full border-collapse text-left text-sm">
              <thead className="sticky top-0 z-10 bg-white">
                <tr className="text-slate-300 text-xs border-b border-slate-200">
                  <th className="px-4 py-3 font-medium bg-white">#</th>
                  <th className="px-4 py-3 font-medium flex items-center justify-between relative bg-white">
                    Name
                    <div className="flex items-center gap-2 ml-2">
                      <div className="flex flex-col">
                        <FaChevronUp
                          onClick={() => setSortOrder("asc")}
                          className="cursor-pointer text-slate-400 hover:text-slate-600"
                          title="Sort A-Z"
                        />
                        <FaChevronDown
                          onClick={() => setSortOrder("desc")}
                          className="cursor-pointer text-slate-400 hover:text-slate-600"
                          title="Sort Z-A"
                        />
                      </div>
                      <FaSearch
                        onClick={() => setShowSearch(!showSearch)}
                        className="cursor-pointer text-slate-400 hover:text-slate-600"
                        title="Search"
                      />
                    </div>
                    {showSearch && (
                      <div
                        ref={searchRef}
                        className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded shadow-lg z-20 w-72 p-4"
                      >
                        <input
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                          placeholder="Search by name"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400 mb-3"
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              setSearch(searchInput);
                              setShowSearch(false);
                            }
                          }}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSearch(searchInput);
                              setShowSearch(false);
                            }}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-2 px-3 rounded"
                          >
                            Search
                          </button>
                          <button
                            onClick={() => {
                              setSearchInput("");
                              setSearch("");
                              setShowSearch(false);
                            }}
                            className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold py-2 px-3 rounded"
                          >
                            Reset
                          </button>
                          <button
                            onClick={() => {
                              setShowSearch(false);
                            }}
                            className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold py-2 px-3 rounded"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </th>
                  <th className="px-4 py-3 font-medium relative bg-white">
                    <div className="flex items-center justify-between">
                      Email
                      <FaSearch
                        onClick={() => setShowEmailSearch(!showEmailSearch)}
                        className="cursor-pointer text-slate-400 hover:text-slate-600 ml-2"
                        title="Search"
                      />
                    </div>
                    {showEmailSearch && (
                      <div
                        ref={searchEmailRef}
                        className="absolute top-full right-0 mt-1 bg-white border border-slate-200 rounded shadow-lg z-20 w-72 p-4"
                      >
                        <input
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                          placeholder="Search by email"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400 mb-3"
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              setSearch(searchInput);
                              setShowEmailSearch(false);
                            }
                          }}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSearch(searchInput);
                              setShowEmailSearch(false);
                            }}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-2 px-3 rounded"
                          >
                            Search
                          </button>
                          <button
                            onClick={() => {
                              setSearchInput("");
                              setSearch("");
                              setShowEmailSearch(false);
                            }}
                            className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold py-2 px-3 rounded"
                          >
                            Reset
                          </button>
                          <button
                            onClick={() => {
                              setShowEmailSearch(false);
                            }}
                            className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold py-2 px-3 rounded"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </th>
                  <th className="px-4 py-3 font-medium bg-white">Company Name</th>
                  <th className="px-4 py-3 font-medium relative bg-white" ref={filterRef}>
                    <div className="flex items-center justify-between">
                      City
                      <FaFilter
                        onClick={() => setShowCityFilter(!showCityFilter)}
                        className="cursor-pointer text-slate-400 hover:text-slate-600 ml-2"
                        title="Filter by City"
                      />
                    </div>
                    {showCityFilter && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded shadow-lg z-10 min-w-30">
                        {cityOptions.map((option) => (
                          <div
                            key={option}
                            onClick={() => {
                              setCity(option);
                              setShowCityFilter(false);
                            }}
                            className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody ref={tableBodyRef}>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-2 text-center text-slate-500">
                      No users match your search. Please try again.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.slice(0, rowsToShow).map((user, index) => (
                    <tr key={user.id} className="border-b font-normal text-xs truncate border-slate-200 last:border-0 hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-500">{index + 1}</td>
                      <td className="px-4 py-3 text-slate-500">{user.name}</td>
                      <td className="px-4 py-3 text-slate-500">{user.email}</td>
                      <td className="px-4 py-3 text-slate-500">{user.company.name}</td>
                      <td className="px-4 py-3 text-slate-500">{user.address.city}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;
