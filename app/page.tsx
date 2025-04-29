"use client";

import { useEffect, useState } from "react";
import { cuisineColors } from "../utils/colors";

type Bakery = {
  cuisine: string;
  name: string;
  neighborhood: string;
  address: string;
  start5k: string;
  start10k: string;
};

export default function Home() {
  const bakeries: Bakery[] = [
    // French
    { cuisine: "French", name: "Dominique Ansel Bakery", neighborhood: "SoHo", address: "189 Spring St, New York, NY 10012", start5k: "Bryant Park", start10k: "Columbus Circle" },
    { cuisine: "French", name: "Bien Cuit", neighborhood: "Crown Heights, Brooklyn", address: "120 Smith St, Brooklyn, NY 11201", start5k: "Brooklyn Bridge Park", start10k: "Prospect Park" },
    { cuisine: "French", name: "Cannelle Patisserie", neighborhood: "Jackson Heights, Queens", address: "75-59 31st Ave, East Elmhurst, NY 11370", start5k: "Roosevelt Island Tramway", start10k: "Gantry Plaza State Park" },
    { cuisine: "French", name: "Petit Chou", neighborhood: "East Village", address: "254 E 10th St, New York, NY 10009", start5k: "Tompkins Square Park", start10k: "Union Square" },
    { cuisine: "French", name: "Bread Story", neighborhood: "Stuyvesant Town", address: "479 2nd Ave, New York, NY 10016", start5k: "Stuyvesant Square", start10k: "Madison Square Park" },
  
    // American
    { cuisine: "American", name: "Levain Bakery", neighborhood: "Upper West Side", address: "351 Amsterdam Ave, New York, NY 10024", start5k: "Columbus Circle", start10k: "Riverside Park" },
    { cuisine: "American", name: "Sweet Chef Southern Style Bakery", neighborhood: "Harlem", address: "122 Lenox Ave, New York, NY 10026", start5k: "Central Park North Entrance", start10k: "Morningside Park" },
    { cuisine: "American", name: "Lady M Cake Boutique", neighborhood: "Upper East Side", address: "41 E 78th St, New York, NY 10075", start5k: "Grand Central Terminal", start10k: "Carl Schurz Park" },
    { cuisine: "American", name: "C&B Cafe", neighborhood: "East Village", address: "178 E 7th St, New York, NY 10009", start5k: "Tompkins Square Park", start10k: "Washington Square Park" },
    { cuisine: "American", name: "Mud Coffee", neighborhood: "East Village", address: "307 E 9th St, New York, NY 10003", start5k: "Astor Place", start10k: "Union Square" },
  
    // Mexican
    { cuisine: "Mexican", name: "Ánimo", neighborhood: "Midtown East", address: "245 E 44th St, New York, NY 10017", start5k: "Union Square", start10k: "Madison Square Park" },
    { cuisine: "Mexican", name: "Masa Madre Artisanal Bakery", neighborhood: "Woodside, Queens", address: "5015 Skillman Ave, Woodside, NY 11377", start5k: "Queensboro Plaza", start10k: "Astoria Park" },
    { cuisine: "Mexican", name: "Guadalupana Bakery", neighborhood: "Bushwick, Brooklyn", address: "308 Starr St, Brooklyn, NY 11237", start5k: "Williamsburg Bridge Entrance", start10k: "McCarren Park" },
    { cuisine: "Mexican", name: "Las Conchitas Bakery", neighborhood: "Washington Heights", address: "1750 St Nicholas Ave, New York, NY 10032", start5k: "Fort Tryon Park", start10k: "Inwood Hill Park" },
    { cuisine: "Mexican", name: "Panaderia Mi México", neighborhood: "Sunset Park, Brooklyn", address: "4923 4th Ave, Brooklyn, NY 11220", start5k: "Sunset Park", start10k: "Owl's Head Park" },
  
    // Ethiopian
    { cuisine: "Ethiopian", name: "Massawa", neighborhood: "Morningside Heights", address: "1239 Amsterdam Ave, New York, NY 10027", start5k: "Columbia University Main Gate", start10k: "Riverside Park" },
    { cuisine: "Ethiopian", name: "Awash Ethiopian Restaurant", neighborhood: "Manhattan Valley", address: "947 Amsterdam Ave, New York, NY 10025", start5k: "Cathedral Parkway", start10k: "Morningside Park" },
    { cuisine: "Ethiopian", name: "Bunna Cafe", neighborhood: "East Williamsburg, Brooklyn", address: "1084 Flushing Ave, Brooklyn, NY 11237", start5k: "McCarren Park", start10k: "Maria Hernandez Park" },
    { cuisine: "Ethiopian", name: "Bersi Ethiopian Restaurant", neighborhood: "Greenpoint, Brooklyn", address: "568 Manhattan Ave, Brooklyn, NY 11222", start5k: "McCarren Park", start10k: "Transmitter Park" },
    { cuisine: "Ethiopian", name: "Haile Bistro", neighborhood: "East Village", address: "182 Avenue B, New York, NY 10009", start5k: "Tompkins Square Park", start10k: "Union Square" },
  
    // Chinese
    { cuisine: "Chinese", name: "Tai Pan Bakery", neighborhood: "Chinatown", address: "194 Canal St, New York, NY 10013", start5k: "Washington Square Park", start10k: "Columbus Park" },
    { cuisine: "Chinese", name: "Fay Da Bakery", neighborhood: "Chinatown", address: "191 Centre St, New York, NY 10013", start5k: "City Hall Park", start10k: "Foley Square" },
    { cuisine: "Chinese", name: "Mei Lai Wah Bakery", neighborhood: "Chinatown", address: "64 Bayard St, New York, NY 10013", start5k: "Foley Square", start10k: "Columbus Park" },
    { cuisine: "Chinese", name: "M&W Bakery", neighborhood: "Chinatown", address: "48 Bowery, New York, NY 10013", start5k: "East Broadway", start10k: "Seward Park" },
    { cuisine: "Chinese", name: "Xin Fa Bakery", neighborhood: "Sunset Park, Brooklyn", address: "5516 8th Ave, Brooklyn, NY 11220", start5k: "Sunset Park", start10k: "Owl's Head Park" },
  
    // Italian
    { cuisine: "Italian", name: "Ferrara Bakery & Cafe", neighborhood: "Little Italy", address: "195 Grand St, New York, NY 10013", start5k: "Union Square", start10k: "Washington Square Park" },
    { cuisine: "Italian", name: "Veniero's Pasticceria", neighborhood: "East Village", address: "342 E 11th St, New York, NY 10003", start5k: "Tompkins Square Park", start10k: "Union Square" },
    { cuisine: "Italian", name: "Fortunato Brothers", neighborhood: "Williamsburg, Brooklyn", address: "289 Manhattan Ave, Brooklyn, NY 11211", start5k: "McCarren Park", start10k: "Domino Park" },
    { cuisine: "Italian", name: "Circo's Pastry Shop", neighborhood: "Bushwick, Brooklyn", address: "312 Knickerbocker Ave, Brooklyn, NY 11237", start5k: "Maria Hernandez Park", start10k: "Irving Square Park" },
    { cuisine: "Italian", name: "Madonia Bakery", neighborhood: "Belmont, Bronx", address: "2348 Arthur Ave, Bronx, NY 10458", start5k: "Bronx Zoo Entrance", start10k: "Fordham University" },
  
    // Indian
    { cuisine: "Indian", name: "Maharaja Sweets", neighborhood: "Jackson Heights, Queens", address: "7310 37th Rd, Queens, NY 11372", start5k: "Roosevelt Ave & 74th St", start10k: "Travers Park" },
    { cuisine: "Indian", name: "Knead Some Love NY", neighborhood: "East Village", address: "187 E 3rd St, New York, NY 10009", start5k: "Tompkins Square Park", start10k: "Union Square" },
    { cuisine: "Indian", name: "Sweet Kneads by Ridhima", neighborhood: "Midtown Manhattan", address: "11 W 30th St, New York, NY 10001", start5k: "Bryant Park", start10k: "Madison Square Park" },
    { cuisine: "Indian", name: "Kailash Parbat", neighborhood: "Murray Hill", address: "99 Lexington Ave, New York, NY 10016", start5k: "Madison Square Park", start10k: "Bryant Park" },
    { cuisine: "Indian", name: "Masseria Caffé & Bakery", neighborhood: "Midtown East", address: "891 2nd Ave, New York, NY 10017", start5k: "Grand Central Terminal", start10k: "Bryant Park" },
  
    // Japanese
    { cuisine: "Japanese", name: "Takahachi Bakery", neighborhood: "Tribeca", address: "25 Murray St, New York, NY 10007", start5k: "City Hall Park", start10k: "Washington Market Park" },
    { cuisine: "Japanese", name: "Patisserie Tomoko", neighborhood: "Williamsburg, Brooklyn", address: "568 Union Ave, Brooklyn, NY 11211", start5k: "McCarren Park", start10k: "Domino Park" },
    { cuisine: "Japanese", name: "HARBS", neighborhood: "Upper East Side", address: "1374 3rd Ave, New York, NY 10075", start5k: "Central Park Zoo Entrance", start10k: "Carl Schurz Park" },
    { cuisine: "Japanese", name: "Burrow", neighborhood: "Financial District", address: "68 Jay St, Brooklyn, NY 11201", start5k: "Brooklyn Bridge Park", start10k: "Cadman Plaza Park" },
    { cuisine: "Japanese", name: "I'm Donut", neighborhood: "Times Square", address: "231 W 47th St, New York, NY 10036", start5k: "Bryant Park", start10k: "Central Park South" },
  
    // Korean
    { cuisine: "Korean", name: "Lysée", neighborhood: "Flatiron District", address: "44 E 21st St, New York, NY 10010", start5k: "Madison Square Park", start10k: "Union Square" },
    { cuisine: "Korean", name: "Tous Les Jours", neighborhood: "Koreatown", address: "31 W 32nd St, New York, NY 10001", start5k: "Herald Square", start10k: "Bryant Park" },
    { cuisine: "Korean", name: "Paris Baguette", neighborhood: "Midtown Manhattan", address: "6 W 32nd St, New York, NY 10001", start5k: "Bryant Park", start10k: "Madison Square Park" },
    { cuisine: "Korean", name: "Little Grace Bakery", neighborhood: "Flushing, Queens", address: "42-38 162nd St, Queens, NY 11358", start5k: "Flushing Meadows Corona Park", start10k: "Kissena Park" },
    { cuisine: "Korean", name: "Croffle House", neighborhood: "Bayside, Queens", address: "208-13 26th Ave, Queens, NY 11360", start5k: "Alley Pond Park", start10k: "Cunningham Park" },
  
    // Middle Eastern
    { cuisine: "Middle Eastern", name: "Librae Bakery", neighborhood: "West Village", address: "35 King St, New York, NY 10014", start5k: "Washington Square Park", start10k: "Hudson River Park" },
    { cuisine: "Middle Eastern", name: "Damascus Bread & Pastry Shop", neighborhood: "Brooklyn Heights", address: "195 Atlantic Ave, Brooklyn, NY 11201", start5k: "Cadman Plaza Park", start10k: "Brooklyn Bridge Park" },
    { cuisine: "Middle Eastern", name: "Al-Sham Sweets", neighborhood: "Bay Ridge, Brooklyn", address: "7110 5th Ave, Brooklyn, NY 11209", start5k: "Owl's Head Park", start10k: "Shore Road Park" },
    { cuisine: "Middle Eastern", name: "Antepli Baklava", neighborhood: "Sheepshead Bay, Brooklyn", address: "1633 Sheepshead Bay Rd, Brooklyn, NY 11235", start5k: "Sheepshead Bay Park", start10k: "Marine Park" },
    { cuisine: "Middle Eastern", name: "Safir Bakery & Cafe", neighborhood: "Midwood, Brooklyn", address: "1906 Coney Island Ave, Brooklyn, NY 11230", start5k: "Prospect Park", start10k: "Marine Park" },
  
    // Caribbean
    { cuisine: "Caribbean", name: "Allan's Bakery", neighborhood: "Prospect Heights, Brooklyn", address: "1109 Nostrand Ave, Brooklyn, NY 11225", start5k: "Grand Army Plaza", start10k: "Prospect Park" },
    { cuisine: "Caribbean", name: "Errol's Caribbean Bakery", neighborhood: "Flatbush, Brooklyn", address: "661 Flatbush Ave, Brooklyn, NY 11225", start5k: "Prospect Park", start10k: "Wingate Park" },
    { cuisine: "Caribbean", name: "Paul's Caribbean Bakery", neighborhood: "Crown Heights, Brooklyn", address: "738 Nostrand Ave, Brooklyn, NY 11216", start5k: "Brooklyn Museum", start10k: "Brower Park" },
    { cuisine: "Caribbean", name: "Kingston Tropical Bakery", neighborhood: "Wakefield, Bronx", address: "4000 White Plains Rd, Bronx, NY 10466", start5k: "Van Cortlandt Park", start10k: "Woodlawn Cemetery" },
    { cuisine: "Caribbean", name: "Pitkin Caribbean Bakery", neighborhood: "Brownsville, Brooklyn", address: "1655 Pitkin Ave, Brooklyn, NY 11212", start5k: "Betsy Head Park", start10k: "Lincoln Terrace Park" },
  
    // Eastern European
    { cuisine: "Eastern European", name: "Veselka", neighborhood: "East Village", address: "144 2nd Ave, New York, NY 10003", start5k: "Tompkins Square Park", start10k: "Union Square" },
    { cuisine: "Eastern European", name: "Andre's Hungarian Bakery", neighborhood: "Forest Hills, Queens", address: "100-28 Queens Blvd, Queens, NY 11375", start5k: "Forest Park", start10k: "Flushing Meadows Corona Park" },
    { cuisine: "Eastern European", name: "Nita's European Bakery", neighborhood: "Sunnyside, Queens", address: "41-16 Greenpoint Ave, Sunnyside, NY 11104", start5k: "Sunnyside Gardens Park", start10k: "Windmuller Park" },
    { cuisine: "Eastern European", name: "Old German Bakery", neighborhood: "Ridgewood, Queens", address: "65-60 Fresh Pond Rd, Queens, NY 11385", start5k: "Grover Cleveland Park", start10k: "Forest Park" },
    { cuisine: "Eastern European", name: "Michaeli Bakery", neighborhood: "Lower East Side", address: "115A Division St, New York, NY 10002", start5k: "Seward Park", start10k: "East River Park" },
  ];

  const [visited, setVisited] = useState<string[]>([]);
  const [expandedCuisine, setExpandedCuisine] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("visitedBakeries");
    if (stored) setVisited(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("visitedBakeries", JSON.stringify(visited));
  }, [visited]);

  const toggleVisited = (name: string) => {
    setVisited(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const toggleCuisine = (cuisine: string) => {
    setExpandedCuisine(prev => (prev === cuisine ? null : cuisine));
  };

  const total = bakeries.length;
  const completed = visited.length;
  const percent = Math.round((completed / total) * 100);

  const grouped = bakeries.reduce((acc, bakery) => {
    if (!acc[bakery.cuisine]) acc[bakery.cuisine] = [];
    acc[bakery.cuisine].push(bakery);
    return acc;
  }, {} as { [cuisine: string]: Bakery[] });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-orange-600">Bread Run NYC</h1>
      <p className="text-sm text-gray-600 mb-4">
        {completed} of {total} bakeries visited ({percent}%)
      </p>
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      {Object.entries(grouped).map(([cuisine, items]) => (
        <div key={cuisine} className="mb-6">
          <button
            onClick={() => toggleCuisine(cuisine)}
            className="w-full flex justify-between items-center py-2 border-b border-gray-300"
          >
            <span className="text-xl font-semibold" style={{ color: cuisineColors[cuisine] || "#000" }}>
              {cuisine}
            </span>
            <span className="text-gray-500 text-sm">
              {expandedCuisine === cuisine ? "−" : "+"}
            </span>
          </button>

          {expandedCuisine === cuisine && (
            <ul className="mt-2 space-y-4">
              {items.map((bakery, idx) => {
                const isVisited = visited.includes(bakery.name);
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <button
                      onClick={() => toggleVisited(bakery.name)}
                      className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                        isVisited ? "border-orange-500 bg-orange-500 text-white" : "border-gray-400"
                      }`}
                    >
                      {isVisited ? "✓" : ""}
                    </button>
                    <div>
                      <p className="font-medium">{bakery.name}</p>
                      <p className="text-sm text-gray-600">{bakery.neighborhood}</p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(bakery.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-sm"
                      >
                        {bakery.address}
                      </a>
                      <p className="text-xs text-gray-500 mt-1">
                        5K: {bakery.start5k} • 10K: {bakery.start10k}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}