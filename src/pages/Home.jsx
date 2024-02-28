import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [result, setResult] = useState(null);

  const calculateCompatibility = async () => {
    const options = {
      method: "GET",
      url: "https://love-calculator.p.rapidapi.com/getPercentage",
      params: {
        sname: firstName,
        fname: secondName,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_APP_HOST_URL,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response?.data);
      setResult(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 min-h-[35rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                calculateCompatibility();
              }}
              className="bg-gray-800 shadow-md rounded-md p-6"
            >
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="secondName"
                  className="block text-sm font-medium mb-1"
                >
                  Partner's Name
                </label>
                <input
                  id="secondName"
                  name="secondName"
                  type="text"
                  required
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Partner's Name"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Calculate Compatibility
              </button>
            </form>

            {result && (
              <div className="mt-8 bg-gray-800 p-6 rounded-md shadow-md">
                <p className="text-xl font-bold text-center mb-4">
                  Result:{" "}
                  <span
                    className={`
                    ${
                      result.percentage < 50
                        ? "text-red-500"
                        : result.percentage >= 50 && result.percentage <= 80
                        ? "text-yellow-500"
                        : "text-green-500"
                    }
                  `}
                  >
                    {result.percentage}%
                  </span>
                </p>
                <p className="text-lg text-center">{result.result}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
