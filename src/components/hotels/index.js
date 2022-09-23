import { SpeedDial, SpeedDialIcon, TableCell } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ContentWrapper } from "../shared/components/ContentWrapper";
import { DeaksModal } from "../shared/components/DeaksModal";
import { DeaksTable } from "../shared/components/DeaksTable";
import { FilterSection } from "../shared/components/FilterSection";
import { usePagination } from "../shared/hooks/usePagination";
import { useSearch } from "../shared/hooks/useSearch";
import { HotelModal } from "./HotelModal";
import { hotelHeadings } from "./utils/hotelUtils";
import "./styles/hotels.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
  deleteHotelApi,
  getHotelInfo,
  getHotels,
} from "../shared/services/hotelServices";
import { NotificationManager } from "react-notifications";
import { StyledIconButton, StyledTableRow } from "../users/utils/userUtils";
import { Stack } from "@mui/system";
import DeaksDialog from "../shared/components/DeaksDialog";

export const Hotels = () => {
  const { SearchInput, searchKeyword } = useSearch("Search Hotels");
  const [hotelData, setHotelData] = useState([]);
  const [hotelInfo, sethotelInfo] = useState({});
  const [selectedHotelInfo, setSelectedHotelInfo] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedDeleteHotel, setSelectedDeleteHotel] = useState("");
  const Paginations = usePagination(20);
  const queryParams = useMemo(() => {
    return {
      name: searchKeyword,
      sortBy: "",
      orderBy: "",
      limit: Paginations.props.rowsPerPage,
      skip: Paginations.props.page * Paginations.props.rowsPerPage,
    };
  });

  // trigger Delete modal
  const triggerDelete = useCallback((id) => {
    setDeleteDialogOpen(true);
    setSelectedDeleteHotel(id);
  }, []);

  const deleteHotel = useCallback(async () => {
    try {
      await deleteHotelApi(selectedDeleteHotel);
      NotificationManager.success("User deleted sucessfully");
      setDeleteDialogOpen(false);
      fetchHotels();
    } catch (error) {
      setDeleteDialogOpen(false);
    }
  });

  const speedDialClickHandler = () => {
    setModalType("Add Hotel");
    setModalOpen(true);
  };

  const handleEditHotel = useCallback(async (id) => {
    try {
      const info = await getHotelInfo(id);
      setModalType("Edit Hotel");
      setModalOpen(true);
      setSelectedHotelInfo(id);
      const { SOAMail, hotelName, latitude, longitude } = info.data;
      sethotelInfo({
        SOAemail: SOAMail,
        hotelName: hotelName,
        longitude: latitude,
        latitude: longitude,
      });
      console.log(info);
    } catch (error) {
      NotificationManager.error(error);
    }
  }, []);

  const fetchHotels = useCallback(async () => {
    try {
      const response = await getHotels(queryParams);
      setHotelData(response.data);
    } catch (error) {
      NotificationManager.error(error);
    }
  }, [searchKeyword, deleteHotel, Paginations]);

  useEffect(() => {
    fetchHotels();
  }, [searchKeyword, Paginations.props.rowsPerPage, Paginations.props.page]);

  return (
    <ContentWrapper headerName="Hotels">
      <FilterSection>
        {SearchInput}
        {/* <SelectItem
          key="accountStatusOptions"
          setFunction={selectedAccountStatus}
          options={accountStatusOptions}
          label={"Job Status"}
        />
        <SelectItem
          key="jobStatusOptions"
          options={jobStatusOptions}
          setFunction={(data) => setJobStatus(data)}
          label={"Job Status"}
        /> */}
      </FilterSection>
      <DeaksTable headings={hotelHeadings}>
        {hotelData.map((item, index) => {
          return (
            <StyledTableRow hover role="table" tabIndex={-1} key={index}>
              <>
                <TableCell key={`${item.hotelName}`} align="left">
                  {item.hotelName}
                </TableCell>
                <TableCell key={`${item.SOAMail}`} align="left">
                  {item.SOAMail}
                </TableCell>
                <TableCell key={`${item._id}`} align="left">
                  <Stack direction="row" spacing={1}>
                    <StyledIconButton
                      size="small"
                      aria-label="delete Hotel"
                      onClick={() => {
                        triggerDelete(item._id);
                      }}
                    >
                      <DeleteOutlinedIcon size="small" />
                    </StyledIconButton>
                    <StyledIconButton
                      size="small"
                      aria-label="Edit User"
                      onClick={() => {
                        handleEditHotel(item._id);
                      }}
                    >
                      <ModeEditOutlineOutlinedIcon size="small" />
                    </StyledIconButton>
                  </Stack>
                </TableCell>
              </>
            </StyledTableRow>
          );
        })}
      </DeaksTable>

      <DeaksModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalHeader={modalType}
        modalWidth={700}
      >
        <HotelModal
          modalType={modalType}
          setModalOpen={setModalOpen}
          fetchHotels={fetchHotels}
          hotelInfo={hotelInfo}
          selectedHotelInfo={selectedHotelInfo}
        />
      </DeaksModal>
      <DeaksDialog
        heading="DELETE HOTEL"
        message="Every data belongs to this hotel will get deleted from the database, are you sure to continue ?"
        okButton="Yes"
        cancelButton="Cancel"
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialogOpen={setDeleteDialogOpen}
        confirmFunction={deleteHotel}
      />

      <SpeedDial
        onClick={speedDialClickHandler}
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      ></SpeedDial>
      {Paginations}
    </ContentWrapper>
  );
};
