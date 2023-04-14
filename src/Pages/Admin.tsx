import React, { useState, useEffect } from "react";
import axios from "axios";
import MyBody from "../Components/MyBody";
import { Burialmain } from "../Components/BurialMain";

const cellStyles = {
  border: "1px solid black",
  padding: "8px",
};

const Table = () => {
  const [data, setData] = useState<Burialmain[]>([]);
  const [editing, setEditing] = useState<boolean>(false);
  const [newData, setNewData] = useState<Burialmain>({
    id: 0,
    squarenorthsouth: "",
    // headdirection: "",
    // sex: "",
    // northsouth: "",
    // depth: "",
    // eastwest: "",
    // adultsubadult: "",
    // facebundles: "",
    // southtohead: "",
    // preservation: "",
    // fieldbookpage: "",
    // squareeastwest: "",
    // goods: "",
    // text: "",
    // wrapping: "",
    // haircolor: "",
    // westtohead: "",
    // samplescollected: "",
    // area: "",
    // burialid: 0,
    // length: "",
    // burialnumber: "",
    // dataexpertinitials: "",
    // westtofeet: "",
    // ageatdeath: "",
    // southtofeet: "",
    // excavationrecorder: "",
    // photos: "",
    // hair: "",
    // burialmaterials: "",
    // dateofexcavation: new Date(),
    // fieldbookexcavationyear: "",
    // clusternumber: "",
    // shaftnumber: "",
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://localhost:7183/burialmain");
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setNewData({ ...newData, [field]: e.target.value });
  };

  const handleEdit = (index: number) => {
    setEditing(true);
    setNewData(data[index]);
  };
  const handleDelete = async (index: number) => {
    const itemId = data[index].id;
    await axios.delete(`https://localhost:7183/burialmain/${itemId}`);
    setData(data.filter((_, i) => i !== index));
  };
  //   const handleDelete = async (index: number) => {
  //   const itemId = data[index].id;
  //   await axios.delete(`https://localhost:7183/burialmain/${itemId}`);
  //   setData(data.filter((_, i) => i !== index));
  //   const newPaginatedData = paginatedData.filter((_, i) => i !== (index % itemsPerPage));
  //   if (newPaginatedData.length === 0 && currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   } else {
  //     setPaginatedData(newPaginatedData);
  //   }
  // };

  const handleSave = async () => {
    if (editing && newData.id !== 0) {
      await axios.put(
        `https://localhost:7183/burialmain/${newData.id}`,
        newData
      );
      setData(data.map((item) => (item.id === newData.id ? newData : item)));
    } else {
      const result = await axios.post(
        "https://localhost:7183/burialmain/",
        newData
      );
      setData([...data, result.data]);
      // setPaginatedData([...paginatedData, result.data]);
    }
    setNewData({
      id: 0,
      squarenorthsouth: "",
      headdirection: "",
      sex: "",
      northsouth: "",
      depth: "",
      eastwest: "",
      adultsubadult: "",
      facebundles: "",
      southtohead: "",
      preservation: "",
      fieldbookpage: "",
      squareeastwest: "",
      goods: "",
      text: "",
      wrapping: "",
      haircolor: "",
      westtohead: "",
      samplescollected: "",
      area: "",
      burialid: 0,
      length: "",
      burialnumber: "",
      dataexpertinitials: "",
      westtofeet: "",
      ageatdeath: "",
      southtofeet: "",
      excavationrecorder: "",
      photos: "",
      hair: "",
      burialmaterials: "",
      dateofexcavation: new Date(),
      fieldbookexcavationyear: "",
      clusternumber: "",
      shaftnumber: "",
    });
    setEditing(false);
  };
  // Pagination handlers
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Pagination: slice the data array for the current page
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th style={cellStyles}>ID</th>
            <th style={cellStyles}>Square North South</th>
            <th style={cellStyles}>Head Direction</th>
            <th style={cellStyles}>Sex</th>
            <th style={cellStyles}>North South</th>
            <th style={cellStyles}>Depth</th>
            <th style={cellStyles}>East West</th>
            <th style={cellStyles}>Adult Subadult</th>
            <th style={cellStyles}>Face Bundles</th>
            <th style={cellStyles}>South to Head</th>
            <th style={cellStyles}>Preservation</th>
            <th style={cellStyles}>Fieldbook Page</th>
            <th style={cellStyles}>Square East West</th>
            <th style={cellStyles}>Goods</th>
            <th style={cellStyles}>Text</th>
            <th style={cellStyles}>Wrapping</th>
            <th style={cellStyles}>Hair Color</th>
            <th style={cellStyles}>West to Head</th>
            <th style={cellStyles}>Samples Collected</th>
            <th style={cellStyles}>Area</th>
            <th style={cellStyles}>Burial ID</th>
            <th style={cellStyles}>Length</th>
            <th style={cellStyles}>Burial Number</th>
            <th style={cellStyles}>Data Expert Initials</th>
            <th style={cellStyles}>West to Feet</th>
            <th style={cellStyles}>Age at Death</th>
            <th style={cellStyles}>South to Feet</th>
            <th style={cellStyles}>Excavation Recorder</th>
            <th style={cellStyles}>Photos</th>
            <th style={cellStyles}>Hair</th>
            <th style={cellStyles}>Burial Materials</th>
            <th style={cellStyles}>Date of Excavation</th>
            <th style={cellStyles}>Fieldbook Excavation Year</th>
            <th style={cellStyles}>Cluster Number</th>
            <th style={cellStyles}>Shaft Number</th>
            <th style={cellStyles}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={item.id}>
              <td style={cellStyles}>{item.id}</td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.squarenorthsouth}
                    onChange={(e) => handleInputChange(e, "squarenorthsouth")}
                  />
                ) : (
                  item.squarenorthsouth
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.headdirection}
                    onChange={(e) => handleInputChange(e, "headdirection")}
                  />
                ) : (
                  item.headdirection
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.sex}
                    onChange={(e) => handleInputChange(e, "sex")}
                  />
                ) : (
                  item.sex
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.northsouth}
                    onChange={(e) => handleInputChange(e, "northsouth")}
                  />
                ) : (
                  item.northsouth
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.depth}
                    onChange={(e) => handleInputChange(e, "depth")}
                  />
                ) : (
                  item.depth
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.eastwest}
                    onChange={(e) => handleInputChange(e, "eastwest")}
                  />
                ) : (
                  item.eastwest
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.adultsubadult}
                    onChange={(e) => handleInputChange(e, "adultsubadult")}
                  />
                ) : (
                  item.adultsubadult
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.facebundles}
                    onChange={(e) => handleInputChange(e, "facebundles")}
                  />
                ) : (
                  item.facebundles
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.southtohead}
                    onChange={(e) => handleInputChange(e, "southtohead")}
                  />
                ) : (
                  item.southtohead
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.preservation}
                    onChange={(e) => handleInputChange(e, "preservation")}
                  />
                ) : (
                  item.preservation
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.fieldbookpage}
                    onChange={(e) => handleInputChange(e, "fieldbookpage")}
                  />
                ) : (
                  item.fieldbookpage
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.squareeastwest}
                    onChange={(e) => handleInputChange(e, "squareeastwest")}
                  />
                ) : (
                  item.squareeastwest
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.goods}
                    onChange={(e) => handleInputChange(e, "goods")}
                  />
                ) : (
                  item.goods
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.text}
                    onChange={(e) => handleInputChange(e, "text")}
                  />
                ) : (
                  item.text
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.wrapping}
                    onChange={(e) => handleInputChange(e, "wrapping")}
                  />
                ) : (
                  item.wrapping
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.haircolor}
                    onChange={(e) => handleInputChange(e, "haircolor")}
                  />
                ) : (
                  item.haircolor
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.westtohead}
                    onChange={(e) => handleInputChange(e, "westtohead")}
                  />
                ) : (
                  item.westtohead
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.samplescollected}
                    onChange={(e) => handleInputChange(e, "samplescollected")}
                  />
                ) : (
                  item.samplescollected
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.area}
                    onChange={(e) => handleInputChange(e, "area")}
                  />
                ) : (
                  item.area
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="number"
                    value={newData.burialid}
                    onChange={(e) => handleInputChange(e, "burialid")}
                  />
                ) : (
                  item.burialid
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.length}
                    onChange={(e) => handleInputChange(e, "length")}
                  />
                ) : (
                  item.length
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.burialnumber}
                    onChange={(e) => handleInputChange(e, "burialnumber")}
                  />
                ) : (
                  item.burialnumber
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.dataexpertinitials}
                    onChange={(e) => handleInputChange(e, "dataexpertinitials")}
                  />
                ) : (
                  item.dataexpertinitials
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.westtofeet}
                    onChange={(e) => handleInputChange(e, "westtofeet")}
                  />
                ) : (
                  item.westtofeet
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.ageatdeath}
                    onChange={(e) => handleInputChange(e, "ageatdeath")}
                  />
                ) : (
                  item.ageatdeath
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.southtofeet}
                    onChange={(e) => handleInputChange(e, "southtofeet")}
                  />
                ) : (
                  item.southtofeet
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.excavationrecorder}
                    onChange={(e) => handleInputChange(e, "excavationrecorder")}
                  />
                ) : (
                  item.excavationrecorder
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.photos}
                    onChange={(e) => handleInputChange(e, "photos")}
                  />
                ) : (
                  item.photos
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.hair}
                    onChange={(e) => handleInputChange(e, "hair")}
                  />
                ) : (
                  item.hair
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.burialmaterials}
                    onChange={(e) => handleInputChange(e, "burialmaterials")}
                  />
                ) : (
                  item.burialmaterials
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="date"
                    value={
                      newData.dateofexcavation
                        ? newData.dateofexcavation.toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => handleInputChange(e, "dateofexcavation")}
                  />
                ) : item.dateofexcavation ? (
                  item.dateofexcavation.toDateString()
                ) : (
                  ""
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.fieldbookexcavationyear}
                    onChange={(e) =>
                      handleInputChange(e, "fieldbookexcavationyear")
                    }
                  />
                ) : (
                  item.fieldbookexcavationyear
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.clusternumber}
                    onChange={(e) => handleInputChange(e, "clusternumber")}
                  />
                ) : (
                  item.clusternumber
                )}
              </td>
              <td style={cellStyles}>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.shaftnumber}
                    onChange={(e) => handleInputChange(e, "shaftnumber")}
                  />
                ) : (
                  item.shaftnumber
                )}
              </td>

              <td>
                {editing && newData.id === item.id ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>
          {editing ? (
            <p>Editing row {newData.id}</p>
          ) : (
            <button onClick={() => setEditing(true)}>Add Row</button>
          )}
          {/* new row input fields */}
          {editing && (
            <div>
              <input
                type="number"
                placeholder="id"
                value={newData.id}
                onChange={(e) => handleInputChange(e, "id")}
              />
              <input
                type="text"
                placeholder="squarenorthsouth"
                value={newData.squarenorthsouth}
                onChange={(e) => handleInputChange(e, "squarenorthsouth")}
              />
              <input
                type="text"
                placeholder="headdirection"
                value={newData.headdirection}
                onChange={(e) => handleInputChange(e, "headdirection")}
              />
              <input
                type="text"
                placeholder="sex"
                value={newData.sex}
                onChange={(e) => handleInputChange(e, "sex")}
              />
              <input
                type="text"
                placeholder="northsouth"
                value={newData.northsouth}
                onChange={(e) => handleInputChange(e, "northsouth")}
              />
              <input
                type="text"
                placeholder="depth"
                value={newData.depth}
                onChange={(e) => handleInputChange(e, "depth")}
              />
              <input
                type="text"
                placeholder="eastwest"
                value={newData.eastwest}
                onChange={(e) => handleInputChange(e, "eastwest")}
              />
              <input
                type="text"
                placeholder="facebundles"
                value={newData.facebundles}
                onChange={(e) => handleInputChange(e, "facebundles")}
              />
              <input
                type="text"
                placeholder="southtohead"
                value={newData.southtohead}
                onChange={(e) => handleInputChange(e, "southtohead")}
              />
              <input
                type="text"
                placeholder="preservation"
                value={newData.preservation}
                onChange={(e) => handleInputChange(e, "preservation")}
              />
              <input
                type="text"
                placeholder="fieldbookpage"
                value={newData.fieldbookpage}
                onChange={(e) => handleInputChange(e, "fieldbookpage")}
              />
              <input
                type="text"
                placeholder="squareeastwest"
                value={newData.squareeastwest}
                onChange={(e) => handleInputChange(e, "squareeastwest")}
              />
              <input
                type="text"
                placeholder="goods"
                value={newData.goods}
                onChange={(e) => handleInputChange(e, "goods")}
              />
              <input
                type="text"
                placeholder="text"
                value={newData.text}
                onChange={(e) => handleInputChange(e, "text")}
              />
              <input
                type="text"
                placeholder="wrapping"
                value={newData.wrapping}
                onChange={(e) => handleInputChange(e, "wrapping")}
              />
              <input
                type="text"
                placeholder="haircolor"
                value={newData.haircolor}
                onChange={(e) => handleInputChange(e, "haircolor")}
              />
              <input
                type="text"
                placeholder="westtohead"
                value={newData.westtohead}
                onChange={(e) => handleInputChange(e, "westtohead")}
              />
              <input
                type="text"
                placeholder="samplescollected"
                value={newData.samplescollected}
                onChange={(e) => handleInputChange(e, "samplescollected")}
              />
              <input
                type="text"
                placeholder="area"
                value={newData.area}
                onChange={(e) => handleInputChange(e, "area")}
              />
              <input
                type="number"
                placeholder="burialid"
                value={newData.burialid}
                onChange={(e) => handleInputChange(e, "burialid")}
              />
              <input
                type="text"
                placeholder="burialnumber"
                value={newData.burialnumber}
                onChange={(e) => handleInputChange(e, "burialnumber")}
              />
              <input
                type="text"
                placeholder="dataexpertinitials"
                value={newData.dataexpertinitials}
                onChange={(e) => handleInputChange(e, "dataexpertinitials")}
              />
              <input
                type="text"
                placeholder="westtofeet"
                value={newData.westtofeet}
                onChange={(e) => handleInputChange(e, "westtofeet")}
              />
              <input
                type="text"
                placeholder="ageatdeath"
                value={newData.ageatdeath}
                onChange={(e) => handleInputChange(e, "ageatdeath")}
              />
              <input
                type="text"
                placeholder="southtofeet"
                value={newData.southtofeet}
                onChange={(e) => handleInputChange(e, "southtofeet")}
              />
              <input
                type="text"
                placeholder="excavationrecorder"
                value={newData.excavationrecorder}
                onChange={(e) => handleInputChange(e, "excavationrecorder")}
              />
              <input
                type="text"
                placeholder="photos"
                value={newData.photos}
                onChange={(e) => handleInputChange(e, "photos")}
              />
              <input
                type="text"
                placeholder="hair"
                value={newData.hair}
                onChange={(e) => handleInputChange(e, "hair")}
              />
              <input
                type="text"
                placeholder="burialmaterials"
                value={newData.burialmaterials}
                onChange={(e) => handleInputChange(e, "burialmaterials")}
              />
              <input
                type="text"
                placeholder="sex"
                value={newData.sex}
                onChange={(e) => handleInputChange(e, "sex")}
              />
              <input
                type="date"
                placeholder="dateofexcavation"
                value={
                  newData.dateofexcavation?.toISOString().substr(0, 10) ?? ""
                }
                onChange={(e) => handleInputChange(e, "dateofexcavation")}
              />

              <input
                type="text"
                placeholder="fieldbookexcavationyear"
                value={newData.fieldbookexcavationyear}
                onChange={(e) =>
                  handleInputChange(e, "fieldbookexcavationyear")
                }
              />
              <input
                type="text"
                placeholder="clusternumber"
                value={newData.clusternumber}
                onChange={(e) => handleInputChange(e, "clusternumber")}
              />
              <input
                type="text"
                placeholder="shaftnumber"
                value={newData.shaftnumber}
                onChange={(e) => handleInputChange(e, "shaftnumber")}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </div>
          )}
        </div>
      </div>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
