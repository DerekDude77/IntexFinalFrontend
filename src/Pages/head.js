import React, { useState } from 'react';
import '../mumhead.css';
import axios from 'axios';

function MumHead() {
    const url = "https://localhost:7183/score";
    const [depth, setDepth] = useState(0);
    const [samplesT, setSamplesT] = useState(0);
    const [samplesF, setSamplesF] = useState(0);
    const [area_NW, setAreaNW] = useState(0);
    const [area_NNW, setAreaNNW] = useState(0);
    const [area_NE, setAreaNE] = useState(0);
    const [area_SE, setAreaSE] = useState(0);
    const [area_SW, setAreaSW] = useState(0);
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState("");

    function axiosRequest() {
        const wrappingBody = {
        depth: parseFloat(depth),
        samplescollected_True: samplesT ? 1.0 : 0.0,
        samplescollected_False: samplesF ? 1.0 : 0.0,
        area_NE: area_NE ? 1.0 : 0.0,
        area_NW: area_NW ? 1.0 : 0.0,
        area_NNW: area_NNW ? 1.0 : 0.0,
        area_SE: area_SE ? 1.0 : 0.0,
        area_SW: area_SW ? 1.0 : 0.0,
        };

        console.log(wrappingBody)
        axios
        .post(url, wrappingBody)
        .then((res) => setData(res.data.predictedValue));

        console.log(data)
        setDisplay(!display);
        // //axios.post(`${url}addticket`, obj).then(() => console.log(‘Ticket added’));
    }

    return (
        <div class="container">
            <div>
                <h1>Predict The Head Direction</h1>
                <div class="input-group">
                <label for="depth">Depth:</label>
                <input
                type="text"
                id="depth"
                class="form-control"
                placeholder="0-3"
                onKeyUp={(e) => {
                    setDepth(e.target.value);
                    } } />
                </div>

                <div class="input-group">
                <label for="samples">Samples:</label>
                    <div class="checkbox-group">
                    <input
                        type="checkbox"
                        id="samplesT"
                        checked={samplesT}
                        onChange={(e) => {
                        setSamplesT(e.target.checked);
                        }}
                    />
                    <label for="samplesT">T</label>
                    <input
                        type="checkbox"
                        id="samplesF"
                        checked={samplesF}
                        onChange={(e) => {
                        setSamplesF(e.target.checked);
                        }}
                        />
                    <label for="samplesF">F</label>
                    </div>
                </div>
                <div class="input-group">
                <label for="area">Area:</label>
                <div class="checkbox-group">
                    <input
                        type="checkbox"
                        id="area_NW"
                        checked={area_NW}
                        onChange={(e) => {
                        setAreaNW(e.target.checked);
                        }}
                    />
                <label for="area_NW">NW</label>
                    <input
                        type="checkbox"
                        id="area_NNW"
                        checked={area_NNW}
                        onChange={(e) => {
                        setAreaNNW(e.target.checked);
                        }}
                    />
                <label for="area_NNW">NNW</label>
                    <input
                        type="checkbox"
                        id="area_NE"
                        checked={area_NE}
                        onChange={(e) => {
                        setAreaNE(e.target.checked);
                        }}
                    />
                <label for="area_NE">NE</label>
                    <input
                        type="checkbox"
                        id="area_SE"
                        checked={area_SE}
                        onChange={(e) => {
                        setAreaSE(e.target.checked);
                        }}
                    />
                <label for="area_SE">SE</label>
                    <input
                        type="checkbox"
                        id="area_SW"
                        checked={area_SW}
                        onChange={(e) => {
                        setAreaSW(e.target.checked);
                        }}
                    />
                <label for="area_SW">SW</label>
            </div>
</div>

            </div>

            <button
                type='button'
                class="button"
                onClick={() => axiosRequest()}>Enter</button>

            <div
                  style={{ display: display ? "block" : "none" }}
                  className="card rounded-3 mt-3"
                >
                  <h3 class="mb-4 mt-4">
                    Prediction:{" "}
                    {data === "E"
                      ? "East"
                      : data === "W"
                      ? "West"
                      : data === "s"
                      ? "South"
                      : data === "n"
                      ? "North"
                      : "Unknown"}
                  </h3>
                  <button
                    onClick={() => window.location.reload()}
                    type="button"
                    class="button"
                  >
                    Reset
                  </button>
            </div>
            </div>
    );
}

export default MumHead;