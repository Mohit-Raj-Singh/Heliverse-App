import React from "react";
import {
  Box,
  VStack,
  Divider,
  Text,
  CheckboxGroup,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initGender = searchParams.getAll("gender");
  const [gender, setGender] = useState(initGender || []);

  const initDomain = searchParams.getAll("domain");
  const [domain, setDomain] = useState(initDomain || []);

  const initAvailable = searchParams.getAll("available");
  const [available, setAvailable] = useState(initAvailable || true);

  const initNotAvailable = searchParams.getAll("available");
  const [notAvailable, setNotAvailable] = useState(initNotAvailable || false);

  const initQuery = searchParams.get("q");
  const [q, setQuery] = useState(initQuery || "");

  const handleGender = (el) => {
    setGender(el);
  };

  const handleDomain = (el) => {
    setDomain(el);
  };

  const handleAvailable = (el) => {
    setAvailable(el);
  };

  const handleNonAvailable = (el) => {
    setNotAvailable(el);
  };

  useEffect(() => {
    const params = {};
    gender && (params.gender = gender);
    domain && (params.domain = domain);
    available && (params.available = available);

    q && (params.q = q);
    setSearchParams(params);
  }, [
    gender,
    setGender,
    domain,
    setDomain,
    available,
    setAvailable,
    q,
    setQuery,
    setNotAvailable,
  ]);

  return (
    <>
      <VStack
        alignItems={"flex-start"}
        spacing={1}
        position={"fixed"}
        top={"7%"}
        bottom={"1000px"}
        marginLeft={"20px"}
        marginTop={"30px"}
      >
        <SearchBar />

        <Divider />
        <Button
          backgroundColor={"rgb(16, 5, 68)"}
          color={"white"}
          borderRadius={"10px"}
          padding={"20px 25px"}
          marginTop="50px"
        >
          <Link to="/teamlist">Team List</Link>
        </Button>

        <Divider />


        <Box pl={4}>
          <Text
            fontSize={"14px"}
            fontWeight={700}
            color="#282c3f"
            textAlign={"left"}
          >
            Gender
          </Text>
          <CheckboxGroup
            colorScheme={"pink"}
            size={"sm"}
            onChange={handleGender}
            defaultValue={gender}
          >
            <VStack alignItems={"flex-start"} mt={"1"} spacing={1}>
              <Checkbox value="Male" checked>
                Male
              </Checkbox>
              <Checkbox value="Female">Female</Checkbox>
              <Checkbox value="Agender">Agender</Checkbox>
              <Checkbox value="Bigender">Bigender</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>
        <Divider />

        <Box pl={4}>
          <Text
            textAlign={"left"}
            fontSize={"14px"}
            fontWeight={700}
            color="#282c3f"
          >
            Domain
          </Text>
          <CheckboxGroup
            size={"sm"}
            colorScheme={"pink"}
            onChange={handleDomain}
            defaultValue={domain}
          >
            <VStack alignItems={"flex-start"} mt={1} spacing={1}>
              <Checkbox value={"Sales"}>Sales</Checkbox>
              <Checkbox value={"Finance"}>Finance</Checkbox>
              <Checkbox value={"Marketing"}>Marketing</Checkbox>
              <Checkbox value={"IT"}>IT</Checkbox>
              <Checkbox value={"Management"}>Management</Checkbox>
              <Checkbox value={"Business Development"}>
                Business Development
              </Checkbox>
              <Checkbox value={"UI Designing"}>UI Designing</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>
        <Divider />

        <Box pl={4}>
          <Text
            textAlign={"left"}
            fontSize={"14px"}
            fontWeight={700}
            color="#282c3f"
          >
            Availablity
          </Text>
          <CheckboxGroup
            size={"sm"}
            colorScheme={"pink"}
            onChange={handleAvailable}
            defaultValue={available}
          >
            <VStack alignItems={"flex-start"} mt={1} spacing={1}>
              <Checkbox value={true}>Available</Checkbox>
            </VStack>
          </CheckboxGroup>

          <CheckboxGroup
            size={"sm"}
            colorScheme={"pink"}
            onChange={handleNonAvailable}
            defaultValue={notAvailable}
          >
            <VStack alignItems={"flex-start"} mt={1} spacing={1}>
              <Checkbox value={false}>Not-Available</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>
        <Divider />


        <Divider />
      </VStack>
    </>
  );
};

export default Filter;
