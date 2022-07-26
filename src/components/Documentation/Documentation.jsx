import React, { useState } from 'react';
import './Documentation.css'
import { useParams } from 'react-router-dom'
import TextArea from './TextArea';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DATA from "./DocData";
import axios  from 'axios'

export const Documentation = () => {
  const { api } = useParams()

  const [typeOfReq, setTypeOfReq] = useState('get');
  const [Api, setApi] = useState(DATA[api]?.api ? DATA[api]?.api : "")
  const [reqData, setreqData] = useState(DATA[api].req)
  const [resData, setresData] = useState()

  const handleChange = (event) => {
    setTypeOfReq(event.target.value);
  };

  console.log(JSON.parse(DATA[api].req))

  const hitAPI = async () => {
    console.log(Api)
    console.log(typeOfReq)
    console.log(JSON.parse(reqData))
    let tempData = JSON.parse(reqData)
    if (typeOfReq === "post") {
      const {data} = await axios.post(Api, tempData)
      console.log(data)
      setresData(data)
    }
    else if (typeOfReq === "get") {
      const {data} = await axios.get(Api, tempData)
      console.log(data)
      setresData(data)
    }
    else if (typeOfReq === "delete") {
      const {data} = await axios.delete(Api, tempData)
      console.log(data)
      setresData(data)
    }
    else if (typeOfReq === "put") {
      const {data} = await axios.put(Api, tempData)
      console.log(data)
      setresData(data)
    }
  }

  return (
    <>
      <div className='documentation-container'>
        <div className='documentation-title'>
          API DOCUMENTATION for {api}
        </div>
        <div className='api-input-box'>
          <div className="api-input-box-left">
            <input type="text" placeholder="Enter API" value={Api} />
            <button onClick={hitAPI}>Submit</button>
          </div>
          <div className='api-input-box-right'>
            <span>Type of request</span>
            <Box style={{ margin: "10px 0px", borderRadius: "20px" }} sx={{ minWidth: 100 }}>
              <FormControl fullWidth sx={{ backgroundColor: "white", borderRadius: "20px" }}>
                <Select
                  sx={{ backgroundColor: "white", color: "black" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={typeOfReq}
                  label=""
                  onChange={handleChange}
                >
                  <MenuItem value={'get'}>Get</MenuItem>
                  <MenuItem value={'post'}>Post</MenuItem>
                  <MenuItem value={'delete'}>Delete</MenuItem>
                  <MenuItem value={'put'}>Put</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="code-editor-container">
          <TextArea title="Request" useLocalStorageName="req" data={reqData} />
          <TextArea title="Response" useLocalStorageName="res" data={JSON.stringify(resData, null, 2) }/>
        </div>
      </div>
    </>
  )
}

export default Documentation;