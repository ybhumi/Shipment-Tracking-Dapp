// import React , {useState, useEffect, useContext } from "react";

// //internal 
//  import {
//   Table, Form, Services, Profile,CompleteShipment,GetShipment, StartShipment} from "../Components/index"

//  import { TrackingContext } from "../Conetxt/TrackingContext";

// const index = () => {
//   const {
//     currentUser,
//     createShipment,
//     getAllShipment,
//     completeShipment,
//     getShipment,
//     StartShipment,
//     getShipmentsCount
//   } = useContext(TrackingContext);
// //state variable

// const [createShipmentModal , setCreateShipmentModal] = useState(false);
// const [openProfile , setOpenProfile] = useState(false);
// const [startModal , setStratModal] = useState(false);
// const [completeModal , setCompleteModal] = useState(false);
// const [getModal , setGetModal] = useState(false);
// //data state variable
// const [allShipmentsdata , setallShipmentsdata] = useState();

// useEffect(() => {
// const getCampaignsData = getAllShipment();

// return async() => {
//   const allData = await getCampaignsData;
//   setallShipmentsdata(allData);
// }
// },[] )

// return(
//   <>
//   <Services
//   setOpenProfile = {setOpenProfile}
//   setCompleteModal = {setCompleteModal}
//   setGetModal = {setGetModal}
//   setStratModal = {setStratModal}
//   />

//   <Table
//   setCreateShipmentModal={setCreateShipmentModal}
//   allShipmentsdata={allShipmentsdata}
//   />

//   <Form
//   createShipmentModal ={createShipmentModal}
//   createShipment = {createShipment}
//   setCreateShipmentModal ={setCreateShipmentModal}
//   />

//   <Profile
//   openProfile = {openProfile}
//   setOpenProfile ={setOpenProfile}
//   currentUser = {currentUser}
//   getShipmentsCount = {getShipmentsCount}
//   />
//   <CompleteShipment
//   completeModal= {completeModal}
//   setCompleteModal = {setCompleteModal}
//   completeShipment = {completeShipment}
//   />
//   <GetShipment

//   getModal = {getModal}
//   setGetModal = {setGetModal}
//   getShipment = {getShipment}
  
//   />
// <StartShipment
// startModal = {startModal}
// setStratModal = {setStratModal}
// StartShipment = {StartShipment}
// />




//   </>
// )




// };

// export default index;

import React, { useState, useEffect, useContext } from "react";

// Internal imports with unique aliases
import {
  Table as ImportedTable,
  Form as ImportedForm,
  Services as ImportedServices,
  Profile as ImportedProfile,
  CompleteShipment as ImportedCompleteShipment,
  GetShipment as ImportedGetShipment,
  StartShipment as ImportedStartShipment,
} from "../Components/index";

import { TrackingContext } from "../Conetxt/TrackingContext";

const Index = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    StartShipment,
    getShipmentsCount,
  } = useContext(TrackingContext);

  // State variables
  const [createShipmentModal, setCreateShipmentModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStratModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModal, setGetModal] = useState(false);

  // Data state variable
  const [allShipmentsdata, setAllShipmentsdata] = useState();

  useEffect(() => {
    const getCampaignsData = getAllShipment();

    // Use an async function to fetch data and set state
    const fetchData = async () => {
      const allData = await getCampaignsData;
      setAllShipmentsdata(allData);
    };

    fetchData();
  }, []);

  return (
    <>
      <ImportedServices
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModal={setGetModal}
        setStratModal={setStratModal}
      />

      <ImportedTable
        setCreateShipmentModal={setCreateShipmentModal}
        allShipmentsdata={allShipmentsdata}
      />

      <ImportedForm
        createShipmentModal={createShipmentModal}
        createShipment={createShipment}
        setCreateShipmentModal={setCreateShipmentModal}
      />

      <ImportedProfile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
      />

      <ImportedCompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />

      <ImportedGetShipment
        getModal={getModal}
        setGetModal={setGetModal}
        getShipment={getShipment}
      />

      <ImportedStartShipment
        startModal={startModal}
        setStratModal={setStratModal}
        StartShipment={StartShipment}
      />
    </>
  );
};

export default Index;
