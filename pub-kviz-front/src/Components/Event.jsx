import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import slika1 from "../slike/event.jpg";
import slika2 from "../slike/check.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
function Event({ data, inPrijave, teams, setUcitaniDogadjaji }) {
  const [selectedTeam, setSelectedTeam] = useState("");

  let data1 = new FormData();
  const datumOdrzavanja = new Date(data.datumOdrzavanja);
  let config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/add_team_event",
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
    data: data1,
  };

  const handleTeamChange = (team) => {
    const selectedTeamValue = team.target.value;
    setSelectedTeam(selectedTeamValue);
  };

  function prijavaTima() {
    const selectedTeamValue = document.querySelector(".btnsSub select").value;
    console.log("Selektovani tim:", selectedTeamValue);
    const selectedTeam = teams.find(
      (team) => team.nazivTima === selectedTeamValue
    );
    data1.append("IDTim", selectedTeam.timID);
    data1.append("IDDogadjaj", data.dogadjajID);
    data1.append("brojPoena", 0);
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        alert("Greska: već ste prijavljeni na dati dogadjaj");
      });
  }
  let config1 = {
    method: "delete",
    url: "http://127.0.0.1:8000/api/delete_team_event/" + data.timDogadjajID,
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };

  function obrisiPrijavljenDogadjaj() {
    axios
      .request(config1)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUcitaniDogadjaji(0);
      })
      .catch((error) => {
        console.log(error);
        alert("Greska");
      });
  }

  // let config2 = {
  //   method: "get",
  //   url: "http://127.0.0.1:8000/api/team_event/results/" + data.dogadjajID,
  // };

  function preuzmiRezultate() {
    axios
      .get("http://127.0.0.1:8000/api/team_event/results/" + data.dogadjajID, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      })
      .catch((error) => {
        console.error(error);
        alert("Greška prilikom preuzimanja PDF-a");
      });
  }

  return (
    <div className={inPrijave === 0 ? "event" : "eventb"}>
      {inPrijave === 0 ? (
        <>
          <div className="dataContainer">
            <div className="imageContainer">
              <img src={slika1} alt="Slika" />
            </div>

            <div className="dataSubcontainer">
              <h1>{data.naziv}</h1>
              <p className="tagline">{data.kratakOpis}</p>
              <p>
                <span style={{ fontWeight: "bold" }}>Datum održavanja</span>:{" "}
                {data.datumOdrzavanja}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Vreme održavanja</span>:{" "}
                {data.vremeOdrzavanja}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Mesto održavanja</span>:{" "}
                {data.mesto}
              </p>
            </div>
          </div>
          <p>{data.opis}</p>

          <div className="btns">
            {datumOdrzavanja > new Date() ? (
              <>
                {window.sessionStorage.getItem("auth_token") != null ? (
                  <>
                    {teams.length > 0 ? (
                      <>
                        <div className="btnsSub">
                          <div>
                            <select
                              value={selectedTeam}
                              onChange={handleTeamChange}
                              style={{
                                backgroundColor: "#FFBD33",
                                borderRadius: "5px",
                                width: "175px",
                                height: "40px",
                                marginRight: "15px",
                                padding: 0.3 + "em",
                                margin: 0.2 + "em",
                              }}
                            >
                              {teams.map((team, index) => (
                                <option key={index} value={team.nazivTima}>
                                  {team.nazivTima}
                                </option>
                              ))}
                            </select>
                          </div>
                          <button className={"btn1"} onClick={prijavaTima}>
                            <p>Prijavi tim</p>
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/teams"
                          className={"btn1"}
                          style={{ width: "200px", height: "30px" }}
                        >
                          <p>Kreiraj tim za prijavu</p>
                        </Link>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <p>
                      <span className="spanStyle">
                        Da biste se prijavili za događaj
                      </span>{" "}
                      <Link to="/login" className="spanStyle1">
                        ulogujte se.
                      </Link>
                    </p>
                  </>
                )}
              </>
            ) : (
              <>
                <button className={"btn1"} onClick={preuzmiRezultate}>
                  <p>Preuzmi rezultate</p>
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="dataContainer">
            <div className="imageContainer1">
              <img src={slika2} alt="Slika" />
            </div>

            <div className="dataSubcontainerb">
              <h1 style={{ marginLeft: 0.72 + "em" }}>{data.nazivDogadjaja}</h1>
              <p className="datab">{data.nazivTima}</p>
              <p className="datab">
                {data.datum} • {data.vreme}
              </p>
            </div>
          </div>

          <div className="btns">
            <div className="btnsSub">
              <button className="trash">
                <FaTrashAlt
                  className="btnb"
                  onClick={obrisiPrijavljenDogadjaj}
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Event;
